(ns app.domain.firebase
  (:require [re-frame.core :as rf]
            ["firebase" :as firebase]
            ["firebase/auth"]))

(defn firebase-user->user
  "Convert Firebase user object to Clojure map"
  [user]
  (when user
    {:uid (.-uid user)
     :display-name (.-displayName user)
     :photo-url (.-photoURL user)
     :email (.-email user)
     :user-obj user}))

(defn- observe-auth-state []
  (rf/dispatch [::set-loading-user-from-cache true])
  (.onAuthStateChanged
   (firebase/auth)
   (fn [user]
     (if user
       (rf/dispatch [::user-logged-in (firebase-user->user user)])
       (rf/dispatch [::user-logged-out])))))

(defn init [config]
  (when (zero? (alength firebase/apps))
    (firebase/initializeApp (clj->js config))
    (observe-auth-state)))

;; Events
(rf/reg-event-fx
 ::login-with-email ;; equivalent to :app.domain.firebase/login-with-email
 (fn [cofx [_ form-state]]
   {:db (assoc (:db cofx)
               ::login-loading? true)
    :firebase/email-auth form-state}))

(rf/reg-event-db
 ::email-auth-error
 (fn [db [_ err]]
   (assoc db ::login-error (.-message err) ::login-loading? false)))

(rf/reg-event-db
 ::user-logged-in
 (fn [db [_ user]]
   (assoc db ::user user ::login-loading? false ::loading-user-from-cache? false)))

(rf/reg-event-fx
 ::logout
 (fn [_ _]
   {:firebase/logout {}}))

(rf/reg-event-db
 ::user-logged-out
 (fn [db [_ _]]
   (assoc db ::user nil ::loading-loading? false ::loading-user-from-cache? false)))

(rf/reg-event-db
 ::set-loading-user-from-cache
 (fn [db [_ loading-user-from-cache?]]
   (assoc db ::loading-user-from-cache? loading-user-from-cache?)))

(rf/reg-event-fx
 ::create-graphic
 (fn [{:keys [db]} _]
   {:db (assoc db ::creating-graphic? true)
    :firebase/add-to-list {:node (str "/graphics/" (-> db ::user :uid))
                           :data {:created-at (js/Date)
                                  :name "Untitled"}
                           :on-success [::create-graphic-success]
                           :on-error [::create-graphic-error]}}))

(rf/reg-event-fx
 ::create-graphic-success
 (fn [{:keys [db]} [_ new-entry]]
   (js/console.log new-entry)
   {:db (dissoc db ::creating-graphic? ::create-graphic-error)
    :dispatch [::fetch-graphics]}))

(rf/reg-event-db
 ::create-graphic-error
 (fn [db [_ error]]
   (-> db
       (dissoc ::creating-graphic?)
       (assoc ::create-graphic-error error))))

(rf/reg-event-fx
 ::fetch-graphics
 (fn [{:keys [db]} _]
   {:db (assoc db ::fetching-graphics? true)
    :firebase/read {:node (str "/graphics/" (-> db ::user :uid))
                    :on-success [::fetch-graphics-success]}}))

(rf/reg-event-db
 ::fetch-graphics-success
 (fn [db [_ graphics]]
   (-> db
       (dissoc ::fetching-graphics?)
       (assoc ::graphics graphics))))

(rf/reg-event-fx
 ::delete-graphic
 (fn [{:keys [db]} [_ graphic-id]]
   {:db (update db ::deleting-graphic-ids conj graphic-id)
    :firebase/delete {:node (str "/graphics/" (-> db ::user :uid) "/" (name graphic-id))
                      :on-success [::delete-graphic-success graphic-id]}}))

(rf/reg-event-db
 ::delete-graphic-success
 (fn [db [_ graphic-id]]
   (-> db
       (update ::deleting-graphic-ids #(remove #{graphic-id} %)) ;; 1
       (update ::graphics dissoc (keyword graphic-id))))) ;; 2

(rf/reg-event-fx
 ::update-graphic
 (fn [{:keys [db]} [_ graphic-id new-graphic]]
   {:db (assoc db ::updating-graphic? true)
    :firebase/update {:node (str "/graphics/" (-> db ::user :uid) "/" (name graphic-id))
                      :data new-graphic
                      :on-success [::update-graphic-success graphic-id new-graphic]
                      :on-error [::update-graphic-error]}}))

(rf/reg-event-db
 ::update-graphic-success
 (fn [db [_ graphic-id new-graphic]]
   (-> db
       (assoc-in [::graphics graphic-id :fabric-json] (-> new-graphic :fabric-json js->clj))
       (dissoc ::updating-graphic?))))

(rf/reg-event-db
 ::update-graphic-error
 (fn [db [_ err]]
   (js/console.log err)
   (dissoc db ::updating-graphic?)))

;; Effects
(rf/reg-fx
 :firebase/email-auth
 (fn [{:keys [email password]}]
   (-> firebase
       (.auth)
       (.signInWithEmailAndPassword email password)
       (.catch (fn [err]
                 (rf/dispatch [::email-auth-error err]))))))

(rf/reg-fx
 :firebase/logout
 (fn [_]
   (-> firebase
       (.auth)
       (.signOut))))

(rf/reg-fx
 :firebase/add-to-list
 (fn [{:keys [node data on-error on-success]}]
   (let [ref (-> firebase
                 (.database)
                 (.ref node))
         new-entry (.push ref)]
     (-> new-entry
        (.set (clj->js data))
        (.then #(rf/dispatch (conj on-success new-entry)))
        (.catch (fn [error]
                   (rf/dispatch (conj on-error error))))))
   ))

(rf/reg-fx
 :firebase/read
 (fn [{:keys [node on-success on-error]}]
   (-> firebase
       (.database)
       (.ref node)
       (.once "value")
       (.then (fn [snapshot]
                (rf/dispatch (conj on-success (-> snapshot
                                                  (.val)
                                                  (js->clj :keywordize-keys true))))))
       (.catch (fn [error]
                 (when on-error
                   (rf/dispatch (conj on-error error))))))))

(rf/reg-fx
 :firebase/delete
 (fn [{:keys [node on-success on-error]}]
   (-> firebase
       .database
       (.ref node)
       .remove
       (.then #(when on-success (rf/dispatch on-success)))
       (.catch #(when on-error (rf/dispatch on-error)))
       )))

(rf/reg-fx
 :firebase/update
 (fn [{:keys [node data on-success on-error]}]
   (-> firebase
       .database
       (.ref node)
       (.update (clj->js data))
       (.then #(when on-success (rf/dispatch on-success)))
       (.catch #(when on-error (rf/dispatch (conj on-error %)))))))

;; Subscriptions
(rf/reg-sub
 ::me
 (fn [db _]
   (::user db)))

(rf/reg-sub
 ::login-loading?
 (fn [db _]
   (-> db ::login-loading?)))

(rf/reg-sub
 ::login-error
 #(-> %1 ::login-error))

(rf/reg-sub
 ::loading-user-from-cache?
 #(-> %1 ::loading-user-from-cache?))

(rf/reg-sub
 ::creating-graphic?
 #(-> % ::creating-graphic?))

(rf/reg-sub
 ::graphics
 #(select-keys % [::fetching-graphics? ::graphics]))

(defn in?
  "true if coll contains elm"
  [coll elm]
  (some #(= elm %) coll))

(rf/reg-sub
 ::deleting-graphic-id?
 (fn [db [_ id]]
   (-> db
       ::deleting-graphic-ids
       (in? id))))

(rf/reg-sub
 ::graphic-by-id
 (fn [db [_ id]]
   (get-in db [::graphics id])))

(rf/reg-sub
 ::updating-graphic?
 #(-> % ::updating-graphic?))

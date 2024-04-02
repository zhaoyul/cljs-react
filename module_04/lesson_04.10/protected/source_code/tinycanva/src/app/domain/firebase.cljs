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
   (assoc db ::user user ::login-loading? false)))

(rf/reg-event-db
 ::user-logged-out
 (fn [db [_ _]]
   (dissoc db ::user)))

;; Effects
(rf/reg-fx
 :firebase/email-auth
 (fn [{:keys [email password]}]
   (-> firebase
       (.auth)
       (.signInWithEmailAndPassword email password)
       (.catch (fn [err]
                 (rf/dispatch [::email-auth-error err]))))))

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

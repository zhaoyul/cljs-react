(ns app.pages.graphics
  (:require [app.components.nav :as nav]
            [app.components.auth :as auth]
            [re-frame.core :as rf]
            [reagent.core :as r]
            ["@blueprintjs/core" :refer (Button Intent Spinner Card)]))

(defn header []
  (let [creating-graphic? @(rf/subscribe [:app.domain.firebase/creating-graphic?])]
    [:div {:class "flex justify-between my-4 mx-auto"}
     [:div.text-xl "Graphics"]
     [:> Button {:text "Create new" :intent (.-PRIMARY Intent) :loading creating-graphic?
                 :on-click #(rf/dispatch [:app.domain.firebase/create-graphic])}]]))

(defn graphic-card [id graphic]
  (let [deleting? @(rf/subscribe [:app.domain.firebase/deleting-graphic-id? id])]
    [:div {:class "w-full md:w-1/6 m-2"}
     [:> Card {:interactive true }
      [:div.truncate id]
      [:div.text-lg (-> graphic :name)]
      [:div.text-xs.text-gray-500 (-> graphic :created-at)]]

     [:> Button {:minimal true :intent (.-DANGER Intent) :icon "trash" :loading deleting?
                 :on-click #(rf/dispatch [:app.domain.firebase/delete-graphic id])}
      ]]))

(defn graphics-list []
  (r/create-class
   {:component-did-mount
    (fn []
      (rf/dispatch [:app.domain.firebase/fetch-graphics]))
    :display-name ::graphics-list
    :reagent-render
    (fn []
      (let [{:app.domain.firebase/keys [fetching-graphics? graphics]} @(rf/subscribe [:app.domain.firebase/graphics])]
        [:div
         (when fetching-graphics?
           [:> Spinner])
         [:div.flex.flex-wrap
          (for [[id g] graphics]
            ^{:key id} [graphic-card id g])]]))}))

(defn page []
  [auth/private
   [nav/top]
   [:div {:class "w-100 md:w-2/3 m-auto p-4"}
    [header]
    [graphics-list]
    ]])

(comment
  (rf/dispatch [:app.domain.firebase/create-graphic])

  (rf/dispatch [:app.domain.firebase/fetch-graphics])

  (let [first-graphic-id (-> re-frame.db/app-db
                             deref
                             :app.domain.firebase/graphics
                             keys
                             first
                             name)]
    (rf/dispatch [:app.domain.firebase/delete-graphic first-graphic-id])
    )

  ;; multi delete
  (for [id (-> re-frame.db/app-db
              deref
              :app.domain.firebase/graphics
              keys)]
    (rf/dispatch [:app.domain.firebase/delete-graphic id]))
  )

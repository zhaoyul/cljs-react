(ns app.pages.graphics.detail
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.router :as router]
            ["react-router-dom" :refer (Link)]
            ["@blueprintjs/core" :refer (Navbar Alignment Button)]
            ))

(def route-props (r/atom nil))

(defn nav [graphic-id graphic]
  [:> Navbar {:class "bg-blue-200"}
   [:> (.-Group Navbar) {:align (.-LEFT Alignment)}
    [:> Link {:to "/graphics"}
     [:> Button {:minimal true
                 :icon "home"}]]
    [:> (.-Divider Navbar)]
    [:> (.-Heading Navbar)
     (-> graphic :name)]]])

(defn page [props]
  (let [graphic-id (-> props
                       :match
                       (goog.object/getValueByKeys "params" "graphicId")
                       keyword) ;; 1
        graphic (when graphic-id
                  @(rf/subscribe [:app.domain.firebase/graphic-by-id (keyword graphic-id)])) ;; 2
        ]
    [:<>
     (when graphic ;; 3
       [:<>
        [nav graphic-id graphic] ;; 4
        [:div (str graphic)]])
     [:div "Placeholder for /graphics/:graphicId"]]))

(comment
  (-> @route-props
      :params
      (aget "graphicId"))
  )

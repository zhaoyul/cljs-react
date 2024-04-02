(ns app.pages.graphics.detail
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.router :as router]
            [app.components.editor :as editor]
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

(def editor-state (r/atom {}))

(defn page [props]
  (let [graphic-id (-> props
                       :match
                       (goog.object/getValueByKeys "params" "graphicId")
                       keyword)
        graphic (when graphic-id
                  @(rf/subscribe [:app.domain.firebase/graphic-by-id graphic-id]))
	]
    [:<>
     [:> router/props-elevator {:elevate-fn #(reset! route-props %)}]
     (when graphic
       [:<>
        [nav graphic-id graphic]
		;; 2
        [editor/editor {:f-canvas (-> editor-state deref :f-canvas)
                        :set-f-canvas #(swap! editor-state assoc :f-canvas %)}
						]])]))

(comment
  (-> @route-props
      :params
      (aget "graphicId"))
  )

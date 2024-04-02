(ns app.pages.graphics.detail
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.editor :as editor]
            ["react-router-dom" :refer (Link)]
            ["@blueprintjs/core" :refer (Navbar Alignment Button EditableText)]
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
     (-> graphic :name)
     ;; [:> EditableText {:default-value (-> graphic :name)
     ;;                   :on-confirm #(rf/dispatch [:app.domain.firebase/update-graphic graphic-id (assoc graphic :name %)])}]
     ]]])

(def editor-state (r/atom {}))

(defn page [props]
  (let [graphic-id (-> props
                       :match
                       (goog.object/getValueByKeys "params" "graphicId")
                       keyword)
        graphic (when graphic-id
                  @(rf/subscribe [:app.domain.firebase/graphic-by-id graphic-id]))
        ;; subscribe to updating-graphic?
        updating-graphic? @(rf/subscribe [:app.domain.firebase/updating-graphic?])]
    (when graphic
      [:<>
       [nav graphic-id graphic]
       [editor/editor {:f-canvas (-> editor-state deref :f-canvas)
                       :set-f-canvas #(swap! editor-state assoc :f-canvas %)

                       ;; pass Reframe state to editor
                       :saving? updating-graphic?
                       :on-save #(rf/dispatch [:app.domain.firebase/update-graphic graphic-id {:fabric-json %}])
                       :init-state (-> graphic :fabric-json)}]])))

(comment
  (-> @route-props
      :params
      (aget "graphicId"))
  )

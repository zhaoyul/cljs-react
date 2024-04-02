(ns app.components.editor
  (:require [reagent.core :as r]
            ["fabric" :refer (fabric)]
            ["file-saver" :refer (saveAs)]
            ["@blueprintjs/core" :refer (Colors Button Intent InputGroup)]))

(defn canvas [f-canvas set-f-canvas set-selected-object]
  (r/create-class
   {:display-name ::canvas

    :component-did-mount
    (fn []
      (let [initialized-canvas (new (aget fabric "Canvas") "c"
                                    (clj->js {:height 600 :width 800}))]
        (set-f-canvas initialized-canvas)

        ;; object selection event hook
        (.on initialized-canvas "mouse:down"
             #(set-selected-object (.-target %)))
        ))

    :component-will-unmount
    (fn []
      (when f-canvas
        (.dispose f-canvas))
      (set-f-canvas nil))

    :reagent-render
    (fn []
      [:canvas#c.border-2.border-gray-700])}))

(defn tool-title [t]
  [:div.text-gray-800.text-lg.py-2 t])

(defn bg-color-card [c on-click]
  [:div {:class "h-5 w-5 cursor-pointer"
         :on-click on-click
         :style {:background-color c}}])

(defn bg-color [f-canvas]
  (let [colors (-> Colors js->clj vals)]
    [:<>
     [tool-title "Background color"]
     [:div {:class "flex flex-wrap"}
      (for [c colors]
        ^{:key c}
        [bg-color-card c #(.setBackgroundColor
                           f-canvas c
                           (fn [] (.requestRenderAll f-canvas)))])]]))

(defn add-text [ff f-canvas]
  (.add f-canvas
   (new (aget fabric "IText") "New text" (clj->js {:fontFamily ff}))))

(defn text [f-canvas]
  (let [font-families ["Helvetica" "Times New Roman" "Georgia" "Monaco"]]
    [:<>
     [tool-title "Text"]
     (for [ff font-families]
       ^{:key ff}
       [:> Button {:text ff
                   :style {:font-family ff}
                   :minimal true
                   :on-click #(add-text ff f-canvas)}])]))

(defn make-shape [shape-name params]
  (let [klass (aget fabric shape-name)]
    (new klass (clj->js params))))

(defn add-shape [s f-canvas]
  (let [shape-obj (condp = s
                    :rectangle (make-shape "Rect" {:height 24 :width 24 :left 80 :top 80 :fill "red"})
                    :ellipse (make-shape "Ellipse" {:rx 40 :ry 16 :fill "blue"})
                    :circle (make-shape "Circle" {:radius 24 :fill "green"})
                    :triangle (make-shape "Triangle" {}))]
    (.add f-canvas shape-obj)))

(defn shapes [f-canvas]
  (let [shapes [:triangle :rectangle :ellipse :circle]]
    [:<>
     [tool-title "Shapes"]
     (for [s shapes]
       ^{:key s}
       [:> Button {:text s :minimal true :on-click #(add-shape s f-canvas)}])]))

(defn editor [{:keys [f-canvas set-f-canvas]}]
  [:div.flex.bg-gray-200
    ;; sidebar
    [:div {:class "w-1/3 md:w-1/5 px-2 bg-white"}
      (when f-canvas
        [:<>
         [bg-color f-canvas]
         [text f-canvas]
         [shapes f-canvas]
         ])]
     ;; canvas area
     [:div {:class "w-2/3 md:w-4/5 p-2"}
      [:div.mt-3
       [canvas f-canvas set-f-canvas #()]
       ]]])

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

(defn export-png [f-canvas]
  (let [data-url (.toDataURL f-canvas (clj->js {:format "png"}))]
    (saveAs data-url "export.png")))

(defn export-svg [f-canvas]
  (let [svg (.toSVG f-canvas)
        blob (new js/Blob [svg] (clj->js {:type "text/plain;charset=utf-8"}))]
    (saveAs blob "export.svg")))

(defn toolbar [f-canvas saving? on-save]
  [:div.flex.justify-between.pr-3
   [:div.flex
    [:> Button {:minimal true
                :text "Export PNG"
                :icon "media"
                :on-click #(export-png f-canvas)}]
    [:> Button {:minimal true
                :text "Export SVG"
                :icon "document"
                :on-click #(export-svg f-canvas)}]
    ]
   [:> Button {:intent (.-PRIMARY Intent)
               :text "Save"
               :loading saving?
               :on-click #(on-save (.toJSON f-canvas))
               :icon "floppy-disk"}]])

(def selected-object (r/atom nil))

(defn f-obj->props-form [f-canvas f-obj]
  (let [kv-pairs (-> f-obj .toObject js->clj)]
    [:div
     [:div.flex.justify-between
      [:div.text-lg.my-2 (-> kv-pairs (get "type"))] ;; selected-object type
      [:> Button {:icon "trash" ;; delete selected-object button
                  :minimal true
                  :intent (.-DANGER Intent)
                  :text "Delete"
                  :on-click (fn []
                              (.remove f-canvas f-obj)
                              (reset! selected-object nil))}]]
     [:div {:class "flex flex-wrap"}
      (for [[k v] kv-pairs] ;; props editor form
        ^{:key k}
        [:div {:class "w-1/6 p-1"}
         [:div k]
         [:> InputGroup {:type "text"
                         :default-value v
                         :on-change
                         (fn [e]
                           (.set f-obj (clj->js {k (.. e -target -value)}))
                           (.requestRenderAll f-canvas))}]])]]))

(defn properties [f-canvas]
  [:div.mt-3
   (when @selected-object
     [f-obj->props-form f-canvas @selected-object])])

(defn editor [{:keys [f-canvas set-f-canvas saving? on-save init-state]}]
  ;; check if f-canvas is initalized and init-state is not nil,
  ;; if so, load the init-state using loadFromJSON method
  (when (and f-canvas init-state (not saving?))
    (.loadFromJSON f-canvas (clj->js init-state)))
  [:div.flex.bg-gray-200
   [:div {:class "w-1/3 md:w-1/5 px-2 bg-white"}
    (when f-canvas
      [:<>
       [bg-color f-canvas]
       [shapes f-canvas]
       [text f-canvas]
       ])]
   [:div {:class "w-2/3 md:w-4/5 p-2"}
    (when f-canvas
      [toolbar f-canvas saving? on-save])
    [:div.mt-3
     ;; real selected-object set function
     [canvas f-canvas set-f-canvas #(reset! selected-object %)]
     ;; properties editor component
     [properties f-canvas]]]])


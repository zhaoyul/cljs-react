(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [app.hello :refer [hello]]))

(defn heading
  "Render a heading from size :h1 to :h6"
  [text size]
  (when (keyword? size)
    [size {:class (condp = size
                    :h1 "black"
                    :h2 "gray"
                    "light-gray")} text]))

(defn card [name bio]
  [:div
   [heading name :h1]
   [heading bio :h2]])

;; [card "John Doe" "Prone to fits of apathy. Internet specialist. Unapologetic tvaholic. Twitter evangelist. Freelance thinker. Analyst."]

(defn counter [count]
  [:<>
   [:div @count]
   [:input {:type "button" :value "inc"
            :on-click #(swap! count inc)}]])

;; [counter (r/atom 0)] in render fn

(def state (r/atom {}))

(defn form []
  [:input {:value (get @state :form-val "")
           :on-change #(swap! state assoc :form-val (.. % -target -value))}])

(defn val-watcher []
  [:div (-> @state :form-val)])

(defn form-and-watcher []
  [:<>
   [form]
   [val-watcher]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (r/render [heading "Hello World" :h2] 
            (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))

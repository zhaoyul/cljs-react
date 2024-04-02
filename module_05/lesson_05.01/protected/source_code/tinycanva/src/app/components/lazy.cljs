(ns app.components.lazy
  (:require [reagent.core :as r]
            [shadow.lazy :as sl]))

(defn lazy-comp [loadable]
  (let [loaded (r/atom false)]
    (r/create-class
     {:display-name ::lazy
      :component-did-mount
      (fn []
        (sl/load loadable #(reset! loaded true)))
      :reagent-render
      (fn []
        (if @loaded
          [@loadable]
          [:div "Lazy loading ..."]))})))


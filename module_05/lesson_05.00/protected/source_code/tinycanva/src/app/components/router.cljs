(ns app.components.router
  (:require [reagent.core :as r]
            ["react" :refer (useEffect)]
            ["react-router-dom" :refer (useParams useHistory)]))

(defn props-elevator [js-react-props]
  (let [params (useParams)
        history (useHistory)
        elevate-fn (aget js-react-props "elevateFn")]
    (useEffect
     (fn []
       (elevate-fn {:params params
                    :history history})
       #())
     [history params])
    (r/as-element nil)
    ))

(ns app.components.auth
  (:require ["react-router-dom" :refer (Redirect)]
            [re-frame.core :as rf]))



(defn public [& children]
  (let [me @(rf/subscribe [:app.domain.firebase/me])]
    (if me
      [:> Redirect {:to "/graphics"}]
      [:<> children])))

(defn private [& children]
  (let [me @(rf/subscribe [:app.domain.firebase/me])
        loading-user-from-cache? @(rf/subscribe [:app.domain.firebase/loading-user-from-cache?])]

    (cond
      ;; we finished initial loading from cache, and me is nil, ie. user is not authenticated
      (and (nil? me)
           (false? loading-user-from-cache?))
      [:> Redirect {:to "/"}]

      ;; user is authenicated
      me [:<> children]

      ;; me is nil and both login-loading? and loading-user-from-cache? are either nil or true
      :else [:div "Loading ..."])))

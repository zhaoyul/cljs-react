(ns app.pages.graphics
  (:require [app.components.nav :as nav]
            [app.components.auth :as auth]))

(defn page []
  [auth/private
   [nav/top]
   [:div "Graphics List"]])

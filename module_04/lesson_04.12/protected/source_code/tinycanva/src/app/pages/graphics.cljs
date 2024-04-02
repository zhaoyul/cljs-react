(ns app.pages.graphics
  (:require [app.components.nav :as nav]
            [app.components.auth :as auth]
            [re-frame.core :as rf]))

(defn page []
  [auth/private
   [nav/top]
   [:div "Graphics List"]])


(comment
  (rf/dispatch [:app.domain.firebase/create-graphic])
  )

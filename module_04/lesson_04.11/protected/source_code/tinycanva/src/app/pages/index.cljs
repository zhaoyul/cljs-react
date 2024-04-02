(ns app.pages.index
  (:require ["react-router-dom" :refer (Link)]))

(defn page []
  [:div.m-2
   [:> Link {:to "/login" :class "mr-2"} "Login"]
   [:> Link {:to "/register"} "Register"]])


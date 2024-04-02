(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [app.pages.index :as index]
            [app.pages.login :as login]
            [app.pages.register :as register]
            ["react-router-dom" :refer (BrowserRouter Switch Route)]
            ))


(defn placeholder [title]
  [:h1 title])

(defn root-router []
  [:> BrowserRouter
   [:> Switch
    [:> Route {:exact true :path "/"} [index/page]]
    [:> Route {:path "/login"} [login/page]]
    [:> Route {:path "/register"} [register/page]]
    [:> Route {:path "/graphics"} [placeholder "Graphics List"]]

    ;; catch all
    [:> Route [placeholder "404 Not Found"]]
    ]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (r/render [root-router] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))

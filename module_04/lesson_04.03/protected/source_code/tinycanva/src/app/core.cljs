(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            ["react-router-dom" :refer (BrowserRouter Switch Route)]
            ))


(defn placeholder [title]
  [:h1 title])

(defn index-placeholder []
  [:h1 "Index"])

(def reactified-placeholder (r/reactify-component index-placeholder))

(defn root-router []
  [:> BrowserRouter
   [:> Switch
    ;; [:> Route {:exact true :path "/" :component reactified-placeholder}]
    [:> Route {:exact true :path "/"} [placeholder "Index"]]
    [:> Route {:path "/login"} [placeholder "Login"]]
    [:> Route {:path "/register"} [placeholder "Register"]]
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

(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            ["react-router-dom" :refer (BrowserRouter Switch Route)]
            ["@blueprintjs/core" :refer (Icon)]
            ))


(defn placeholder [title]
  [:h1 title])

(defn test-ui []
  [:div.w-full.h-screen.flex
   [:div.m-auto.text-center
    [:> Icon {:icon "star" :class "text-yellow-500 mb-2" :iconSize 24}]
    [:div.text-lg "Tinycanva"]
    ]])


(defn root-router []
  [:> BrowserRouter
   [:> Switch
    [:> Route {:exact true :path "/"} [placeholder "Index"]]
    [:> Route {:path "/login"} [placeholder "Login"]]
    [:> Route {:path "/register"} [placeholder "Register"]]
    [:> Route {:path "/graphics"} [placeholder "Graphics List"]]
    [:> Route {:path "/test-ui"} [test-ui]]

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

(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            ["react-router-dom" :refer (BrowserRouter Routes Route)]
            ["@blueprintjs/core" :refer (Icon)]))

(defn placeholder [title]
  [:h1 title])

(defn test-ui []
  [:div.w-full.h-screen.flex
   [:div.m-auto.text-center
    [:> Icon {:icon "star" :class "text-blue-500 mb-2" :iconSize 44}]
    [:div.text-2xl "Tinycanva"]
    ]])


(defn root-router []
  [:> BrowserRouter
   [:> Routes
    [:> Route {:path "/" :element   (r/as-element [placeholder "Indexh"])} ]
    [:> Route {:path "/login" :element (r/as-element [placeholder "Login"])}]
    [:> Route {:path "/register" :element (r/as-element [placeholder "Register"])}]
    [:> Route {:path "/graphics" :element (r/as-element [placeholder "Graphics List"])}]
    [:> Route {:path "/test-ui" :element (r/as-element [test-ui])}]

    ;; catch all
    [:> Route {:path "*" :element (r/as-element [placeholder "404 Not Found"])}]
    ]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (dom/render [root-router] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))

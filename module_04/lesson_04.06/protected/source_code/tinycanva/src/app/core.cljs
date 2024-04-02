(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.pages.index :as index]
            [app.pages.login :as login]
            [app.pages.register :as register]
            ["react-router-dom" :refer (BrowserRouter Routes Route)]
            ))


(defn placeholder [title]
  [:h1 title])

(defn root-router []
  [:> BrowserRouter
   [:> Routes
    [:> Route {:path "/" :element (r/as-element [index/page])}]
    [:> Route {:path "/login" :element (r/as-element [login/page])}]
    [:> Route {:path "/register" :element  (r/as-element [register/page])}]
    [:> Route {:path "/graphics" :element (r/as-element [placeholder "Graphics List"])}]

    ;; catch all
    [:> Route {:path "*" :element (r/as-element [placeholder "404 Not Found"])}]]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (dom/render [root-router] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))

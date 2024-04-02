(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            ["react-router-dom" :refer (BrowserRouter Route Routes)]
            ))


(defn placeholder [title]
  [:h1 title])

(defn index-placeholder []
  [:h1 "Index"])

(def reactified-placeholder (r/reactify-component index-placeholder))

(defn root-router []
  [:> BrowserRouter
   [:> Routes
    ;; 使用element属性并去掉exact属性
    [:> Route {:path "/"      :element   (r/as-element [placeholder "Index"])}]
    [:> Route {:path "/login" :element    (r/as-element [placeholder "Login"])}]
    [:> Route {:path "/register" :element (r/as-element [placeholder "Register"])}]
    [:> Route {:path "/graphics" :element (r/as-element [placeholder "Graphics List"])}]

    ;; catch all - 使用"*"作为路径匹配任何未匹配的路由
    [:> Route {:path "*" :component [placeholder "404 Not Found"]}]
    ]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (dom/render [root-router] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))

(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.dom :as rd] ;; was [reagent.core :as r]
            [app.pages.index :as index]
            [app.pages.login :as login]
            [app.pages.register :as register]
            [app.pages.graphics :as graphics]
            [app.pages.graphics.detail :as graphic-detail]
            ["react-router-dom" :refer (BrowserRouter Switch Route)]

            [app.config :as config]
            [app.domain.firebase]
            ))

;; APP_ENV will be overwritten by value in `:closure-defines`
(goog-define app-env "dev")
(def applicable-config (config/for-env (keyword app-env)))

(prn :env-is app-env)

(defn placeholder [title]
  [:h1 title])

(defn root-router []
  [:> BrowserRouter
   [:> Switch
    [:> Route {:exact true :path "/"} [index/page]]
    [:> Route {:path "/login"} [login/page]]
    [:> Route {:path "/register"} [register/page]]
    [:> Route {:path "/graphics"} [graphics/page]]

    ;; catch all
    [:> Route [placeholder "404 Not Found"]]
    ]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rd/render [root-router] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (app.domain.firebase/init (-> applicable-config :firebase))
  (render))

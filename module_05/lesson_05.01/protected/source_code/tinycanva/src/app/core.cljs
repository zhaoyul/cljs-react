(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.dom :as rd]
            [app.pages.index :as index]
            ["react-router-dom" :refer (BrowserRouter Switch Route)]

            ;; delete these
            ;; [app.pages.graphics :as graphics]
            ;; [app.pages.login :as login]
            ;; [app.pages.register :as register]

            [app.components.lazy :refer [lazy-comp]]
            [shadow.lazy :as sl]
            [app.config :as config]
            [app.domain.firebase]))

;; APP_ENV will be overwritten by value in `:closure-defines`
(goog-define app-env "dev")
(def applicable-config (config/for-env (keyword app-env)))

(defn placeholder [title]
  [:h1 title])

(defn graphics-container []
  [lazy-comp (sl/loadable app.pages.graphics/page)])

(defn root-router []
  [:> BrowserRouter
   [:> Switch
    [:> Route {:exact true :path "/"} [index/page]]
    [:> Route {:path "/login"}
     ;; sl/loadable is a macro, so can't be moved to lazy-comp
     [lazy-comp (sl/loadable app.pages.login/page)]]
    [:> Route {:path "/register"}
     [lazy-comp (sl/loadable app.pages.register/page)]]
    [:> Route {:path "/graphics"}
     [graphics-container]
     ]

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

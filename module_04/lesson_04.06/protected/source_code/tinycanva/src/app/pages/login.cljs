(ns app.pages.login
  (:require ["@blueprintjs/core" :refer (InputGroup Button Intent)]
            ["react-router-dom" :refer (Link)]
            [reagent.core :as r]))

(def state (r/atom {:email ""
                    :password ""}))

(defn page []
  (let [{:keys [email password]} @state] ; 1

    [:div.w-full.h-screen.flex.bg-gray-400 ; 2
     [:div {:class "w-2/3 md:w-1/3 m-auto bg-white px-4 rounded shadow"} ; 3

      [:div.my-4.text-2xl "Login to Tinycanva"]

      ;; 4
      [:> InputGroup {:placeholder "Email" :class "mb-2"
                      :leftIcon "envelope" :value email
                      :onChange #(swap! state assoc :email (.. % -target -value))}]

      [:> InputGroup {:value password :leftIcon "key"
                      :onChange #(swap! state assoc :password (.. % -target -value))
                      :placeholder "Password" :type :password}]

      ;; 5
      [:> Button {:text "Login" :icon "log-in" :intent (.-PRIMARY Intent)
                  :class "mt-4 mb-2" :loading false
                  :onClick #()
                  }]
      ;; 6
      [:div.my-8.bg-gray
       "New here? " [:> Link {:to "/register" :class "text-sm text-gray-600"} "Register"]]

      ]]))

(comment
  (reset! state {:email "k@k.kk" :password "k"})
  )

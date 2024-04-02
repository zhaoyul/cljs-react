(ns app.pages.login
  (:require ["@blueprintjs/core" :refer (InputGroup Button Intent Callout)]
            ["react-router-dom" :refer (Link)]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ))

(def state (r/atom {:email ""
                    :password ""}))

(defn page []
  (let [{:keys [email password]} @state]

    [:div.w-full.h-screen.flex.bg-gray-400
     [:div {:class "w-2/3 md:w-1/3 m-auto bg-white px-4 rounded shadow"}

      [:div.my-4.text-2xl "Login to Tinycanva"]

      [:> InputGroup {:placeholder "Email" :class "mb-2"
                      :leftIcon "envelope" :value email
                      :onChange #(swap! state assoc :email (.. % -target -value))}]

      [:> InputGroup {:value password :leftIcon "key"
                      :onChange #(swap! state assoc :password (.. % -target -value))
                      :placeholder "Password" :type :password}]

      [:> Button {:text "Login" :icon "log-in" :intent (.-PRIMARY Intent)
                  :class "mt-4 mb-2" :loading false
                  :onClick #(rf/dispatch [:app.domain.firebase/login-with-email @state])
                  }]

      [:div.my-8.bg-gray
       "New here? " [:> Link {:to "/register" :class "text-sm text-gray-600"} "Register"]]

      ]]))

(comment
  (reset! state {:email "k@k.kk" :password "k"})
  )

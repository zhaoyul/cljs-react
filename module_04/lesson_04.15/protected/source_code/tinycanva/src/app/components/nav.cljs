(ns app.components.nav
  (:require ["@blueprintjs/core" :refer (Navbar Button Alignment)]
            [re-frame.core :as rf]))

(defn top []
  (let [me @(rf/subscribe [:app.domain.firebase/me])]
    [:> Navbar {:class "bg-pink-200"}
     [:> (.-Group Navbar) {:align (.-LEFT Alignment)}
      [:> (.-Heading Navbar) "Tinycanva"]]

     [:> (.-Group Navbar) {:align (.-RIGHT Alignment)}
      [:> Button {:minimal true
                  :text (:email me)}]
      [:> (.-Divider Navbar)]
      [:> Button {:minimal true
                  :text "Logout"
                  :onClick #(rf/dispatch [:app.domain.firebase/logout])}]
      ]
     ]))

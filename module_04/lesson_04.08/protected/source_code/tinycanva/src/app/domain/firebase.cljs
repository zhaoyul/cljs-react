(ns app.domain.firebase
  (:require [re-frame.core :as rf]
            ["firebase" :as firebase]
            ["firebase/auth"]))


(rf/reg-event-fx
 ::login-with-email ;; equivalent to :app.domain.firebase/login-with-email
 (fn [cofx [_ form-state]]
   {:db (assoc (:db cofx)
               ::login-loading? true)
    :firebase/email-auth form-state}))

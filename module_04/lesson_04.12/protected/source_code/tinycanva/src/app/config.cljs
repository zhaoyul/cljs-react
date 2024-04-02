(ns app.config)

(def dev
  {:firebase
   {:apiKey "AIzaSyC39kDK-CWkilrPKGdDAMjSK3BUwSmrKt4"
    :authDomain "tinycanva-ec12f.firebaseapp.com"
    :databaseURL "https://tinycanva-ec12f.firebaseio.com"
    :projectId "tinycanva-ec12f"
    :storageBucket "tinycanva-ec12f.appspot.com"
    :messagingSenderId "1093818480829"
    :appId "1:1093818480829:web:3fab3745384295b6b25fd4"
    :measurementId "G-LLRCF2SZSJ"}})

(def prod
  {:firebase {}})

(defn for-env [env]
  (condp = env
    :dev dev
    :prod prod))

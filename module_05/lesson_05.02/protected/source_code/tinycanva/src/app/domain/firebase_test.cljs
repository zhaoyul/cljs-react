(ns app.domain.firebase-test
  (:require [app.domain.firebase :as firebase]
            [re-frame.core :as rf]
            [cljs.test :refer-macros [deftest is testing]]))

(deftest create-graphic-error-test
  (let [db {:app.domain.firebase/creating-graphic? true}]

    (testing "unsets creating-graphic? flag"
      (let [res (firebase/create-graphic-error-handler db [])]
        (is (not (contains? res :app.domain.firebase/creating-graphic?)))))

    (testing "sets create-graphic-error"
      (let [res (firebase/create-graphic-error-handler db [:ev-name :custom-error])]
        (is (= :custom-error
               (-> res :app.domain.firebase/create-graphic-error)
             ))))))

;; 1. setup test handlers
(defn on-success [_ [_ res]]
  (is (= res :success-res)))

(defn on-error [_ [_ res]]
  (is (= res :error-res)))

(deftest effect-test
  ;; 2. register test handlers
  (rf/reg-event-db :test-on-success on-success)
  (rf/reg-event-db :test-on-error on-error)

  ;; 3. register event handler to call effect
  (rf/reg-event-fx
   :test-firebase-effect
   (fn [_ throw-error?]
     {:firebase/effect-to-test {:throw-error? throw-error?
                                :on-success [:test-on-success]
                                :on-error [:test-on-error]}}))

  (testing "error handler is called with :error-res when throw-error? is true"
    (rf/dispatch [:test-firebase-effect true]))

  (testing "success handler is called with :success-res when throw-error? is false"
    (rf/dispatch [:test-firebase-effect false]))
  )

(ns first-project.fn-defs)

;;

(defn hello-world
  ([] (hello-world "there"))
  ([name] (str "Hello " name)))

(hello-world) ;; => "Hello there"
(hello-world "Newline") ;; => "Hello Newline"

;; anonymous function
(fn [a b] (+ a b 5))

(let [add5 #(+ %1 %2 5)]
  (add5 1 1)) ;; => 7

(#(odd? %) 54) ;; => false

;; apply
(defn f [arg1 & rest]
  (prn arg1 rest))

(apply f [1 4 5 2 4 5 2 42])

;;

(defn process-db-record [p]
  ;; p is a three element vector
  (let [name (first p)
        age (second p)
        height (last p)]
    ;; do something to name age and height
    ))


(defn process-db-record2 [[name age height]]
  ;; do something to name age and height
  )


(defn process-db-record3 [[name _ height]]
  ;; do something to name age and height
  )

;;

(def user {:name "John Doe"
           :age 29
           :favourite-movie-ids [34 42 2]
           :city-id 2
           :active? true
           :banned? false})

(defn prn-user [u]
  (println (:name u) " " (:age u)))

(defn prn-user2 [u]
  (let [name (:name u)
        age (:age u)]
    ;; check age maybe?
    (println name " " age)))

(defn prn-user3 [u]
  (let [{name :name
         age :age} u]
    (println name " " age)))


(defn prn-user4 [u]
  (let [{:keys [name age]} u]
    (println name " " age)))

(defn prn-user5 [u]
  (let [{:keys [name timezone]
         :or {:timezone :gmt}} u]
    (println name " " timezone)))


(let [
      [[a b]
       [c d]]
      [[1 3]
       [4 5]]
      ]
     (str a b c d)
     ) ;; => "1345"


(let [{:keys [ttl]
       {:keys [name]} :id1}
      {:id1 {:name "John Doe"}
       :ttl 54}]
  [ttl name]) ;; => [54 "John Doe"]

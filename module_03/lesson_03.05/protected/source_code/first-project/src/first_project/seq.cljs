(ns first-project.seq)

;;
(seq (list 1 2 3)) ;; => (1 2 3)

(seq [1 2 3]) ;; => (1 2 3)

(seq {:name "John Doe" :age 29}) ;; => ([:name "John Doe"] [:age 29])

(seq "Hello World") ;; => ("H" "e" "l" "l" "o" " " "W" "o" "r" "l" "d")

(seq :keyword) ;; => #object[Error Error: :keyword is not ISeqable]

;; map
(range 10) ;; => (0 1 2 3 4 5 6 7 8 9)
(map inc (range 10)) ;; => (1 2 3 4 5 6 7 8 9 10)

(defn square [x]
  (* x x))

(map square (range 10)) ;; => (0 1 4 9 16 25 36 49 64 81)

(map (fn [x]
       (* x x))
     (range 10)) ;; => (0 1 4 9 16 25 36 49 64 81)

(map #(* % %) (range 10)) ;; => (0 1 4 9 16 25 36 49 64 81)

(map (fn [[_key value]]
       value)
     {:name "John Doe" :age 29 :active? true :banned? false})
;; => ("John Doe" 29 true false)
;;

(map + (range 10) (range 10)) ;; => (0 2 4 6 8 10 12 14 16 18)

(map + (range 10) (range 5)) ;; => (0 2 4 6 8)

;;

(filter even? (range 10)) ;; => (0 2 4 6 8))

(filter #(> % 4) (range 10)) ;; => (5 6 7 8 9)

;;
(reduce + (range 10)) ;; => 45

(def karmas [{:id 1 :karma 40}
             {:id 2 :karma 7}
             {:id 3 :karma 80}])


(/ (reduce (fn [accumulator {:keys [karma]}]
             (+ accumulator karma))
           0 karmas)
   (count karmas)) ;; => 42.333333333333336

(/ (reduce #(+ %1 (:karma %2)) 0 karmas)
   (count karmas)) ;; => 42.333333333333336

(keep even? (range 4)) ;; => (true false true false)
(keep {:a 1 :b 2 :c 3 :d 4} [:a :b :p :q]) ;; => (1 2)

;;;

(remove even? (range 10)) ;; => (1 3 5 7 9)

(remove #(< (:karma %) 10) karmas) ;; => ({:id 1, :karma 40} {:id 3, :karma 80})


;;
(def city-temps
  {:a 49
   :b 35
   :c 24
   :d 19
   :e 37
   :f 12})

(filter #(> 30 (second %)) city-temps) ;; => ([:c 24] [:d 19] [:f 12])

;; or
(filter (fn [[_city-key temp]]
          (> 30 temp))
        city-temps)

(def temp-under-30 (filter #(> 30 (second %)) city-temps))
(into {} temp-under-30) ;; => {:c 24, :d 19, :f 12}
(into [] temp-under-30) ;; => [[:c 24] [:d 19] [:f 12]]

(conj {} [:c 24]) ;; => {:c 24}


(into #{} temp-under-30) ;; => #{[:f 12] [:c 24] [:d 19]}

;;;

(group-by even? (range 10)) ;; => {true [0 2 4 6 8], false [1 3 5 7 9]}

(group-by :age [{:id 1 :age 20}
                {:id 2 :age 23}
                {:id 3 :age 28}
                {:id 4 :age 20}])
;; => {20 [{:id 1, :age 20} {:id 4, :age 20}],
;;     23 [{:id 2, :age 23}],
;;     28 [{:id 3, :age 28}]}

;;;

(partition 2 (range 10)) ;; => ((0 1) (2 3) (4 5) (6 7) (8 9))

(partition 2 (range 7)) ;; => ((0 1) (2 3) (4 5))

(partition 2 4 (range 10)) ;; => ((0 1) (4 5) (8 9))

(partition 3 2 [:pad-el1] (range 7)) ;; => ((0 1 2) (2 3 4) (4 5 6) (6 :pad-el1))
(partition 3 2 [:pad-el1 :pad-el2] (range 7)) ;; => ((0 1 2) (2 3 4) (4 5 6) (6 :pad-el1 :pad-el2))

;;;

(sort [1 3 4 1 8 18 19 1 4]) ;; => (1 1 1 3 4 4 8 18 19)
(sort > [1 2 4 1 3 80 173 29 17]) ;; => (173 80 29 17 4 3 2 1 1))

((juxt + *) 1 2 3 4 5) ;; => [15 120]

;;;
(defn lazy-demo []
  (map println (range 10))
  43)

(lazy-demo) ;; => 43

(defn doall-lazy []
  (doall (map println (range 10)))
  43)

(doall-lazy) ;; => 43

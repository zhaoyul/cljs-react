(ns first-project.threading-macros)

(def books
  [{:id 1 :restricted? false :publish-year 1800 :related [3 4]}
   {:id 2 :restricted? false :publish-year 2001 :related [5]}
   {:id 3 :restricted? true :publish-year 2019 :related []}
   {:id 4 :restricted? false :publish-year 1893 :related [1 5]}
   {:id 5 :restricted? false :publish-year 1903 :related [2 3]}
   ])

(map #(count (:related %))
     (filter #(not (:restricted? %)) books)) ;; => (2 1 2 2)


(defn publish-year-by-id [books id]
  (:publish-year (first (filter #(= id (:id %)) books))))

(map (fn [unrestricted-book]
       (map #(publish-year-by-id books %) (:related unrestricted-book)))
     (filter #(not (:restricted? %)) books)) ;; => ((2019 1893) (1903) (1800 1903) (2001 2019))

(defn pub-year-by-id [books id]
  (->> books
       (filter #(= id (:id %)))
       first ;; or (first)
       :publish-year ;; or (:publish-year)
       ))

(->> books
     (filter #(not (:restricted %)))
     (map (fn [unrestricted-book]
            (map #(publish-year-by-id books %)
                 (:related unrestricted-book)))))
;; => ((2019 1893) (1903) () (1800 1903) (2001 2019))

(defn book->related-publish-years
  "Takes a book and returns a list of publish years of related books"
  [book]
  (->> book
       :related
       (map #(publish-year-by-id books %))))

(->> books
     (filter #(not (:restricted %)))
     (map book->related-publish-years))
;; => ((2019 1893) (1903) () (1800 1903) (2001 2019))

(macroexpand '(->> 2
                  (+ 1)
                  (* 4))) ;; => (js* "(~{} * ~{})" 4 (+ 1 2))

;;

(-> books first :related count) ;; => 2

(macroexpand '(-> books first :related count)) ;; => (count (:related (first books)))

;;;
(-> {:a {:b {:c 1}}} :a :b :c) ;; => 1

;;;
(as-> 0 x
  (inc x)
  (+ 4 x 4)) ;; => 9

(as-> {:host "localhost" :port 5432} {:keys [host port]}
  (str "postgres://" host ":" port)) ;; => "postgres://localhost:5432"

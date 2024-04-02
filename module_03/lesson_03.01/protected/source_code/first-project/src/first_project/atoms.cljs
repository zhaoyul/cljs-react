(ns first-project.atoms)

;; creating an atom
(def a (atom {}))

(def b (atom 1
             :metadata-map {:some :info}
             :validator odd?))


a ;; => #object[cljs.core.Atom {:val {}}]

;; deref
@a ;; => {}
(deref a) ;; => {}


;; reset!
(reset! a []) ;; => []
@a ;; => []
(reset! b 2) ;; => #object[Error Error: Validator rejected reference state]
@b ;; => 1

;; swap
(def c (atom []))
(swap! c conj 1) ;; => [1]
@c ;; => [1]
(swap! c pop)
@c ;; => []

(def d (atom {}))
(swap! d assoc :a :b :c :d) ;; => {:a :b, :c :d}
@d ;; => {:a :b, :c :d}


;; watch
(def e (atom []))
(add-watch e :log-changes (fn [id-key current-atom old-state new-state]
                            (prn id-key old-state new-state)))
(reset! e [2])

(remove-watch e :log-changes)

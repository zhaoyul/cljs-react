(ns first-project.conditionals)

(if true
  "Var is true"
  "Var is false") ; => "Var is true"

;; Empty data structures are truthy
(if []
  "Truthy"
  "Falsy") ; => "Truthy"

;; Invalid because if takes only 3 args, 4 given
(comment
  (if nil
    (print "Truthy")
    "Truthy"
    "Falsy"))

(if nil
  (do (print "Truthy")
      "Truthy")
  "Falsy")


;;
(if-not true
  "Falsy"
  "Truthy") ; => "Truthy"

;;
(when true
  (print "Is true")
  (print "more true")

  "bye") ; => "bye"

(when-not (empty? [])
  "Do something when list is not empty") ; => nil

;;
(defn test-x [x]
  (cond
    (> 5 x) "x is less than 5"
    (= 5 x) "x is equal to 5"
    :else "x is greater than 5"))


(test-x 91) ;=> "x is greater than 5"

;;
(defn test-y [y]
  (condp = y
    5 "y is 5"
    6 "y is 6"
    "y is neither 5 or 6"))

(test-y 5) ; => "y is 5"

(test-y 45) ; => "y is neither 5 or 6"


(defn test-z [z]
  (case z
    5 "z is 5"
    "z is not 5"))

(test-z 45) ; => "z is not 5"

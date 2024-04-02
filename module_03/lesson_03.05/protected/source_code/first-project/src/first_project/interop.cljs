(ns first-project.interop)

js/Math ;; => #js {}
js/Array ;; => #object[Array]
(type js/Array) ;; => #object[Function]

(new js/Date) ;; => #inst "2020-08-14T06:39:35.529-00:00"
(js/Date.) ;; => #inst "2020-08-14T06:39:49.126-00:00"

(new js/Array 1 2 3) ;; => #js [1 2 3]
(js/Array. 1 2 3) ;; => #js [1 2 3]

;;

;; same as Date.now()
(.now js/Date) ;; => 1597388702083

;; same as (new Array(1, 2, 3)).map(i => i + 1)
(.map (new js/Array 1 2 3) inc)

(js/Date.now) ;; => 1597389177815


;; same as Object.name
(.-name js/Object)

(clj->js {:a 1 :b 2}) ;; => #js {:a 1, :b 2}
(js->clj (.parse js/JSON "{\"a\": 1}")) ;; => {"a" 1}

(js->clj (.parse js/JSON "{\"a\": 1}") :keywordize-keys true) ;; => {:a 1}

(comment
  (let [rect (new Rectangle)]
    (.setHeight rect 40)
    (.setWidth rect 80)
    (.setPosition rect 32 32)
    (.setColor rect "red")
    rect)
  )


(comment
  (doto (new Rectangle)
    (.setHeight 40)
    (.setWidth 80)
    (.setPosition 32 32)
    (.setColor "red")) ;; returns Rectangle
  )

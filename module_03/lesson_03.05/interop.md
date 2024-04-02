---
title: Transparent Interop
slug: stdlib-interop
description: Clojure let's you write code close to the metal, ie. the host language. In this chapter, we'll learn about constructs and techniques to interact with JavaScript within Clojure.
privateVideoUrl: https://fullstack.wistia.com/medias/6nxa49xk1i
---

# Transparent Interop
Clojure doesn't hide the underlying host from the developer. It lets you bypass Clojure and write code close to the metal. This chapter on interop is focused on JavaScript as a host, but most of the concepts will apply to other hosts too. The code examples in this chapter are in the `first-project.interop` namespace.

## `js` namespace
JavaScript objects like `Array`, `Date`, `Math`, `Object` are accessible via the `js/` namespace. You can evaluate these forms and check what they look like:

{lang=clojure,crop-start-line=3,crop-end-line=5}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)
In a browser environment, you can access the `window` object using `js/window`.

## Instantiating objects
To create instances of JS objects, we can use the `new` function or the `.` dot suffix:

{lang=clojure,crop-start-line=7,crop-end-line=8}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

All arguments passed are passed down to the constructor:

{lang=clojure,crop-start-line=10,crop-end-line=11}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

Notice the `#js` prefix in the result of the inline evaluation. This signifies that the data structure is not a CLJS vector but a JS Array.

The form `(new js/Foo p q r)` and `(js/Foo. p q r)` are equal to `new Foo(p, q, r);`. You can use [Klipse](http://app.klipse.tech/) to check the transpilation in real time.

## Calling object methods
A method `bar` on object `Foo` can be called using `(.bar Foo p q r)`. This is equal to`Foo.bar(p, q, r)` in the JS domain:

{lang=clojure,crop-start-line=15,crop-end-line=19}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

The `now` method on the `js/Date` object is a static function, ie. doesn't require an initialized object. The `.map` method on `js/Array` is an instance method, ie. requires an instance of `Array` to operate on.

A static method `bar` defined for a class `Foo` can be alternatively called using `(js/Foo.bar)`. We can rewrite the `now` function call as:

{lang=clojure,crop-start-line=21,crop-end-line=21}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

## Accessing static properties
A property `bar` on object `Foo` can be accessed using `(-. bar Foo)`. For example, if you'd like to access the static `name` property of `js/Object`, you can use:

{lang=clojure,crop-start-line=24,crop-end-line=25}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

In some cases, where the static property is deeply nested, your code might feel less readable
```clojure
(.-value (.-target e))
```

In cases like these, we can use the `..` double dot function to access properties:
```clojure
(.. e -target -value)
```

You can also use `e.target.value` directly, but the linter might complain.

## Transforming between domains
Clojure data structures can be converted from and to native JS data structures. This is helpful if you are using an NPM module that expects JS data structures or if you choose to write JS inside Clojure for performance enhancements. Two helper functions `clj->js` and `js->clj` aid the conversion:

{lang=clojure,crop-start-line=27,crop-end-line=28}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

While using `js->clj` the keys of the JS object show up as strings in CLJS Map. If you prefer keywords instead, you can pass an additional argument to keywordize keys:

{lang=clojure,crop-start-line=30,crop-end-line=30}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

## Doto
Java and JavaScript allow you to write mutable code. For example, you might have a UI element and can call some functions on it to set its properties:
```js
const rect = new Rectangle();
rect.setHeight(40);
rect.setWidth(80);
rect.setPosition(32, 32);
rect.setColor("red");
```

All these operations mutate the internal state of `rect`.

If we were to write the same using CLJS interop, we'd end up with:

{lang=clojure,crop-start-line=33,crop-end-line=38}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

With the `doto` macro, you can write the same as:

{lang=clojure,crop-start-line=43,crop-end-line=47}
<<[first-project/src/first_project/interop.cljs](./protected/source_code/first-project/src/first_project/interop.cljs)

You might wonder be wondering that `doto` looks similar to the thread first macro (`->`). However, these macros are different and a common source of confusion.

Clojure is inherently immutable. The threading macro doesn't mutate the form in the previous step. The end result of a threading macro is the result of the last form.

`doto` however mutates the first form. The result of a `doto` macro is the first form after the mutations have been applied.

## Interop Libraries
The interop syntax is powerful enough to access the host functionality, but it comes at a cost of readability. Although the interop is idiomatic Clojure, it doesn't always feel natural. In cases where you rely heavily on interop, you can use dedicated libraries that make interop more Clojurish. There are many libraries to help with the issue, but you should be aware of two of them:
- [funcool/promesa](https://github.com/funcool/promesa) - Native interaction with Promises
- [applied-science/js-interop](https://github.com/applied-science/js-interop) - General purpose library for Clojure like manipulation of JS data structures

Note that you don't necessarily need these libraries. Everything these libraries do can be done using Clojure's interop capabilities.

## Conclusion
We learned how to access host language constructs directly from Clojure, studied data type conversions and macros that make interop code more readable.

After having written Clojure on the JVM and JavaScript for multiple years, I realized that one needs to know both the host and Clojure to be productive. You will at some point in time, reach a bottleneck due to decisions made by the host, and will have no choice but to code close to the metal. This is a non-issue, however, since Clojure's interop is fairly capable.

This chapter wraps up our discourse on Clojure's standard library. The fundamentals we covered will help as we start building the Tinycanva project in the next module.

---
title: Syntaxlessness
slug: language-semantics-syntaxlessness
description: C-Style languages invisibly impose a syntax, whereas Lisps do not. This makes Lisps more expressive and easier to grasp.
privateVideoUrl: https://fullstack.wistia.com/medias/npjylakmgu
isPublicLesson: true
---

# Syntaxlessness

There is no such word as "syntaxlessness". We had to made it up to showcase that Lisps don't have a syntax.

You might be wondering, "But Shivek, we just studied Clojure's syntax in the last lesson, and now you say that Lisps don't have a syntax!?". We know that our statement sounds a little odd. But it will make sense by the end of this lesson.

In a C-Family language like JavaScript, the following conditional is common:
```js
if (a > b) {
  console.log(a)
} else {
  console.log(b)
}
```

The equivalent Clojure version of this conditional will look something like:

```clojure
(if (> a b)
  (prn a)
  (prn b))
```
The `if` function expects three elements in a list: the condition, the truthy block, and the falsy block.

Notice how `if` and `>` are just functions, unlike C-Style languages, where `if`, `else` and `>` are a part of the syntax.

## Expressiveness
Since Clojure is a functional language and there is no syntax in the sense of C-Style languages, Clojure code is more expressive and concise.

The example that we started with, can be re-written as:
```clojure
(prn (if (> a b) a b))
```

If your mind is arguing that this example is doctored and the C-Style version can be written using the ternary operator, good!. You are thinking on the right lines. The C-Style version can be re-written as:

```js
console.log(a > b ? a : b)
```

But there is a stark difference between the Clojure and C-Style code (JavaScript in the case above). Can you spot it?

The ternary operator is a new piece of syntax whereas in Clojure code, only the order of function calls is changed. If JavaScript had the expressiveness of Lisps, the following code should have been valid:

```js
console.log(if (a > b) a else b)
```

But it is not. The places at which the syntactical literals (elements that compose the syntax) can appear are limited in C-Style languages.

The ternary operator is an escape hook. It is good enough for simple scenarios like the one above, but as our applications become more complex, the ternary becomes hard to manage. New syntax literals occupy mental share. Introducing new syntax hampers backward compatibility. Lisps however are free of syntactical issues, because no strict concept of syntax is enforced.

Since most famous languages are C-Style, the idea of syntax is engraved in everyone's mind. This leads to code that is not as expressive as a Lisp.

Don't get us wrong here. Lisp is not always more expressive than C-Style languages. It's only that Lisps enable the developers to write more concise code by not enforcing a syntax. As our programs become more complex, this property will become more evident.

## Redefining Core
In Clojure, you can redefine `if` to mean something else using the `defn` function:

```clojure
(defn if [condition truthy-block falsy-block]
  ...)
```

We don't know of a good reason to redefine `if`, however, you can do that.

There are however good reasons to redefine some other functions. For example, if you want a more efficient `conj` for vectors.

This opens a gateway for third-party developers who can build faster implementations of common operations. For example, [bsless/clj-fast](https://github.com/bsless/clj-fast) is an alternate implementation for Clojure native data manipulation functions.

There is no concept of syntax. There is only one hard rule that we learned in the last lesson, i.e. lists are function calls, the first element of the list is the function that will be called.


## Recommended reading

- [An intuition for LISP syntax](https://stopa.io/post/265) by [Stepan Parunashvili](https://twitter.com/stopachka)

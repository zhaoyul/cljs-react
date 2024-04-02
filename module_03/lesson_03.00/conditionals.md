---
title: Conditionals
slug: stdlib-conditionals
description: Clojure offers many control flow conditionals, like if-else blocks. In this chapter, we'll study the API of a few such methods.
privateVideoUrl: https://fullstack.wistia.com/medias/sgi92h7rqo
---

# Conditionals

## Introduction
Clojure lets you write concise code. A major factor that supports this fact is its rich standard library.
So far we have studied syntax, build tools, and NREPL. In this module, we'll build on top of that knowledge and understand the most commonly used functions.

We highly recommend that you follow along and try the examples yourself using inline eval. This is also a good time to practice some Paredit commands. We'll reuse the setup for `first-project` and create a new namespace for each chapter. So start your `watch`, start the NODE runtime, connect your editor to the REPL. It's time to code.

In this chapter, we'll learn about various conditional functions. The code examples are present in the `first-project.conditionals` namespace. By now, you should be comfortable figuring out the disk path of the file that holds this namespace.

## Create `first-project.conditionals` namespace
Q: What is the correct disk path for this namespace?

A:
```bash
touch src/first_project/conditionals.cljs
```

If you guessed it right, great. If you got it wrong, you might want to review the chapter on `Project Structure` again.

## if
We have seen the `if` function already, it takes three arguments:
- A variable to check
- An S-Expression to execute if the variable is truthy
- An S-Expression to execute if the variable is falsy

{lang=clojure,crop-start-line=3,crop-end-line=5}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

The inline comment starting with `=>` denotes the result of inline evaluation with NREPL.

Empty data structures (lists, vectors, maps, and sets) are truthy. `nil` is falsy.

{lang=clojure,crop-start-line=8,crop-end-line=10}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)


You might find yourself in a position, where you need to execute more than one S-Expressions in the `if` or `else` block. For example, instead of just returning a string, what if you wanted to print and return it, like :

{lang=clojure,crop-start-line=13,crop-end-line=17}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

This S-Expression is invalid (wrapped in a `comment` so it doesn't interferes with other examples). In cases like these, you can use a `do` block. `do` takes an arbitrary number of S-Expressions and executes them in order:

{lang=clojure,crop-start-line=19,crop-end-line=22}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

## if-not
`if-not` is similar to `if`, except it executes the first block if the variable is falsy.

{lang=clojure,crop-start-line=26,crop-end-line=28}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

This function is the same as wrapping the variable in `if` with the `not` function (`not` inverses the boolean value of a variable).

## when
Some `if` statements might not care about the `else` clause. For example, you might want to render a component only when a variable is truthy. `when` can be used in such cases. It takes n arguments. The first argument is the boolean expression to evaluate. The rest of the arguments are expressions to execute.

{lang=clojure,crop-start-line=31,crop-end-line=35}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

## when-not
Similar to `when`, except it executes the block if the test variable is falsy.

{lang=clojure,crop-start-line=37,crop-end-line=38}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

In cases where `when` or `when-not` don't execute, `nil` is returned.

## cond
`cond` is similar to switch/case:

{lang=clojure,crop-start-line=41,crop-end-line=48}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

If `:else` is not specified and no case matches, `nil` is returned by default.

:::note
If you write this function as it is, and try to evaluate `(test-x 91)`, you might get an error. This is because the `test-x` function is not defined in the namespace. Your options are to either save this file so `watch` rebuilds it again or evaluate the function definition before evaluating the function call.
:::

## condp
A modified version of `cond` that takes a predicate function a value and a test value. For each case, the predicate function is called on the value and test value:


{lang=clojure,crop-start-line=51,crop-end-line=59}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

The `cond` version of the above example will be:
```clojure
(defn test-y [y]
  (cond
    (= 5 y) "y is 5"
	(= 6 y) "y is 6"
	:else "y is neither 5 or 6"))
```

## case
`case` is same as `(condp = ...`:

{lang=clojure,crop-start-line=62,crop-end-line=67}
<<[first-project/src/first_project/condtionals.cljs](./protected/source_code/first-project/src/first_project/conditionals.cljs)

## Conclusion
In this module, we learned about various conditionals and also groomed our knowledge of NREPL and Paredit. Again, just like the chapter on `Paredit`, think of this module as a reference. It will not be fair to assume that you'll memorize the entire API in one sitting. Try it once refer to it as many times as you want to. If you ever get stuck and need more examples, you might find [clojuredocs.org](https://clojuredocs.org/) helpful.




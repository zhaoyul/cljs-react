---
title: Threading Macros
slug: stdlib-threading-macros
description: Nested calls can become hard to manage. Threading macros help us take control. In this chapter, we'll understand the concept of threading macros and study three commonly used versions.
privateVideoUrl: https://fullstack.wistia.com/medias/6cq5lg1rkb
---

# Threading Macros

:::note
The term `thread` has got nothing to do with parallel programming. Thread is an expression for a linear series of operations, like pearls on a thread.
:::

As your functions grow in complexity, the readability of your code gets affected. Suppose you have a list of books with various attributes, and you want to find the number books related to each unrestricted books:

{lang=clojure,crop-start-line=3,crop-end-line=12}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

Calls like these might go out of hand. What happens if we want the publishing year of all related books?:

{lang=clojure,crop-start-line=15,crop-end-line=20}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

We performed the following operations:
- Filter all books that are restricted
- Call `publish-year-by-id` function on each element of `:related` vector

## Thread last macro (`->>`)
The thread last macro makes nested function calls easier to express. A function call:

```clojure
(f (g l (h p q x)))
```

can be expressed as:
```clojure
(->> x
     (h p q)
	 (g l)
	 f)
```

In thread last macro expansion, the result of a form is passed as the last argument to the next form. Let's re-write our `publish-year-by-id` with thread last macro:

{lang=clojure,crop-start-line=22,crop-end-line=27}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

Notice how we are able to use the `first` function and `:publish-year` keyword without parenthesis. You can add parenthesis if you wish too, but Clojure assumes parenthesis in case a callable form is passed. Most developers find forms using threading macros more readable.

Let's rewrite the other operation using thread last macro too:

{lang=clojure,crop-start-line=29,crop-end-line=34}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

It's still not as readable as the `pub-year-by-id` function. You'd constantly run across operations like these in real world applications. If I were writing this, I'd pull out the inline function to a namespaced function:

{lang=clojure,crop-start-line=36,crop-end-line=46}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

We split the operations down into smaller functions, which are easier to maintain and reason for.

## `macroexpand`
There is no performance cost associated using a macro because macros essentially re-write your code. You can check what your code would be re-written to using the `macroexpand` function:

{lang=clojure,crop-start-line=48,crop-end-line=50}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

The part with string and `js*` is just conversion so that the result is suitable for JavaScript. But you can see how `+` is called with 1 and 2.

Notice the single quote `'` before the start of the form. The quote mark tells Clojure to treat this form as a list and not as a function call.

## Thread first macro (`->`)
The thread first macro is similar to thread last macro, except the result is passed to the next form as the first argument, hence thread first:

{lang=clojure,crop-start-line=54,crop-end-line=56}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)
Here we compute the total number of books related to first book in our collection.

Thread last macro is suitable for sequence operations as they generally accept the sequence as the last argument.

The thread first macro is used commonly to pull out values from deeply nested maps:

{lang=clojure,crop-start-line=59,crop-end-line=59}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

## `as->`
You might run into cases where some functions in a pipeline accept arguments at a different positions than first or last. The `as->` macro can be used to define the position of the argument. It works by binding the result of a step to a variable and then manually passing that variable at the correct location:

{lang=clojure,crop-start-line=62,crop-end-line=64}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

Here we bound the output to variable `x` and passed it at the correct position.

The bindings can be destrucutured too:

{lang=clojure,crop-start-line=66,crop-end-line=67}
<<[first-project/src/first_project/threading_macros.cljs](./protected/source_code/first-project/src/first_project/threading_macros.cljs)

## Conclusion
In this chapter we learnt the usage of threading macros to improve code readability. We covered the three most commonly used macros and also learnt about macro expansion. These three macros should suffice for this course, but if you find yourself wanting more, we also have `cond->`, `cond->>`, `some->` and `some->>`. You can read more about them in the official docs.

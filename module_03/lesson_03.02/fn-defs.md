---
title: Function definitions
slug: stdlib-fn-defs
description: There are many ways to define a function and parse arguments. In this chapter, we'll learn more about function definition, destructring and some helpful higher order functions.
privateVideoUrl: https://fullstack.wistia.com/medias/apxm9nizij
---

# Function definitions

So far we have seen the usage of `defn` to define functions. But most of our examples were contrived and not close to real world use cases.
At work, the functions we define might need to handle a variable number of arguments. Or, they might need to destructure a large map passed in as an argument.

In this chapter, we'll learn various aspects of defining functions in Clojure. The examples in this chapter are coded in the `first-project.fn-defs` namespace.

Q. What is the disk path of the `first-project.fn-defs` file?

## Multi arity functions
Multi arity functions let you accept different number or type of variables for a function. They work by defining different execution paths for different arguments and are generally used to provide default arguments:

{lang=clojure,crop-start-line=5,crop-end-line=10}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

Multi arity functions are conceptually similar to function overloading.

## Anonymous functions
Anonymous functions are functions that have no home, ie are not namespace-qualified. They exist only at the point of definition. They are useful for a variety of applications like defining callbacks or simple predicates.

There are two ways to define inline functions:
- Using the `fn` function
- Using the `#()` shorthand

{lang=clojure,crop-start-line=12,crop-end-line=17}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

`fn` and `defn` have similar signatures, except the function name is not present while using `fn`. With the shorthand, we completely skip the arguments vector and access the arguments using the `%n` sign, where `n` is the index of the argument, starting with 1.

Anonymous functions are just like normal functions and can be evaluated and called directly.

If you need to capture only one argument, you can skip the index and simply use `%`. Anonymous functions are helpful while working with sequence operations like `map` and `reduce`. We'll see them in action soon.

## Docstrings
Functions defined with `defn` or `fn` can follow an alternate signature to specify inline documentation:
```clojure
(defn fn-name
  "A line about what this function does"
  [arg1 arg2 arg3]
  ;; body
  )
```

## Variable arity functions
Variable arity or variadic functions lets you capture any number of arguments as a list. We have seen this function already, in the `first-project.core` namespace.

Variadic functions use `&` ampersand to signify variable number of arguments:

{lang=clojure,crop-start-line=21,crop-end-line=22}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

The `rest` variable is available in the function scope as a list.

If we call `f` with 5 arguments: `(f 1 2 3 4 5)`, then `arg1`'s value will be `1` and `rest` will be a list of 4 elements: `'(2 3 4 5)`.


## `apply` function
We have so far called functions by passing in the arguments manually. For example, `f` defined above is called by typing `(f 1 2 3 4 5)`. But what if you wanted to call `f` for a list of n integers? What if these arguments were stored in a variable?

The `apply` function lets you "unpack" sequences and use them as function arguments.

{lang=clojure,crop-start-line=24,crop-end-line=24}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

This is the same as calling:
```clojure
(f 1 4 5 2 4 5 2 42)
```
Except, the arguments are now a vector (or some other variable).

## Destructuring arguments
In UI programming frameworks like React, it's common to pass down `props` (or maps) to child components. It's also fairly common to pass configuration maps as function arguments.

Sometimes, you might need only a small part of the argument. Destructuring helps you precisely pull out the required pieces.

### Vectors and lists
Let's suppose a function that takes a 3 element vector as an argument. This vector is fetched directly from the database and holds the name, age and height (in cms) of a user, in that order. If we wanted to get the name, age and height with what we know so far, we could write something like:

{lang=clojure,crop-start-line=28,crop-end-line=35}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

This doesn't sparks joy. With sequence destructuring, the same code can be re-written as:

{lang=clojure,crop-start-line=37,crop-end-line=39}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

The order of elements is important while destructuring sequences.

If you don't care about an argument, say age, you can use an `_` underscore to in place of a variable name:

{lang=clojure,crop-start-line=42,crop-end-line=44}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

You can just let it be `age`, but if a variable is not used in a function, the linter might complain. You can also use `_age` instead of just `_` to specify an argument you don't care about. The `_` prefix can be used with normal functions too, ie. where destructuring is not being used.

You can also use destructuring with `let` bindings. Taking the same example of a 3 element vector, the following code is legal:

```clojure
(let [[name _age height] p]
 ...
 )
```

If you destructure and don't pull out all elements of the sequence, the tailing elements are ignored:

```clojure
(let [[name] p]
  ;; takes the first element of p and assigns it to the name
  ...
  )
```

### Maps
Let us assume that we have the following world view of a user:

{lang=clojure,crop-start-line=48,crop-end-line=53}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

And we pass this user to a function that prints their name and age. With all that we know so far, the definition of this function might look something similar to:

{lang=clojure,crop-start-line=55,crop-end-line=56}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

This seems reasonable, but can get out of control as the function assumes responsibility. Also, what happens if you want to use the `age` or `name` more than once? You can call the keyword as a function at multiple places, but a `let` binding makes more sense:

{lang=clojure,crop-start-line=58,crop-end-line=62}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

The example above is more realistic. With map destructuring, this function can be re-written as:

{lang=clojure,crop-start-line=64,crop-end-line=67}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

There is still some repetition. The variable `age` and the map key `:age` appear twice. This can be helpful if you want to call map key `:age` something else in your function scope. But if you want to the variable names to be same as map keys, you can use further re-write the same function:

{lang=clojure,crop-start-line=70,crop-end-line=72}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

We can go one step further by getting rid of `let` and destructuring the arguments directly:
```clojure
(defn prn-users5 [{:keys [name age]}]
	;; Do something with name and age
	)
```
### Destructuring default arguments
In the real world, your map representing your knowledge about a user might not be perfect. It might be missing some information. For example, our user John doesn't have any information about timezone. Destructuring let's you assume defaults if the required information is missing in the map:

{lang=clojure,crop-start-line=74,crop-end-line=77}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

### Nested Destructuring
All destructuring constructs work in the same way with any level of nesting. 

If you have a 2x2 matrix and want to destructure all elements, you can just nest the syntax:

{lang=clojure,crop-start-line=80,crop-end-line=87}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

We added extra line breaks in the example above for better readability. As you become used to the syntax, you'll be able to read write a destructuring like this in a single line: `[[a b] [c d]] [[1 3] [4 5]]`

We can also destructure a nested map in a similar way:

{lang=clojure,crop-start-line=90,crop-end-line=94}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

The nested map destructuring is a combination of destructuring techniques used in `prn-user4` and `prn-user5`. It's okay if don't get this in the first go. As you work with functions, you'll develop an eye to read complex destructures!

## Macro vs function
We have referred to many functions (such as `when` and `defn`) which are in fact macros. Macros re-write your code at build time. For example, the `defn` macro converts your function definition:
```clojure
(defn hello [name]
  (prn name))
```

to a variable definition (`def`):
```clojure
(def hello (fn [name] 
  (prn name)))
```

We'll not study about macros in detail, but we should make it clear that some symbols that we referred to as functions might be macros.

## Composition
Functional composition lets us apply multiple functions to an argument in series. The `comp` function takes multiple functions and returns a new function that is an effective composition of inputs:

{lang=clojure,crop-start-line=98,crop-end-line=103}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

In the example above, the composed function `inc-square` first squares the input and then `inc`rements it by 1. `((comp p q r) args)` is same as `(p (q (r args)))`.

## Partials
Partials (or partial functions) reduces the argument count of a function by setting defaults:

{lang=clojure,crop-start-line=107,crop-end-line=112}
<<[first-project/src/first_project/fn_defs.cljs](./protected/source_code/first-project/src/first_project/fn_defs.cljs)

The `add` function takes 2 arguments. The `add5` partial sets the default argument on `add` as 5.

## Conclusion
In this chapter, we learned about various types of function definitions. We then moved to argument destructuring and made a distinction between functions and macros.

Destructuring makes code concise, but at the same time, hard to read for beginners. With knowledge of various destructuring methods, you'd be able to read publicly available code with more ease, and over time, write efficient and concise Clojure.


---
title: Syntax and Native Data Types
slug: language-semantics-syntax-native-data-types
description: Let's get our hands dirty with native data types and common operations.
privateVideoUrl: https://fullstack.wistia.com/medias/7oxexswn89
isPublicLesson: true
---

# Syntax and Native Data Types

Clojure affords developers the standard collection of data types. All data structures are immutable. All data structures are manipulated using interfaces. This allows for easy interop with the underlying host.

In this module, we'll learn about native data types and some common operations. We suggest that you start the Clojure REPL and try these out for yourself. You can start the REPL using the `clj` command:
```bash
$ clj
Clojure 1.10.1
user=>
```

## Reading Clojure code
If you don't have a background in LISP, Clojure code will feel unnatural at first. This is because the brackets are in a different position.

In general, when you see a Clojure form like:

```clojure
(operation arg1 arg2)
```

In your mind, you should think of it as a list where the first element is an operation to execute and other elements are arguments to that operation. This operation can be a function, a macro, or something else.

## type function
The `type` function tells the native data type of a value or variable. It can be used as follows:

```bash
user=> (type 1)
java.lang.Long
```

1 can be a variable or any other data type.

## nil

Any data type can be `nil`. The actual implementation of `nil` is dependent on the host. For Clojure, it's Java's `null`, for ClojureScript it's JavaScripts `null`.

The logical value of `nil` is `false`.

You can determine if a variable is `nil` by using the `nil?` function. A function suffixed with a question mark `?` is conventionally a predicate.

```clojure
user=> (nil? nil)
true
```

## Boolean
These represent logical `true` and `false` values. On the JVM these correspond to `java.lang.boolean.TRUE` and `java.lang.boolean.FALSE` respectively.

The functions `true?` and `false?` can be used to ascertain if a value is truthy or falsy.

## Number
Like all other data types, numbers too are just the host's implementation of numbers. However, the differences across hosts are ironed out. Leaving the implementation details aside, the following types of numbers are supported.

### Long
All numbers in Clojure are Long by default. You can check this in the REPL by using the `type` function.
```bash
user=> (type 19)
java.lang.Long
```

### Ratio
Non-terminating decimals like `22/7` are stored as ratios. The data type for the ratio is `clojure.lang.Ratio`. This signifies that `Ratio` is a Clojure data type and not dependant on the host.
```bash
user=> (type 22/7)
clojure.lang.Ratio
```
Clojure takes care of the implementation detail across hosts.

### BigInt and BigDecimals
In case a number is too large for the `Long` type, it can be suffixed with an `N` to signify `clojure.lang.BigInt`. For example `44N`.

Numbers suffixed with `M` signify `java.math.BigDecimal` or the equivalent host implementation of Java's BigDecimal.

Clojure operations intelligently wrap and transform numbers into the correct data type. For example, if you divide 22 by 7 using the divide `/` function, you'll get a Ratio:

```clojure
user=> (type (/ 22 7))
clojure.lang.Ratio
```

Did you notice how we nested two functions (`type` and `/`) together?

### Common numerical functions
Since Clojure has no concept of syntax, numerical operations that you expect from a language are implemented as functions.

For computation, we have `+`, `-`, `*`, `/`, `min`, `max`, `quot`, and `rem`.

Algebraic functions can take more than one arguments:

```clojure
user=> (+ 1 3 4)
8
user=> (min 1 4 5)
1
```

The core also ships with the functions `inc` and `dec` which add or subtract 1 to a number respectively:

```clojure
user=> (inc 4)
5

user=> (dec 54)
53
```

Common comparison functions are also baked into the core. These are `==`, `>`, `<`, `>=`, `<=`, `zero?`, `pos?`, `neg?`.

Like arithmetic operators, some comparison operators also take more than one arguments:

```clojure
user=> (== 1 1 1 1 1)
true
user=> (== 1 1 1 1 2)
false
user=> (< 1 3 5)
true
user=> (< 1 3 5 0)
false
```
The `<` function above expects the sequence of arguments to be in increasing order. The same is true for other inequality functions.

## String
Strings are denoted with double quotes "like this".

We already know the `println` function. Some other common string functions are:
- `prn` : Like `println` but doesn't include a terminating newline
- `pr-str`: Prints the given string and returns it unlike `prn` which returns nil
- `str`: Can be used to coerce a value to a string. Can also be used to join multiple strings
- `string?`: Determine if a variable is string or not

```clojure
user=> (prn "hello newline")
"hello newline"
nil
user=> (pr-str "hello newline")
"\"hello newline\""
user=> (str 1)
"1"
user=> (str "hi" "newline")
"hinewline"
```

## Characters
Characters are used to represent a single glyph, for example, `\newline` or `\a`.

Some common char functions are:
- `char`: Coerces a variable to char or throws an exception
- `char?`: Determine if a variable is char or not

## Namespaces
Clojure code is organized in namespaces. We'll see this as we start writing more advanced programs. A namespace is a collection of symbols. Each of these symbols might be used to represent a function or value. Symbols can be imported across namespaces.

When you start the Clojure REPL in the terminal, you see a prompt `user=>`. This signifies that you are in the user namespace. If you are familiar with JS modules or Java packages, think of Clojure namespaces as the same concept.

## Defining variables
The function `def` is used to define static values. All `def`s are namespaced.

```clojure
(def age 20)
```

This is equivalent to ES6's `const age = 20`.


## Symbols
Symbols are identifiers that are used to refer to something else. They are defined as a string and can be namespaced. A symbol can contain only some special characters `* + ! / . : - _ ?`. A symbol cannot start with a colon.

```clojure
user=> (def fname "Ben")
#'user/fname
```

Here `fname` is a namespaced symbol, ie defined in `user` namespace. The character `/` is used to separate the symbol from the namespace. Symbols are namespaced by default. In this case, the term `#'user/fname` tells us that `fname` is a symbol defined in `user` namespace.

You can refer to the symbol by adding a single tick as prefix `'fname`. The function `symbol?` can be used to determine if an identifier is a symbol or not.

## Keywords
Keywords are similar to symbols, but unlike symbols that evaluate to the assigned values, keywords evaluate to themselves. They are written with a colon prefix `:like-so` and are not namespaced by default. The symbol `fname` above holds a string value, however, the keyword `:like-so` has no explicit value.

Keywords provide fast equality checks and can be used at places where symbols might not be viable. For example, in the case of enums, where you want a value belonging to a set of predefined values.

Keywords implement the `IFn` interface ie. are callable like functions.

```clojure
user=> (def m {:age 20 :roles [:admin :user]})
#'user/m
user=> (:age m)
20
```

Observe how we used `:age` as a function on map m. The default behavior is to return the value where the key is the keyword being used as the function.

Keywords, like symbols, can be namespaced using a forward slash`/`. The literal `:user/m` denotes a keyword in the `user` namespace. To automatically add the current namespace to a keyword, two colons can be used. `::m` is the same as `:user/m` given you are in the user namespace.

```clojure
user=> ::m
:user/m
user=> :other-user/m
:other-user/m
```

Some common keyword functions are:
- `keyword?`: Check if a variable is keyword or not
- `keyword`: Try to coerce a variable to keyword
- `namespace`: Get the namespace of the keyword

```clojure
user=> (keyword? :a)
true
user=> (keyword \a)
nil
user=> (keyword "a")
:a
user=> (keyword "some-ns" "a")
:some-ns/a
user=> (keyword "some-ns" "a")
:some-ns/a
user=> (namespace ::a)
"user"
```
## Collections
Composite data structures are loosely termed as a collection. These include Lists, Vectors, Hash Maps, and Sets. Collections are immutable, thread-safe, and are represented as abstractions.

Modifying collections yield new collections that may or may not be of the same type as the collection we started with. The yield will however have the same logical interface.

Collection manipulation is efficient because data is not copied to new collections, only pointed back to. Collections are sequenceable, ie implement the `ISeq` interface.

Some common collection functions are:
- `count`: Counts the number of elements in a collection
- `seq`: Returns a sequence that can be looped over. Output sequences might differ for different data types.

### Lists
Lists in Clojure are defined using parenthesis `()`. Since lists are used to interpret function calls, something like `(1 2 3)` will throw an error in the REPL. This is because Clojure will try to evaluate this form considering the first element of the list (1) as a function and the remaining elements as the arguments.

To bypass this issue, a single quote can be used. `'(1 2 3)` can be evaluated in a REPL with no issues.

Lists implement the `ISeq` interface. New elements are added to the front of the list using `conj`. Elements can be of any data type.

Lists are conceptually similar to Linked List and hence are very efficient to write on the edges. Lists are also a good choice if you want to access the variable as a sequence.

Some common list operations are:
- `list` : Create a list
- `list?`: Determine if a variable is a list
- `pop`: Get the last element of list, same as `last` but more efficient
- `peek`: Get all but first element of list
- `count`: Get the total number of elements in a list in O(1) complexity
- `conj`: Add an element to the top of the list
```clojure
user=> (def l (list 1 3 4 "hello" :norway))
#'user/l
user=> l
(1 3 4 "hello" :norway)
user=> (list? l)
true
user=> (pop l)
(3 4 "hello" :norway)
user=> (count l)
5
user=> l
(1 3 4 "hello" :norway)
user=> (peek l)
1
user=> (conj l 42)
(42 1 3 4 "hello" :norway)
```

Manipulation of lists is immutable, ie. a new list is created each time. However, in terms of the implementation, the new list is a view on top of the original list, making operations efficient.
### Vectors
Vectors are similar to lists, except they are indexed. This allows for faster lookups compared to lists. The lookup complexity of a vector is O(1). Vectors are defined using square brackets `[]`.

Vector is a collection so `count`, `conj`, and other collection functions work as intended. Elements are added to the end of a vector using `conj`.

Vectors also implement the `IFn` interface, hence can be called as a function. They take a single argument, an index number, and return the value at that index.

In case index is out of bounds an exception is raised.
```clojure
user=> ([1 2 5] 0)
1
user=> ([1 2 5] 45)
Execution error (IndexOutOfBoundsException) at user/eval194 (REPL:1).
null
```

Some common vector functions are:
- `first`: Gets the first element of the vector
- `second`: Guess what this would do?
- `take`: Take first n elements from a vector
- `drop`: Drop first n elements from a vector
- `nth`: Get element at index

```clojure
user=> (def v [1 82 :spiderman :asia])
#'user/v
user=> (first v)
1
user=> (take 2 v)
(1 82)
user=> (drop 2 v)
(:spiderman :asia)
(user=> (drop 2 v)
(:spiderman :asia)
user=> (nth v 1)
82
```

The functions used in the example above are collection functions, ie. can be applied to all data structures that implement the `ISeq` interface.
They will work fine with `list`s too, the efficiency may vary.

### Hash Maps
Or just Maps are key-value pairs. Maps are collections, hence can be sequenced, counted, and manipulated like collections.

Maps are expressed using curly brackets:
```clojure
(def m {:a "Hello"
        :b "World"})
```

Maps should always have an even number of forms. In the example above, `:a, "Hello"`, and `:b, "World"` are key-value pairs.

Notice how we don't need any commas or colons to segregate elements. It is a convention for map keys to be Clojure Keywords, however, the keys and values of a map can be any data type. The following map is perfectly fine:

```clojure
(def m2
  {:a :b
   :m-av {:f :g}
   [1 2 4] (list 34)
   {:map :as-key} "Val"})
```

Some common map functions are:
- `assoc`: Short for associate. Adds key/value pairs to map
- `dissoc`: Removes key/value pairs from the map
- `keys`: Gets all map keys
- `vals`: Guess what would values do?
- `get`: Get the value for a given key
- `get-in`: Get the value for a nested key
- `contains?`: Check if the map contains a key

```clojure
(def m2
  {:a :b
   [1 2 4] (list 34)
   {:map :as-key} "Val"})
#'user/m2
user=> (assoc m2 :c :d :e :g)
{:a :b, [1 2 4] (34), {:map :as-key} "Val", :c :d, :e :g}
user=> (dissoc m2 :a)
{[1 2 4] (34), {:map :as-key} "Val"}
user=> (get m2 [1 2 4])
(34)
user=> (get m2 :a)
:b
user=> (get-in {:a {:b :c}} [:a :b])
:c
user=> (contains? m2 :a)
true
```

### Sets
Sets are a collection of unique values and can be defined using `#{:a :b :c}` literal. All collection functions are available. Some common set functions are:
- `union` : Combine two sets
- `intersection`: Compute set intersection
- `difference`: Compute set difference


```clojure
user=> (def s #{:a :v})
#'user/s
user=> (def s2 #{:a :t})
#'user/s2
user=> (union s s2)
Syntax error compiling at (REPL:1:1).
Unable to resolve symbol: union in this context
```

Union is not defined?!
See I pulled a sneaky on you. Set operations are not available in Clojure core, but need to be imported from `clojure.set` namespace.

The syntax to require a namespace is as follows:
```clojure
user=> (require '[clojure.set :refer [union difference intersection]])
nil
```

There are more ways to import namespaces but we'll cover this topic in modules to come. For now, having imported these functions, you can try to run them yourself.

## Defining functions
The macro `defn` is used to define functions. We'll learn more about macros, but for now, you can think of macros to be a type of function.

The last element of the list invoking the `defn` function is the return value of that function.
The adder that we implemented in JavaScript above would look as follows:
```clojure
(defn adder [a b]
	(+ a b))
```

Observe how we don't need to specify a return value. The last element of the list is returned automatically.


## Commas are optional
You don't need to specify commas as they are considered to be white space. You can add them if you wish, however it's a very strong convention to not use commas at all.
```clojure
user=> (println 1 2 4)
1 2 4

user=> (println, 1, 2, 4)
1 2 4
```

## Brackets are used to define the order of invocation
There is no concept of BODMAS in Clojure and you explicitly need to specify the order of invocation.
```clojure
user=> (* 5 (+ 7 1))
40
```

## Comments

Any form starting with a semi-colon is a comment. There are conventionally two kinds of comments:
- Ones that start with double semi-colons `;;`. Used when the entire line is dedicated to the comment and
- Ones that start with a single semi-colon `;`. Used when a comment is in line with code

```clojure
;; this is a comment
(println (* 4 5)) ; so is this
```
## Homoiconicity
C-Style languages have a clear distinction between data structures and code. Consider the following JavaScript code:
```js
const people = ["a", "b", "c"];
const data = {"a": 1, "z": 26}

function adder(a, b) {
  return a+b;
}
```
The words `function` and `return` and the curly brackets are part of the language' syntax.

Clojure (and Lisp in general) doesn't have special forms for syntax. Plain data structures like lists and vectors are used instead. This property is called Homoiconicity or Autoiconicity. The above code in Clojure would look like:

```clojure
(def people ["a" "b" "c"])

(def data {"a" 1 "z" 2})

(defn adder [a b]
	(+ a b))
```

The same data structures are used to define data and code. The code is data.

## Conclusion
We learned about Clojure's Lispy syntax and standard data types. We got familiar with the REPL and saw that all Clojure data structures are immutable. We also discovered that Collections are defined as abstractions and different collections implement different interfaces.

We highly recommend that you get comfortable using functions showcased in this module. We also recommend that you get a sense of the syntax and the REPL before proceeding.

This module highlights only a subset of operations available for each data type. The [Clojure API Docs](https://clojure.github.io/clojure/clojure.core-api.html) is a good place to learn more about all available namespaces and methods.

## Recommended watch

- [Expert to Expert: Rich Hickey and Brian Beckman - Inside Clojure](https://www.youtube.com/watch?v=wASCH_gPnDw)


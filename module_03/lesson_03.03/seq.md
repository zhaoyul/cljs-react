---
title: Sequence Operations
slug: stdlib-seq
description: Clojure sequences are abstract. In this chapter, we'll make sense of what exactly we mean by that and learn about common operations.
privateVideoUrl: https://fullstack.wistia.com/medias/l4lspoardp
---

# Sequence Operations
We have been using the word sequence (or seq) without a concrete example. This is because seq is not concrete, but an abstraction. In the `Syntax and Native Data Types` chapter, we learned that lists, vectors, sets, and maps are sequences. Because they implement the `ISeq` interface. But what exactly do we mean by that?

Many languages come bundled with functions like `map`, `reduce`, `filter` etc. In ES6, these functions work on arrays. The `map` function, for example, takes an array and a function. And returns a new array where the element at index i is the function applied to element i of the input array.

If the input array is `[1, 2, 4, 5]`, and the function is `i => i + 1`, `map` code in JavaScript might look something like:

```js
[1, 2, 4, 5].map(i => i+1);
```

If you execute this code in a JS console, you'll see an output array `[2, 3, 5, 6]`.

But can you execute this code on a JS object? Do you think the following will work:
```js
{"name": "John Doe", "age": 29}.map(console.log)
```

If you have ever written JS, your mind would immediately tell you that this is illegal. Why? Because the `map` function is not designed to work with objects.

## Programming on abstractions
Clojure lets you run the same function `map`, on all native data structures. This is because `map` (and other sequence functions) is not tied to a data type, like JavaScript. Instead, it is tied to the abstract concept of sequence. All sequence functions can be called on any data structure that follows the rules of a sequence. For the sake of a mental model, sequences are lists.

The examples in this chapter are coded in the `first-project.seq` namespace. We are not going to ask you its disk path and assume you know it.

To get the sequence representation of a data structure. we can use the `seq` function.

{lang=clojure,crop-start-line=4,crop-end-line=12}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

The `seq` function converts a data structure into sequence form (if possible). In cases where the input does not implement the `ISeq` interface, an error is raised. Lists are not converted, vectors and strings are converted to lists, and maps are converted to a list of vectors.

## Sequence operations
Clojure is excellent for slicing and dicing data. One of the reasons behind this is its rich set of sequence operations. All functions defined for a sequence can be called on all sequence data structures.

Here is a subset of operations that we will encounter.

### map
The `map` function takes a sequence and transforms it by applying a function to each element. It's signature is: `(map fn-to-apply & sequences)`. Notice how we used `&` in the signature. If you recall from the chapter on `Function definitions`, this means that `map` is variadic. We'll get to it in a moment!

Let's try a simple map by `inc`rementing all numbers from 0 to 9:

{lang=clojure,crop-start-line=15,crop-end-line=16}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

The `inc` function is a part of the Clojure core, but what if you want to do something else, say square all numbers? Simple, you define your own square function and pass it to `map`:

{lang=clojure,crop-start-line=18,crop-end-line=21}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

We can make our expression more terse by using an anonymous function instead of namespaced definition:

{lang=clojure,crop-start-line=23,crop-end-line=25}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)


We can even go a step further by using the shorthand syntax for anonymous functions:

{lang=clojure,crop-start-line=27,crop-end-line=27}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

*When I was a beginner, my team members guided me with terse forms of almost every function I wrote. I made it a personal rule that if a function feels verbose, there is a better way to write it.*

The `map` function behaves slightly differently for Hash Maps. The function to apply receives a vector as an input where the first element is the key and second is the value (that can be destructured):

{lang=clojure,crop-start-line=29,crop-end-line=32}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)
Notice the use of `_` prefix for key argument, denoting that we don't really care about it. The use of `_` is not a rule, only a convention.

:::note
In multi-threaded environments like the JVM, we can replace `map` with `pmap` which is like `map` except it runs in parallel leading to better performance.
:::
### map on multiple sequences
The `map` function is variadic, ie. can run on multiple sequences simultaneously:

{lang=clojure,crop-start-line=35,crop-end-line=35}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

In cases where multiple sequences are passed, the function is applied to the nth element of each sequence collectively.

In the example above, we passed two equal-sized sequences of integers from 0 to 9. The function `+` was applied to the first element of both sequences to get the first element of the resulting sequence:
```clojure
(apply + [0 0])
;; or
(+ 0 0)
```

Then applied again to second element of both sequences and so on. This leads to a question that what happens when sequences are of unequal length? A benefit of the REPL is that you can just evaluate code inline and check for yourself! You'll find out that the longer sequence is truncated at the end:

{lang=clojure,crop-start-line=37,crop-end-line=37}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

### filter
The `filter` function removes elements of a sequence that don't match the defined condition. Its signature is: `(filter predicate-fn sequence)`. The predicate function receives arguments same as the `map` function, ie. single element for lists/ vectors and a two element vector for Hash Maps:

{lang=clojure,crop-start-line=41,crop-end-line=43}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

### reduce
The `reduce` function is the OG sequence operation. It's signature is: `(reduce f init-val sequence)` or `(reduce f sequence)`. The initial value of the accumulator is assumed to be `nil` if not supplied. The input `f` is a function that accepts two arguments: an accumulator and the next element:

{lang=clojure,crop-start-line=46,crop-end-line=46}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

In the simple example above, we reduce a list of integers from 0 to 9. We didn't pass a default start value so `nil`.

- In the first iteration, the function `+` is applied to `nil` (initial value) and the first element of the list (ie. 0). `(+ nil 0)` is 0 so our new accumulator becomes 0.
- In the next pass, the function `+` is applied to the last accumulator (0) and the next element (1). The resulting value (1) becomes the next accumulator.
- This process is continued until the sequence is exhausted.

All destructuring concepts we have studied so far are valid in conjunction with `reduce` (and all other sequence operations). Combining concepts make our expressions terse. For example, you can find the average karma points of a list of users like so:

{lang=clojure,crop-start-line=48,crop-end-line=56}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

Want it to be more terse? Use shorthand definition for the inline function:

{lang=clojure,crop-start-line=58,crop-end-line=59}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

We feel that this is the right time to point out that our aim should not be to use the minimum lines of code. Especially at the cost of readability. Clojure is expressive but it's your responsibility to use it wisely.

### keep
The `keep` function is similar to `filter` and has the same signature. It returns the value of the supplied pure function, if `(f item)` is not `nil`:

{lang=clojure,crop-start-line=61,crop-end-line=61}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

`keep` is different from `filter` in the sense that `filter` selects elements from input based on the predicate, whereas `keep` returns the value of the input function.

Do you remember that keywords can be used as functions to pull out values from a map?
```clojure
(:a {:a 1 :b 2}) ;; => 1
```
This is a good time to point out that maps can also be used as a function with a similar effect:
```clojure
({:a 1 :b 2} :a) ;; => 1
```

Combining this map as function with `keep`, you can pull a list of values from a map like:

{lang=clojure,crop-start-line=62,crop-end-line=62}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

The permutations of things we can do with sequences keep growing.

### remove
The `remove` function is filter's inverse and has the same signature. It returns all values from the input sequence where the predicate function returns false:

{lang=clojure,crop-start-line=66,crop-end-line=66}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

### into
Since sequences are abstract, the input data structure might not be the same as output data structure. For example, if have a Hash Map of cities and their respective temperatures, and you want to figure out all cities with temperature below 30, you might use a `filter`:

{lang=clojure,crop-start-line=72,crop-end-line=85}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

Notice how we passed in a Hash Map but received a list. The `into` function helps you shapeshift data structures. It can be used in a variety of ways, but the signature we are interested in is: `(into to from)`.

It's particularly useful with sequence operations. To get a map back from the list above, we can specify an empty map as the `to` argument:

{lang=clojure,crop-start-line=87,crop-end-line=89}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

`into` works by `conj`oining every element of the sequence with the `to` argument. In the example above, where we shape shift to a map, the following operations take place:
- `conj`oin empty map `{}` with first element `[:c 24]`, resulting in `{:c 24}`

{lang=clojure,crop-start-line=91,crop-end-line=91}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)
- `conj`oin resultant map with second element `[:d 19]` resulting in `{:c 24, :d 19}`
- `conj`oin next element (which happens to be the last) and return the final result.

Since `conj` is defined for sequences, the same procedure works on vectors too! Do you think it will work on sets? What do you think will happen if we try to shapeshift `temp-under-30` into a set?

{lang=clojure,crop-start-line=94,crop-end-line=94}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

### group-by
The `group-by` function takes a function and a sequence: `(group-by f seq)` and returns a map. The function is applied to every element of the collection. The keys of the resultant map are the set of values returned when f was applied to all elements. The values of the map is a vector of elements where the result matches the key.

It's easier to understand with an example:

{lang=clojure,crop-start-line=98,crop-end-line=98}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

The `even?` function was applied to integers from 0 to 9. The set of results on the application of f to each element was `{true false}`. The respective elements appeared as values of the respective result.

Since keywords can be used as functions with Hash Maps, you can group sequences of maps by keys:

{lang=clojure,crop-start-line=100,crop-end-line=106}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

In the example above, we grouped all users who are the same age.

### partition
Partition converts a collection into groups of n. In it's simplest form, it's signature is: `(partition n collection)`:

{lang=clojure,crop-start-line=110,crop-end-line=110}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

:::note
We use the term sequence and collection interchangeably.
:::

In the example above, if number of elements in the collection is such that a complete partition cannot be created, the extra elements are truncated:

{lang=clojure,crop-start-line=112,crop-end-line=112}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

Partition also allows for step sizes, with signature: `(partition size step seq)`. With the step defined, a collection with `size` elements is selected at every `step`:

{lang=clojure,crop-start-line=114,crop-end-line=114}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

Two elements are selected at a step size of four.

We can also use a pad collection  to complete partitions and prevent truncation. The signature for using pad is: `(partition size step pad-seq seq)`:

{lang=clojure,crop-start-line=116, crop-end-line=117}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

If the pad sequence is defined, unequal partitions might also be returned.

### sort
Sort helps with re-arranging a collection on the basis of a comparison operator. One of its signature is: `(sort seq)`. It sorts the given sequence in ascending order:

{lang=clojure,crop-start-line=121,crop-end-line=121}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

`sort` can also accept a `comparator` as the first argument:

{lang=clojure,crop-start-line=122,crop-end-line=122}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

### juxt

The `juxt` function is an honorary mention because a company named Juxt helped me progress in my Clojure journey. The function's signature is: `(juxt & fns)`. It takes a arbitrary number of functions and returns a higher order function. When this function is called with some arguments, the result is the a vector of all functions applied to the arguments:

{lang=clojure,crop-start-line=123,crop-end-line=123}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

The function `+` an `*` is applied to arguments `1 2 3 4 5` and the results are returned as a vector.

## Transducers
You can use the `filter`, `map`, and `reduce` functions without passing a collection like:
```clojure
(filter even?)
```
This creates a transducer, which is an alternate (sometimes more efficient) way to work with sequences. We will not cover transducers in this course as they take the abstraction one level higher.

We can however form a mental model for transducers. If you have a sequence and want to apply multiple filters to it, you can call the `filter` function repeatedly:
```clojure
(filter f3 (filter f2 (filter f1 seq)))
```

This leads to the repetitive traversal of the sequence. First `f1` is applied to `seq`, then `f2` is applied to the result of the last filter, and so on. This operation can be made more efficient if we can compose all filters and apply them together:
```clojure
(filter (comp f1 f2 f3) seq)
```

The same goes for `map` and `reduce`. The complexity in transducers arises when we try to combine these operations.

## Sequence operations are lazy
Most of the time, a sequence operation is not evaluated, until the point where the results are needed. This makes your program more efficient and also lets you work with infinite sequences as if they were finite.

If we print all elements of a list but return another value, we'll discover the sequence was never realized:

{lang=clojure,crop-start-line=127,crop-end-line=131}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

If you check your console, you'll find that no number was printed when you called the function. This is because the result of the function is independent of the `map`. This sometimes might be an issue, and can be mitigated using the `doall` function. `doall` forces evaluation of lazy sequences:

{lang=clojure,crop-start-line=133,crop-end-line=137}
<<[first-project/src/first_project/seq.cljs](./protected/source_code/first-project/src/first_project/seq.cljs)

You'd notice the numbers are printed in your runtime ie. running Node script terminal:
```bash
1
2
3
4
5
6
7
8
9
```

## Conclusion
Sequence manipulation is one of Clojure's specialty. In this chapter, we learned about important sequence operations. We used them in conjunction with concepts learned before and saw how functionalities glue together. We also learned about the abstract and lazy nature of sequence operations.

After completing this chapter, you should feel comfortable reading Clojure source code. As with all chapters in this module, it will be unfair to assume that one can get this right in the first go.


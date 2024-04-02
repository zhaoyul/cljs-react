---
title: Read and Delete Graphics
slug: tc-read-delete-graphics
description: Create Reframe handlers to read and delete graphics. Analogous to GET and DELETE in a REST API.
---

# Read and Delete Graphics

Continuing the progress from the last chapter, we'll build the functionality to read and delete graphics from Firebase, again without the UI.

## Read Graphics
Reading from Firebase is straight forward. We set up the read rules in the last chapter so we can jump straight to the Reframe loop.

### Dispatch Read Event
Just like we did for graphic creation, we can dispatch a read event in `:a.p.g` namespace:

{lang=clojure,crop-start-line=15,crop-end-line=15}
<<[tinycanva/src/app/pages/graphics.cljs](./protected/source_code/tinycanva/src/app/pages/graphics.cljs)

In the real world, you might want to paginate and filter the records you fetch from an API. The pagination and filter parameters can be passed as the next elements of the event vector: `[:fetch-graphics "filter term" 1 4]`. But for our case, we'll fetch and show all graphics.

### Event Handler
The event handlers job is similar to create event handler. It starts a loading indicator and calls a custom effect to fetch the list of graphics:

{lang=clojure,crop-start-line=86,crop-end-line=92}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

Notice how we passed an empty vector to `:on-error` parameter. We haven't written the custom `:firebase/read` effect yet, but when we do, we'll ensure that we handle empty `:on-error` cases. This is useful because sometimes errors need not be handled.

### Effect Handler
The effect handler reads data from a node and passes it to the `on-success` handler. It doesn't concern itself with saving of data to `app-db`. This is because the effect can be used to fetch any node, and not just the graphics node:

{lang=clojure,crop-start-line=146,crop-end-line=159}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

Items in Firebase DB can either be read once or every time the database changes. The latter is good for syncing between multiple clients. Since we are building with a single client, we will read the values just once.

A successful read returns a `snapshot` object. This is the state of the requested node wrapped in a JS object. The method `snapshot.val` returns the JSON value of the node.

We take the `snapshot`'s value, convert it to a Clojure from JSON, and dispatch the `on-succes` event with this value.

`js->clj` converts JSON to Clojure map, `:keywordize-keys` convert keys from string to keywords:

```clojure
(js->clj (js/JSON.parse "{\"hello\": \"world\"}")) ;; => {"hello" "world"}

(js->clj (js/JSON.parse "{\"hello\": \"world\"}") :keywordize-keys true) ;; => {:hello "world"}
```

Finally, in the `.catch` block, we check if an `on-error` event is available, if so we dispatch the error. The `error` here is a JavaScript object and can be inspected using `js/console.log`.

### Fetch Success handler
When the fetch is successful, the effect dispatches the event defined in `on-success` with the fetched records. We now need to handle this event and save the fetched data in `app-db`:

{lang=clojure,crop-start-line=94,crop-end-line=99}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

We use `reg-event-db` because we only need the `db` co-effect. The handler removes the loading status using `dissoc` and sets `::graphics` in the `app-db` using `assoc`.

When the loop is complete, all graphics will be present in `app-db` at `::graphics` (ie. `:a.d.f/graphics`). The graphics in `app-db` is a Clojure map, where keys are the unique ids of all graphics and values are the associated JSON.


## Delete Graphics
Deleting graphics without a UI is slightly tricky. To delete a graphic, we need to know its id beforehand. This is different from creating or reading, where we could just `dispatch` events, without any knowledge of the current state.

The strategy here is to:
1. create a few graphics
2. fetch and save graphics in `app-db`
3. dispatch the delete event with the id of the first graphic saved in `app-db`

### Read `app-db` and dispatch delete event
The graphics are stored in `app-db` as a map. If a user with id `1`, created 4 graphics with: `/graphics/1/g1`, `/graphics/1/g2`, `/graphics/1/g3`, `/graphics/1/g4`, then the shape of graphics in `app-db` will be:
```clojure
{:g1 {}
 :g2 {}
 :g3 {}
 :g4 {}}
```

We need the id `g1`. We can find it by reading `re-frame.db/app-db`, which is an `atom` that stores the current value of `app-db`:

{lang=clojure,crop-start-line=17,crop-end-line=23}
<<[tinycanva/src/app/pages/graphics.cljs](./protected/source_code/tinycanva/src/app/pages/graphics.cljs)

The `keys` function returns all the `keys` of a map as a list. The `first` function selects the first element of the list and the `name` function converts a keyword into a string. This conversion is required because we save the ids as keywords in `app-db` but it is a string in the context of Firebase.

We then take this id and dispatch our imaginary `:a.d.f/delete-graphic` event.

### Event handler
This event handler is similar to the other event handlers we have created so far. It's job is to set a loading indicator and call the Firebase delete effect:

{lang=clojure,crop-start-line=101,crop-end-line=106}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

The loading indicator is not a boolean value but a list of ids being deleted. This is because a user might press the delete button on multiple graphics. To tackle the case of multiple deletes in parallel, we need to store each id being deleted so a loading indicator can be made visible against every graphic.

The `update` function has the signature: `(update m k f & args)`. Where `m` is the map to be updated, `k` is the key of the map in question and `f` is a function applied to value at `k` with args `& args`. The value is then updated to the result of `(f (-> m k) args)`. In our case, we update `db` map key `::deleting-graphic-ids` and `conj`ugatge or add the latest graphic id to this list.

Notice how we didn't pass an `:on-error` parameter this time. It's equivalent to saying `:on-error []`. Also, the `:on-success` parameter passes the `graphic-id`. This because Firebase's deletion doesn't return the deleted object, but we need the deleted id to update `::graphics` in `app-db`.

### Effect handler

{lang=clojure,crop-start-line=161,crop-end-line=170}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

Notice how we used `.database` and `.remove` instead of `(.database)` and `(.remove)`. Both forms are valid in the case of functions that accept only one argument. If the function requires more than one argument, a parenthesis is compulsory.

This effect calls the `.remove` function on the passed in node and calls the success or error event. We didn't `conj` anything because `.remove` doesn't return any value. Also, both `on-success` and `on-error` methods are optional for this effect. This is just to showcase a variety of effect types.

### Delete success event handler
When the node is deleted, the success event is dispatched with the deleted `graphic-id`. To update the UI, we need to delete this id from `::graphics` in `app-db`.

{lang=clojure,crop-start-line=108,crop-end-line=113}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)


`update` marked with comment `1` removes the deleted graphic id from the list of graphic ids being deleted. If you don't understand the idiom, stop here and try the `remove` function with `update` in the REPL. The `remove` function takes a predicate and collection and removes all elements in the collection that return `true` for that predicate:

```clojure
(remove odd? (range 10)) ;; => (0 2 4 6 8)
```

One way to add a predicate is to use a single element set:
```clojure
(remove #{1} (range 10)) ;; => (0 2 3 4 5 6 7 8 9)

;; this works because sets can be used as comparison functions
(#{1} 1) ;; => 1

(#{1} 2) ;; => nil
```

Now we have a map with a key `::deleting-graphic-ids` whose value is a list of ids being deleted. We need to remove the deleted if from this list. This is done by passing the deleted id as a set:

```clojure
(remove #{graphic-id} seq)
```

The seq here is the current value of key `::deleting-graphic-ids`. `update` function calls the updating function with the current value of the key, so if we can convert the remove above to a function: 
```clojure
(def graphic-id "xyz")
(defn delete-graphic-id-from-seq [current-deleting-ids]
	(remove #{graphic-id} current-deleting-ids))
```

We can pass it to update like so:

```clojure
(update db ::deleting-graphic-ids delete-graphic-id-from-seq)
```

Here the value of `:deleting-graphic-ids` in `db` will be passed as the first argument to `delete-graphic-id-from-seq` function. And if we define the function inline, we get:

```clojure
(update ::deleting-graphic-ids #(remove #{graphic-id} %))
```

Clojure idioms can be freakishly precise, and it's okay if it doesn't make sense at first. It eventually will.

`update` marked with comment `2` removes the deleted graphic from `::graphics`. It is similar to the following operation:

```clojure
(update {:graphics {:g1 {} :g2 {}}} :graphics dissoc :g1) ;; => {:graphics {:g2 {}}}
```

## Conclusion
In this chapter, we further integrated Reframe and Firebase to delete and list graphics. In the next chapter, we'll connect our Reframe components to the UI.

The ability to develop the integration and UI in isolation leads to better separation of concerns. It also leads to better testability which we'll see in a future chapter.


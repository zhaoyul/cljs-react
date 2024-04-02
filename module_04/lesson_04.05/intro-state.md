---
title: Introduction to State Management
slug: tc-intro-state
description: Reframe is a flux like library for uni-directional data flow. In this chapter we'll study the six step Reframe loop.
privateVideoUrl: https://fullstack.wistia.com/medias/7rqpa9rstf
---

# Introduction to State Management
State management in React is a controversial issue. There are multiple competing models like MobX, React Context, and Flux.

In this chapter, we'll walk through two ways of managing the app state: Reframe and reactive Atoms. Both of them include concepts and terminologies. The focus right now is to form a mental model. In later chapters, we'll realize the models.

We have already seen `r/atom` [in action](/courses/courses/tinycanva/tc-reagent/#local-state-using-reactive-atoms). Ratoms are simple yet a powerful way to store state. We can have one or more ratoms and components that listen to them. But as your app grows, keeping track of these atoms get hard. The performance too will suffer as we have little control over the re-render cycle. If anything in the ratom changes, all listener components will be re-rendered.

## Reframe
[Reframe](https://day8.github.io/re-frame/) is a Redux like framework with a uni-directional data loop. It allows you to structure application state and enables optimal rendering. It is one of the most starred Clojure projects and was first released in 2015.

The authors of Reframe explain it as a [6 step process](https://day8.github.io/re-frame/a-loop/#six-dominoes). Let's walk through the steps with an example.

Imagine you have a form with two input components: email and password. And you want to re-render the form each time a user types something. The skeleton of the component might look something like:

```clojure
(defn login-form []
	[:input#email {:value "" :on-change #()}]
	[:input#password {:type "password" :value "" :on-change #()}])
```

This component won't work. Because the `:value` is fixed and `:on-change` is not implemented. Just focus on the outline for now.

### Dispatching events
The first step of the Reframe loop is to dispatch or emit an `event`. This event could be a keystroke in an input field, a click of a button, a message on a WebSocket, mouse motion, etc. In the example above, the user typing in the `input` field is the event we wish to capture.

To set the loop to motion, we use the `reframe.core/dispatch` method:
```clojure
(rf/dispatch [:event-id argument1 argument2 ...])
```

`dispatch` accepts a vector where the first element is the id of the event we want to dispatch. Data that we wish to pass along can be passed in the vector.

In more concrete terms, in the `login-form` component, we wish to save the state in Reframe. So we can modify the `:on-change` handlers to `dispatch` change events:
```clojure
(defn login-form []
	[:input#email {:value ""
	               :on-change (fn [e]
				                  (rf/dispatch
								     [:handle-email-change (.. e -target -value)]))}]

	[:input#password {:type "password" :value ""
	                  :on-change #(rf/dispatch
					                 [:handle-password-change (.. % -target -value)])}])
```
We used inline functions to `dispatch` events each time the input changed. This is not the ideal way to go about it, just easy to understand.
Both `(fn [])` and `#()` have the same behavior. Both call `dispatch` and set the Reframe loop in motion.

### Event handlers
`:handle-email-change` and `:handle-password-change` are events that change the state of the app. Event ids are keywords and generally namespaced. For a `dispatch` to be useful, we need to handle the dispatched event. This can be done using `reframe.core/reg-event-fx` method (aka. register event effect method):

```clojure
(rf/reg-event-fx
  :handle-email-change
  (fn [_ _]
    ...))
```

`reg-event-fx` takes two arguments: the event id and a pure handler function. This handler function is called with two arguments each time the event is dispatched.

The first argument is the co-effects map. You can think of the co-effect map as the current state of the universe. The second argument is the vector we passed to `dispatch`:


```clojure
(rf/reg-event-fx
  :handle-email-change
  (fn [cofx event]
    ...))
```

This is a good time to disclose that Reframe keeps the entire application state in one large map. This is generally referred to as `app-db`. Internally, this map is a ratom.

Event handlers are pure functions that return a map of effects to run. These effects are impure functions that change state (or perform other side-effects) in a sequential way.

Reframe maintains a queue of effects returned by event handlers. All effects are guaranteed to run in the order they were queued.

In our example, we want the state of the app to change and reflect the latest value of the input, ie. we want our `app-db` to change to a new-db:
```clojure
(rf/reg-event-fx
  :handle-email-change
  (fn [cofx [_ email]]
    {:db new-db}
	)}))
```

We destructured the event to pull out the email and returned a map with key `:db` and value `new-db` (which we'll define soon).

### Effect handlers
All event handlers are required to return a map. The keys of the map are the effects we need to run and the values are the arguments to that effect. `:db` is a built-in effect that changes the value of `app-db`. We can define custom effects for interaction with APIs, sockets, local storage, etc. For now, we'll use the built-in `:db` effect.

The `:db` effect takes a map and resets the `app-db` to this new map. Since the entire app state is in one map, we need:
- fetch the current `app-db`
- `assoc`iate the new value of email and set it as `new-db`
- Set the value of `app-db` to `new-db`

`cofx` (Co-effects) is a map of all effects, and holds the current value of `app-db` under the key `:db`. To compute the `new-db`, we can:

```clojure
(rf/reg-event-fx
  :handle-email-change
  (fn [cofx [_ email]]
    ;; 3
    {:db (assoc (:db cofx) ;; 1
	            :email email ;; 2
				)}
	)}))

;; handle password event in a similar way
(rf/reg-event-fx
  :handle-password-change
  (fn [cofx [_ password]]
    {:db (assoc (:db cofx)
	            :password password)}
	)}))
```

1. Get the current value of `app-db` (`:db` key in `cofx`)
2. Associate new email under `:email` key
3. Return the `:db` effect that will update the state of the `app-db`

The above code enqueues an instruction to change the value of `:email` key in the `app-db` to the value dispatched in the event. It doesn't change the `app-db`. The built-in `:db` effect handler does that.

Pure event handlers put effects on a queue. These are then applied in order and can be traversed for debugging. Pure event handlers makes testing a breeze.

### Subscriptions
The side effect has been applied and the state of the universe has changed. But the DOM hasn't changed yet! The last piece of the puzzle is to subscribe to the database and render changes. The `re-frame.core/reg-sub` method helps us define subscriptions (in a way similar to event handlers):

```clojure
(rf/reg-sub
  :email-and-password ;; sub-id
  (fn [db _]
    {:email (:email db)
	 :password (:password db)}
	 ;; or (select-keys db [:email :password])
	 ))
```

Subscriptions help decouple the view layer from the `app-db`. With subscriptions, we pluck the state we care about making our component re-render only when the relevant state changes. It also helps re-use the same component in cases when the shape of the database changes. In the future, if we decided to rename `:email` to `:login-email`, we can update the subscription to `{:email (:login-email db)}` and the view will continue to work.

We can integrate subscriptions with views via the `reframe.core/subscribe` method:

```clojure
(defn login-form []
  (let [{:keys [email password] @(rf/subscribe [:email-and-password])}]
    [:input#email {:value email
	           :on-change (fn [e]
				(rf/dispatch
				 [:handle-email-change (.. e -target -value)]))}]

    [:input#password {:type "password"
                      :value password
	              :on-change #(rf/dispatch
				   [:handle-password-change (.. % -target -value)])}]
    ))
```

`subscribe` returns an `atom` like object that we can `deref` using `@`. Here we subscribed to the Reframe sub. and used the value as `:input`'s value.

### Step 5 and 6 ?
Step 5 is re-computation of the view for the new state and step 6 is flushing the view down to DOM. These are automatic.

## Structuring Reframe apps
There are three major moving parts in a Reframe application: events, effects, and subscriptions. Where each of these goes is an opinion. You can put them together in a single namespace and require it in the bootstrap process. But this might bite you as your app grows in complexity.


### Separation by concerns
A convention for small apps is to have three namespaces:
- app.events
- app.subs
- app.effects

Each of the namespaces registers the required events, subs, and effects. Then we can import these namespaces in the app bootstrap process. For example, imagine a blog application with 2 domain entities: `authors` and `posts`. The namespaces might hold registrations for the following:

- app.events `:authors/fetch-all`, `:authors/fetch-by-id`, `:posts/fetch-top`, `:posts/search` and so on
- app.effects - `:http` (to interact with the CMS API)
- app.subs - `:author/profile`, `:post/list`, `:post/detail`

With namespaced keywords, we can easily code 100s of events in a single namespace.

### Separation by domain
Another way is to think of actions in terms of entities of the domain. In the blog application above, we have two domains entities: `posts` and `authors`. We can create a namespace for each entity:
- app.domain.authors
- app.domain.posts

All events and subscriptions related to the entity go to the entity's namespace. This presents a challenge: The `event` or `effect` or `sub` wouldn't be registered unless the namespace required explicitly.

### Combination
Both approaches have their merits. The first one leads to fewer namespaces. The second one makes it easier to manage and maintain apps with a large number of entities. It is also common to use a combination of the two approaches:
- Events and Subscriptions separated by domain with each entity having its namespace and
- Effects in `app.effects` namespace

Again, there is no hard and fast rule as to the folder structure. My suggestion is to get a hang of the system, and then play around until you find a good fit. We are going to separate by domain.

## Mixed usage with `r/atom`
ClojureScript data structures are not as efficient as raw JavaScript data structures. This performance diff is most evident during actions that require real-time feedback. For example, if you choose to store the local form state in `app-db`, you might experience input lag as your app grows.

To bypass this issue, and excessive boilerplate code, we are going to use `r/atom` for UI only state and Reframe for shared state and side effects. Again, this is just an opinion. Nothing is stopping you from moving everything to Reframe. For smaller apps, you might not even need Reframe.

## Conclusion
In this chapter, we learned about Reframe concepts and different ways of structuring Reframe applications. Reframe is a powerful library with a robust API. The parts we covered are the absolute basics. We'll learn more about it in future chapters. These steps will become easier to grasp as we implement them.

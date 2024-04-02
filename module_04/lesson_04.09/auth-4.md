---
title: Auth Effects and Firebase Initialization
slug: tc-firebase-init-and-effects
description: We dispatched an event and wrote a handler. The handler returned an effects map, with a custom effect `:firebase/email-auth`. In this chapter, we'll create the custom effect handler and initialize the Firebase app.
privateVideoUrl: https://fullstack.wistia.com/medias/1fk3ulm735
---

# Auth Effects and Firebase Initialization
We dispatched an event and wrote a handler. The handler returned an effects map, with a custom effect `:firebase/email-auth`. 
In this chapter, we'll create the custom effect handler and initialize the Firebase app.


## Create the effect handler
Effect handlers are impure functions that can be used to perform side effects like calling APIs, saving data to localstorage, sending an email, etc. In our case, the side effect will log the user into Firebase and cache user details in `app-db`. The function `re-frame.core/reg-fx` can be used to register custom effects.

In smaller applications, you might have a namespace `app.effects` for all the effects. In our case, we are going to place this function in `app.domain.firebase`, since the effect is related to Firebase.

`reg-fx` accepts two arguments: an effect id and a handler function. Reframe calls the handler function with arguments passed to effect map.

{lang=clojure,crop-start-line=53,crop-end-line=60}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)


To keep things in context, here is the event handler (built in last chapter) that requested execution of this effect:

{lang=clojure,crop-start-line=30,crop-end-line=35}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

- The event returned an effect map requesting to execute effect `:firebase/email-auth` with argument `form-state`, which is a map with keys `:email` and `:password`
- The registered effect `:firebase/email-auth`'s handler function is called with this map, which we destructure as `{:keys [email password]}`
- The effect interacts with the Firebase SDK and calls the impure function `signInWithEmailAndPassword`. Notice the use of `->` thread first macro. The JS equivalent of the function call above is:
```javascript
firebase.auth()
	    .signInWithEmailAndPassword(email, password)
		.catch(function(err) {})
;
```
- The sign-in function is impure because a remote resource is called
- We also handle the error case and `dispatch` the `::email-auth-error` event, which is again impure. We have not created a handler for `::email-auth-error` yet

You might be wondering where is the login success case. Good observation! Firebase Auth expects us to register an "auth state observer" globally. Firebase also expects us to initialize a Firebase app globally.

## Create Firebase Auth State Observer
This observer function is called each time the auth state changes, ie. a user logs in or out. We will hook this observer in Reframe by dispatching events when the auth state changes. In real-world apps, this use case is similar to listening to sockets. A global listener waits for messages and `dispatch`es Reframe events as messages are received.

Since this functionality is related to Firebase, we'll define the observer in the `app.domain.firebase` namespace:

{lang=clojure,crop-start-line=6,crop-end-line=22}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

- We created a function `observe-auth-state` with `defn-`
- The `-` hyphen suffix signifies a private function, ie, this function can only be called in the current namespace
- This function internally calls `.onAuthStateChanged` on `(firebase/auth)`, the global Firebase Auth instance
- A callback function is passed as the first argument
- The callback receives a `user` object, which is a JavaScript object returned by Firebase when a user logs in or `nil` when the user logs out
- Depending on the existence of `user`, we `dispatch` the `::user-logged-in` and `::user-logged-out` events (which we haven't registered yet)
- The function `firebase-user->user` converts the JS object to a Clojure map

## Setup login error, success, and logout handlers

The event handlers of the login and logout dispatch will add or remove this user from `app-db`. The login error handler will set the error message in `app-db` and unset the loading indicator. Let's define these handlers to save and remove the logged in user from `app-db`:

{lang=clojure,crop-start-line=37,crop-end-line=50}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

`reg-event-db` is similar in scope to `reg-event-fx`, except that it receives only the `:db` co-effect and returns the new value of db. Unlike `reg-event-fx`, that receives all co-effects and return an effects map.

Since most frontend events only change `app-db`, Reframe provides us this shortand. The two calls below are identical:

```clojure
(reg-event-fx :id (fn [cofx event]
	{:db (assoc (:db cofx) :loading true)}))

(reg-event-db :id (fn [db event]
	(assoc db :loading true))
```
## Setup config
For any Firebase function to work, we need to initialize a Firebase app using client config. Not just that, you might need other configurations in a real-world app, like REST API endpoints, analytics id, etc. Also, you might have a different set of configurations for different environments: dev, prod, staging, etc.

Our configuration strategy is to have an `app.config` namespace with top-level `def`s for each environment, and a `for-env` function to select the applicable config:

```clojure
(def dev {})

(def prod {})

(def other-env {})

(defn for-env [env]
	;; return config for the specified env
	)
```

Let's create this namespace. The credentials will be different for you. Make sure you add your own credentials as these might not work:

{lang=clojure}
<<[tinycanva/src/app/config.cljs](./protected/source_code/tinycanva/src/app/config.cljs)

We can skip adding credentials for other environments for a later chapter. With this strategy, we need to ensure that the shape of all config maps is the same.

## Create a Firebase Init function
Firebase SDK allows us to initialize multiple applications using the `initializeApp` function. It also returns a list of initialized apps via the `firebase/apps` property. Our strategy is to initialize Firebase once when the app is rendered.

It is also recommended to ensure that the app is not initialized. We'll define an `init` method in `app.domain.firebase` and call it in the bootstrap process in `app.core`:

{lang=clojure,crop-start-line=24,crop-end-line=27}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

- The `config` argument is the value of `:firebase` map defined in `app.config`
- The `zero?` function is same as `(== x 0)`
- `firebase/apps` returns a JavaScript list of initialized apps
- `alength` is like the `length` function, but it operates on JavaScript arrays, unlike `length` which needs a CLJS sequence
- We convert the `config` to a JS map because `firebase/initializeApp` is a JS function
- We also start observing the auth state

## Import configuration during bootstrap
We need this configuration in `app.core` to initialise Firebase app. We can do this by importing the `app.config` namespace and calling the `for-env` method:

{lang=clojure,crop-start-line=9,crop-end-line=9}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)
{lang=clojure,crop-start-line=13,crop-end-line=14}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)

Shadow allows us to read environment variables. We'll use them later to replace `for-env :dev` with the correct environment soon.

## Initialize Firebase in `main`
Our `app.core/main` is the entry point of the app. Currently, it calls the `render` function. Firebase too just needs to be initialized once, when the app loads, hence we can call the `app.domain.firbase/init` function just before `render`:

{lang=clojure,crop-start-line=36,crop-end-line=40}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)

You also need to require the Firebase domain in `app.core` using `:require [app.domain.firebase]`. 
We pass the Firebase configuration from `applicable-config` to the `init` function. 

## Testing Event and Effect handlers
This tutorial is guided, and you won't see any errors or issues, because we have already fixed the issues. But in real life, this won't be the case. You'll have to debug your applications and figure out why your app didn't re-render. There are many ways to go about this:

### `prn` and `js/console.log`
The humble print statement is an excellent debugging tool. In Reframe base apps, you can add print statements to event and effect handlers, and even functional components. Namespaced keywords are helpful:

```clojure
(rf/reg-fx
	:firebase/email-auth
	(fn [form-state]
		(prn ::here form-state)
		;; do other cool things
		))
```

Just make sure that you get rid of these before committing your code.

### Inline evaluation using NREPL
There are many things you can do with the NREPL:
- Dispatch Reframe events
- Inspect `app-db` atom at `re-frame/app-db`. You can also create lenses into state you care about `(-> @re-frame/app-db :app.domain.firebase/login-loading?)`
- Inspect third-party libraries and functions


### Re-Frisk
Re-Frisk is a visual debugging tool for Re-Frame applications. It can be enabled by preloading it using Shadow config:

{lang=clojure,crop-start-line=2,crop-end-line=6}
<<[tinycanva/shadow-cljs.edn](./protected/source_code/tinycanva/shadow-cljs.edn)

You might need to restart the watch process after configuring Re-Frisk. When done, you'll see a dashboard overlaid on top of your application. This dashboard will not be packaged in production builds.

## Subscriptions and completing the loop
We have our effect and Firebase app in place. We called the login function. Next, we need to handle errors and success and change the UI accordingly. To prevent concept overload, we'll build subscriptions in the next chapter.

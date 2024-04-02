---
title: Auth Event Handlers
slug: tc-firebase-auth-events
description: In this chapter, we'll initiate the Reframe loop for our login form, dispatch form submit events, and handle it, ie implement steps 1 and 2.
privateVideoUrl: https://fullstack.wistia.com/medias/vsqkpx46s8
---

# Auth Event Handlers
Firebase Auth package wraps the API into an SDK. There are functions for all tasks that you might need to perform. 

A real-world app might depend on one or REST or GraphQL APIs. In this chapter, we'll integrate Reframe and Firebase Auth, and draw parallels between Firebase SDK and custom REST APIs.

## Install Reframe
Reframe ships as a [Clojars package](https://clojars.org/re-frame) and can be installed by updating the dependencies vector in `shadow-cljs.edn`. We also recommend installing `refrisk`, a visual debugging tool for Reframe:

{lang=clojure,crop-start-line=17,crop-end-line=20}
<<[tinycanva/shadow-cljs.edn](./protected/source_code/tinycanva/shadow-cljs.edn)

## Update Reagent Version
Reagent version that ships with `create-cljs-app` is `0.8.0`. The latest Reframe (`1.1.1`) causes issues with `0.8.0`. So we updated Reagent to version `0.10.0` (in dependencies above).

Version `0.10.0` requires another change. The render function has moved from `reagent.core` to `reagent.dom`. To make this change, we need to import `reagent.dom` instead of `reagent.core` in `app.core`:

{lang=clojure,crop-start-line=3,crop-end-line=3}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)

We also need to update the `render` function to use `rd/render` instead of `r/render`:

{lang=clojure,crop-start-line=28,crop-end-line=28}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)

## Create Firebase domain namespace
There are multiple ways to structure a Reframe app. As discussed before, we'll segregate code by domain. All Reframe events, effects, and subscriptions related to Firebase will stay in `app.domain.firebase` namespace.

```bash
mkdir src/app/domain
touch src/app/domain/firebase.cljs
```
We'll populate the namespace later in this chapter.

## Firebase Auth flow
Firebase Auth starts by registering an application. This is done by calling `firebase.initializeApp(config)`. Remember the credentials we asked you to save in the last chapter? They are required to initialize the application.

It is possible to interact with multiple Firebase projects in the same app, but for our use case, we just need one project per environment.

Once an app is initialized, we can call [various login functions](https://firebase.google.com/docs/auth/web/firebaseui) with the arguments they expect. For example, to login with email and password, we need to call `firebase.auth().signInWithEmailAndPassword` method. The authentication function is asynchronous and takes a callback to monitor the state of the user.

We'll wrap this in Reframe and everything will make sense when the dots are connected. It's easier to understand with code, so let's build this thing.

## Dispatch login event with email and password
The first piece of the domino is to dispatch a login event from the `app.pages.login/page` component. We built this component in the previous chapter but omitted the `onClick` handler of the submit button.

First, we need to require `re-frame.core` in this namespace:

{lang=clojure,crop-start-line=5,crop-end-line=5}
<<[tinycanva/src/app/pages/login.cljs](./protected/source_code/tinycanva/src/app/pages/login.cljs)

Next, we update the `:onClick` handler to `dispatch` the `:app.domain.firebase/login-with-firebase` event. We have not created a handler for this event yet:

{lang=clojure,crop-start-line=29,crop-end-line=32}
<<[tinycanva/src/app/pages/login.cljs](./protected/source_code/tinycanva/src/app/pages/login.cljs)

If you find the event name to be verbose, you can use a shorter event like `:fb-login-with-email`. We use a namespaced keyword because we chose to segregate Reframe components by domain. Having a namespaced keyword immediately lets you know where the handler of this event will be defined. But again, this is a personal choice. We are building this app as if it were to grow to 100s of screens.

To test the `dispatch` function, you can click the Submit button manually or use inline eval with dummy values:

```clojure
(rf/dispatch [:app.domain.firebase/login-with-email {}]) ;; => nil
```

You'll see a warning message in your console saying that the dispatched event id is not registered.

## Create the event handler
We dispatched an event, now we need to capture and process it using a pure function. For this, we need the `reframe.core/reg-event-fx` function.

Before creating event handlers, it's a good idea to consider the plan of action:
- We need to call the login function with email and password in the form
- We might need a loading indicator
- If the login fails, we need to show an error message
- If the login succeeds, we need to save the user in the cache and redirect somewhere

The last two points occur after the login function (ie. side effect) is called, so it's out of the scope of the handler. With this in mind, lets populate the namespace:

{lang=clojure,crop-start-line=1,crop-end-line=4}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)


And register the `login-with-email` handler in `app.domain.firebase`:

{lang=clojure,crop-start-line=6,crop-end-line=12}
<<[tinycanva/src/app/domain/firebase.cljs](./protected/source_code/tinycanva/src/app/domain/firebase.cljs)

We created an event handler with id `::login-with-email`. The double-colon `::` is a shorthand to add the current namespace as a prefix to the keyword.

We then assigned a function to this id. Reframe will call this function with the co-effects map and the dispatched event. The `form-state` is a map of email and password since we dispatched the event with a `deref`ed ratom.

Next, we return a map of effects to be applied:

- `:db` with the new value where we set the value of `::login-loading?` in global `app-db` to true. This will help us create a visual indication and
- `:firebase/email-auth` with the credentials entered in the form. Unlike `:db`, this is a custom effect that we'll write soon.

## Importance of pure event handlers
It's important for these handlers to be pure because that lets us snapshot the state of the app and go back and forward in time. It also makes testing easier.

Suppose this handler was impure. For example, we dispatched another event to maintain the number of times a user tried to login:
```clojure
(rf/reg-event-fx
 ::login-with-email
 (fn [cofx [_ form-state]]
    ;; side-effect
   (rf/dispatch [:log-login-attempt (js/Date)])
   {:db (assoc (:db cofx)
               ::login-loading? true)
    :firebase/email-auth form-state}))
```

The code above will work but will cause issues in the Reframe mental model.

Now, if these functions are pure and applied in order, we can maintain a list of these incremental states and go back and forward in time. We can also write tests without  `:log-login-attempt`.

With an impure handler like the example above, the effectful call to `dispatch` will be queued in the event queue and executed asynchronously. It might resolve before or after the current event, leading to an odd state, breaking time travel abilities, and becoming hard to test.

The Reframe authors also suggest that this leads to an increased cognitive load for future maintainers since the event is no longer local.

So in short, you can get away with it, but you should avoid it and stay pure. The right way to handle impure side-effects is to use effect handlers.

## Effect handler
We have handled the event and returned an effects map. The effects will add a loading flag in the `app-db` and somehow log our user into Firebase.

Due to the high concept density of this chapter, we have broken into parts. We'll define the custom effect handler in the next part.




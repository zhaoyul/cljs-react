---
title: Reagent
slug: tc-reagent
description: Reagent is a minimalist Clojure wrapper for React. It exposes all React APIs including hooks and is one of the most popular Clojure projects. This chapter is a theoretical introduction to Reagent. We'll learn about components, third-party intergrations and locat state.
privateVideoUrl: https://fullstack.wistia.com/medias/z8nlcp66i9
---

# Reagent

Reagent is a minimalist Clojure wrapper for React. It exposes all React APIs including hooks and is one of the most popular Clojure projects. This chapter is a theoretical introduction to Reagent. The code in this chapter doesn't apply directly to the Tinycanva project.

## Functional Components
Reagent uses Hiccup to define React components. Components are vectors where the first element is the element to render, the second  is the props map and the third  is the child tree:

```clojure
(defn heading [text]
	[:h1 {:class "large"} text])
```

Unlike React, we can use `class` instead of `className`. Also these are just plain vectors, so everything we have learnt about data manipulation will work:

{lang=clojure,crop-start-line=6,crop-end-line=13}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)
The examples above are vanilla Clojure functions. Reagent converts these function into React Components and renders them. To test the `heading` function out, we can move it's definition to `app.core` namespace and then use `[heading "hi" :h1]` instead of `[hello]` as an argument to `r/render` function. As soon as you save the file, the watcher will hot reload the code in the browser.

You can also use `reagent.core/create-element` function instead of Hiccup:
```clojure
(defn heading [text]
	(r/create-element
		"div"
		(clj->js {:className "heading"})
		text))
```
This might be helpful in advanced use cases, like animations.

## Component composition
Native DOM elements are rendered using keywords (like `:div` or `:span`). Custom components can be rendered using symbols. If we want to use the `heading` component defined above, we can use `heading` as the first element of the vector:

{lang=clojure,crop-start-line=15,crop-end-line=18}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)

There are two kinds of reaction people have after reading the above code:
- You either go, yeah that's simple, Hiccup is easy or
- You go, "Wait! what? How? Why square brackets for custom components?"

Since `heading` is a plain Clojure function, we should invoke it using parenthesis: `(hello name :h1)`, but we used square brackets instead. You can use round brackets too, but it's advisable to stick to vectors until you understand what's happening under the hood.

Reagent transforms Hiccup forms into React components using `create-react-class`. 

If parenthesis is used instead of square brackets, the `heading` function will be called and its output will be placed in the `card` component, ie. the `heading` component will lose its identity as a React component. It will also lose the properties of a React component, like the ability to be memoized or the ability to have a local state.

If square brackets are used, the `heading` function will not be called. Instead, Reagent will package it into a React component and place it inside `card`, preserving the properties of a React component.

If you'd like to learn more, we suggest reading the [reasoning by the authors of Reagent](https://cljdoc.org/d/reagent/reagent/1.0.0-alpha2/doc/tutorials/using-square-brackets-instead-of-parentheses-) after you are done with this chapter. Until then, stick to square brackets.

## Third-party components
React's eco-system is exceptional. There are tons of high-quality open-source libraries like Ant Design and Material Design. With Reagent and Shadow, you can use these components easily. Reagent's `adapt-react-class` function converts any React component into a Reagent component:
```clojure
(ns demo
	(:require ["@blueprintjs/core" :refer (Input)]))

(defn name-input []
	[(r/adapt-react-class Input) {:value val :onChange (fn [])}])
```
The convenience symbol `:>` can be used as an alternative to `adapt-react-class`. The above example can be written as:
```clojure
(defn name-input []
	[:> Input {:value val :onChange (fn [])}])
```
There also exists a special literal `:<>` for React fragments. The following two forms will produce the same result:
```clojure
[:> React.Fragment
	[:div.heading "title"]
	[:div.body#main "body"]]

[:<>
	[:div.heading "title"]
	[:div.body#main "body"]]
```

`.heading` and `#main` are shorthand versions of `{:class "heading"}` and `{:id "main"}` respectively.

In the example above, we `:require` the `Input` component from `@blueprintjs/core`. [Blueprint](https://blueprintjs.com/) is an open-source UI library maintained by [Palantir Technologies](https://www.palantir.com/). This example will not work as BlueprintJS is not installed yet.

## Local state using reactive atoms
Reactive atoms (also known as ratoms) are special atoms that tie into component's lifecycle:

{lang=clojure,crop-start-line=22,crop-end-line=26}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)

This component can be rendered using `[counter (r/atom 0)]` as the argument to `r/render`.

Each time the count changes, the component will be re-rendered. `create-cljs-app` generates a component similar to our counter. You can check its source code in ap`app.hello` namespace.

`r/atom` behaves just like a usual atom. Reagent's reactive atoms can be shared across components:

{lang=clojure,crop-start-line=30,crop-end-line=42}
<<[tinycanva/src/app/core.cljs](./protected/source_code/tinycanva/src/app/core.cljs)
If you are not able to follow along the atom usage, we suggest re-reading the chapter on [atoms](/courses/tinycanva/stdlib-atoms).

The `get` function used for the `:value` prop gets the value for a key in a map. If no value is found, the default value (third argument) is returned. In our case, the default value is an empty string.

## Hooks
Reagent components are class-based and there is no easy way to use Hooks in class-based components. But we can expose Reagent components as functional React components using `as-element` method. This lets us consume Hooks:

```clojure
(ns app.home
	(:require ["react" :as react]
	          [reagent.core :as r]))

(defn view []
	(let [[val _setVal] (react/useState 0)]
		(r/as-element [:div val])))
```
Here, we implemented React's `useState` hook and returned the Hiccup form `as-element`.

Now the `view` function is a React component and needs `:>` or `adapt-react-class` to work:
```clojure
[:> view] ;; correct
[view] ;; in-correct
```

## Reactifying Reagent Components
`adapt-react-class` converts a React component into a Reagent component. `reactify-component` takes a Reagent component and converts it to a React component. 

This is good for interop, or writing libraries. You can create parts of your UI layer in ClojureScript and expose it to a JS app as an NPM module.

You need to write your function differently though. React functional components accept two arguments: `props` and `children`. React calls your functions and passes the correct props.

Reagent functional components on the other hand accept any number of arguments. A reactified Reagent component should be designed to accept only `props` and `children` as arguments:

```clojure
(defn heading [props]
	;; props are a cljs map and can be destructured like {:keys [text]}
	[:div (:text props)])

(def react-heading (r/reactify-component heading))
(defn card [title]
	[:> react-heading (clj->js {:text title})])
```

The `clj->js` conversion is needed because `react-heading` exists in the JS domain. Clojure Maps don't work in the JS domain. 

Strings, integers, booleans, and other simple data types do. Compound data types like maps, lists, vectors, etc. need implicit conversion. The `clj->js` function can be replaced with the `#js` literal form:

```clojure
(defn card [title]
	[:> react-heading #js{:text title}]
```

Since the `react-heading` component exists in the JS domain, ratoms won't work.

## Conclusion
In this chapter, we walked through Reagent basics and learned about various ways of creating components. We saw how to consume third party components and expose code written in ClojureScript for JavaScript consumption. We also learned about Reagent's reactive atoms. Although we covered common functionality, many Reagent features remain untouched. We will uncover the API more as we build our application.


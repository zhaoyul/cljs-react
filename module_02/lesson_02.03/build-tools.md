---
title: Build tools and package management
slug: language-semantics-build-tools-and-package-management
description: Since Clojure is hosted, it can tap into eco-systems of other languages. This has led to multiple build tools for different eco-systems. Choosing the right build tool might get tough for a beginner as the pros and cons might not be known. In this module, we'll learn about the general state of build tools in Clojure and choose the tool for our project.
privateVideoUrl: https://fullstack.wistia.com/medias/kj4v6egpto
---

# Build tools and package management
Being hosted allows you to tap into existing eco-systems. As a Clojure developer, you have the full power of Java, JavaScript, .NET packages.
But a good build tool is essential to wield this power.

There are multiple package management solutions for Clojure.

## Leiningen
[Lein](https://leiningen.org/) is one of the oldest and most mature build tool for Clojure. It's more than a build tool in the sense that it allows us to define dependencies and project-specific tasks. Think of Lein as NPM or Yarn of the Clojure ecosystem.

Lein lets you:
- load JVM dependencies from the Maven repository
- load JavaScript dependencies using a custom CLJSJS repository
- helps package Clojure into JVM or JS apps
- run a Clojure REPL
- has support for Clojure CLR

There also exists support for generating projects using [templates](https://clj-templates.com/). The only downside to Lein is that it runs a new JVM instance for each app. This could become resource-intensive if your product consists of multiple Clojure apps.


## Boot
[Boot](https://github.com/boot-clj/boot) is similar to scope in Lein, with one key difference. Boot only runs one instance of the JVM. This leads to better resource utilization.

Boot's downside is a verbose configuration which is not very helpful for smaller projects.

## Deps CLI
Deps CLI is the official build tool meant as an alternative to Lein and Boot. Both Boot and Lein are batteries included build tools whereas Deps CLI is more DIY. Deps CLI allows you to control the production of your .jar files, load dependencies from Maven, and define various targets of your app (test, prod, staging, etc).

It's more versatile but needs more effort on your end.

All the tools above are focused on the JVM ecosystem, however, they can be tweaked to work with JavaScript.
If you are working with a Clojure application on the JVM, you cannot go wrong by picking either of the 3 tools. Lein and Boot are feature-rich and Deps CLI is minimal but more configurable. Our suggestion is to use Deps CLI.

The `clj` command that we have been using so far is a part of Deps CLI.

## Shadow CLJS
Shadow is a relatively new build tool with a focus on the JavaScript ecosystem. It's novel in the sense that it sits next to an npm project and lets you include packages from npm directly.

Just like other build tools, it can:
- bundle ClojureScript to JavaScript
- run a REPL
- load packages from NPM

But unlike other tools, it can also help with code splitting, dynamic module imports, and hot-reloading. Shadow CLJS is aimed at ClojureScript development.

If you are going to develop ClojureScript applications, we highly recommend using Shadow CLJS. This course will use Shadow CLJS, however, the fundamental principles remain the same and can be applied to all tools in this list.

## Figwheel
While not exactly a build tool, Figwheel is an honorable mention. Figwheel is a utility kit for Leiningen. It helps make ClojureScript development easier by bringing features like hot-reloading JavaScript to Lein based projects.

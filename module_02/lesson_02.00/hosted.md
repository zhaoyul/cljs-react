---
title: Hosted Nature
slug: language-semantics-hosted-nature
description: Clojure is neither compiled nor has it's own VM. Instead, it runs on VMs of other languages. In this lesson, we'll learn about official and unofficial ports and support status.
privateVideoUrl: https://fullstack.wistia.com/medias/z2pbrtnw07
isPublicLesson: true
---

# Hosted Nature of Clojure

Languages like C, C++ compile down to object code, whereas languages like Java and .NET run on a virtual machine. Languages like TypeScript that transpile to a different language.

Clojure is a language that is designed to be hosted, ie. to run on virtual machines of other languages. This allows tapping into existing eco-systems.


ClojureScript is slightly different from the Clojure and ClojureCLR, int the sense that it transpiles to JavaScript, whereas the other two produce bytecode. Although the JavaScript code produced by ClojureScript is human-readable, it's not a common practice to modify this code manually.

## Official and community ports
Clojure targeting the JVM, JavaScript, and CLR are supported officially by the creators of Clojure. The names and targets of these ports are:
- Clojure - targets JVM
- ClojureCLR - targets .NET
- ClojureScript - targets JavaScript

Clojure produces .jar files and ClojureCLR produces .dll files.

There are other community ports of Clojure for other runtimes. Some notable dialects are:

- Babashka - targets Bash
- Joker - targets Go
- Ferret - targets ISO C++
- Clojurerl - targets Erlang VM

A more extensive list of dialects is available at [chr15m/awesome-clojure-likes](https://github.com/chr15m/awesome-clojure-likes)

The unofficial ports usually tend to implement only a subset of the language. Unless stated otherwise, any reference to "Clojure ports" only includes official ports.

## Differences in Clojure dialects
Clojure does a remarkable job of maintaining a uniform core across ports. But some differences show up due to the nature of the host.

For example, ClojureScript (JS port) is single-threaded because JavaScript is single-threaded. Apart from language level differences, Clojure dialects are mostly consistent across all runtimes.

## Transparent interop
Any JVM, Node, or CLR package can be used transparently by Clojure. Clojure data types are just the host's data types, ie. in Clojure a string is a `java.lang.String` whereas in ClojureScript a string is a JavaScript `String`.

## Reader conditionals (or Clojure Common or .cljc)
Clojure Common is a concept that lets you target multiple Clojure runtimes with the same code. This concept is Clojure's realization of the "Write once, run everywhere idea". This topic is vast and out of the scope of this course.

You can read more about Reader conditionals at the [official docs page](https://clojure.org/guides/reader_conditionals). We are not going to target multiple runtimes in this course.

## Conclusion
We learned how Clojure runs on different hosts and the official and the unofficial ports available for use. We also touched on the fact that Clojure data structures are just the host's data structures. We'll soon get our hands dirty!

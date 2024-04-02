---
title: Project structure
slug: language-semantics-project-structure
description: Enough talking, let's create a new repository and set up a project from scratch, using Shadow CLJS.
privateVideoUrl: https://fullstack.wistia.com/medias/vmsz2xezmx
---

# Project structure

In the last few lessons, we learned about the language and build tools. We are now ready to create our first project.

You might find typing out S-Expressions odd at first. But don't worry, we'll soon learn how to use Paredit, a tool to help manage S-Expressions.

## Shadow CLJS Project
All projects start with a configuration file. The name and syntax of the file are different for different build tools. The ideas however remain the same. If you understand one build tool, you can easily use all others.

For Shadow CLJS (or Shadow), this file is called `shadow-cljs.edn`. Edn stands for extensible data notation. It's a format similar to JSON.

Shadow projects are a mix of NPM and CLJS projects, so you'll also need a `package.json` file. This allows us to install NPM packages directly.

There are multiple tools to scaffold your projects for you, but to gain insight into how things work, we'll set up the Shadow project manually. Getting used to Shadow configuration will help us later when we start using advanced features like code-splitting. After we walk through setting up projects manually, we'll learn about the tools that can automate this process.

### Create an empty directory

This directory will hold our project. In our case, the name is going to be `First Project`. Let's create the directory:

```bash
mkdir first-project
cd first-project
```

The name of the topmost directory is conventionally `kebab-cased`. There is no strict rule, however, it is a strong convention. Most Clojure libraries hosted on [Clojars](https://clojars.org) follow this convention.
### Create the shadow-cljs.edn file
```bash
touch shadow-cljs.edn
```

Open this file in the editor of your choice. This is what your configuration should look like:

{lang=clojure}
<<[first-project/shadow-cljs.edn](./protected/source_code/first-project/shadow-cljs.edn)

Don't worry if this doesn't make sense. We'll walk over each key-value pair in detail. You should however notice the use of keywords, maps, and vectors.

### Source paths
Source paths specify the directories your source code lives in. In our example, we have added two directories: `src` and `resources`.

The `src` folder is for ClojureScript code whereas the `resources` folder holds supporting assets, like configuration files, images, stylesheets, etc. These names could be anything, however, having an `src` folder is a very strong convention.

The directory named `resources` is used by Java's IO module, and by extension, it's also used by Clojure's IO module. It's highly recommended to use conventional names.

Some large projects might have code in multiple dialects of Clojure. One popular combination is ClojureScript on the frontend and Clojure on the backend. In cases where multiple dialects exist simultaneously, the `src` path could be set to `src/cljs` and `src/clj`. Again this is just a convention. If you follow the convention, your Clojure code goes to `src/clj` folder and your ClojureScript code goes to `src/cljs` folder.

However, you can break the convention if you wish to. It's legal to define the source path as `src/clj` and put ClojureScript code inside that folder. The build tool will not complain as long as the path exists.

Since these folders don't exist yet, let's create them:
```bash
# inside the first-project directory
mkdir src
mkdir resources
```

Once done, the `first-project` directory should look as follows:
```bash
.
├── resources
├── shadow-cljs.edn
└── src
```

### Project dependencies
This key-value pair is used to define the JVM dependencies of the project.

You might be wondering why Shadow, a build tool for ClojureScript (Clojure targeting JavaScript) has support for JVM dependencies? It's because Clojure has support for macros which can be written in JVM Clojure and used inside ClojureScript. Some libraries that need both Clojure and ClojureScript are distributed via Maven (or Clojars).

Shadow also has support for NPM dependencies but those go to the standard `package.json` file which we will create in a while. This `:dependencies` key in the case of Shadow refers to JVM dependencies hosted on Maven.

Since we don't need any external library for our first project, the value is an empty vector. In case we had some dependencies, the vector would look like:
```clojure
;; Don't add this to your Shadow config. For demo purposes only!

:dependencies [[lilactown/helix "0.0.9"]
               [cljs-http "0.1.46"]]
```

Each element of the `dependencies` vector is a two-element vector, where the first element is the name of the package and the second element is the version number.

### NREPL
NREPL stands for Network REPL. REPL stands for Read, Eval, Print Loop. The term REPL is often used interchangeably with the term "Shell". In some sense they are similar, but in terms of implementations, the Python Shell, for example, is very different from a Clojure REPL.

You have seen a REPL already. When you type `clj` in your terminal, you start the default Clojure REPL. This REPL is shipped with Deps CLI.

Shadow too ships with a REPL (so does every other build tool). Shadow's REPL, by default, runs as a service and can be connected to via an interface. In most cases, the text editor connects to this REPL. This connection offers multiple IDE-like features.

This aspect of Clojure applies only to Lisps and might not make sense immediately. NREPL is one of the tools that makes Clojure development rapid. It's so important that we have dedicated a full chapter to it.

For now, we just need to know that the example configuration will start the NREPL on port 9000. Anybody who wishes to connect to this project's NREPL can do so on the address `nrepl://localhost:9000`.

Do you remember installing the NREPL packages for your editor (Calva, Cursive, Cider)? These are the clients that will connect to this NREPL. 

### Builds
Shadow can be used to target multiple JavaScript outputs. You can produce code suitable to be shipped as an NPM module, code suitable to be used in the browser, or something else. The `:builds` option helps you configure just that.

In our example, we as Shadow to produce code `:target`ing the Node runtime (`:node-script`) and output it to the `build/node-script/core.js` directory. Shadow will automatically create that directory if it doesn't exist.

The `:node-script` target is a good option for tasks that need to run from the command line.

The `:main` keyword takes a namespace-qualified function name. Ns qualified is a fancy term used to refer to a function defined in a specific namespace. In our case, we want the function `main` defined in the namespace `first-project.core` to be called when the script is run.

Given our build configuration, if we call the output script from n Node as follows:

```bash
node build/node-script/core.js <command line args>
```

The function defined as `:main` will be called with the supplied arguments, ie, `(first-project.core/main <command line arguments>)`

Shadow's build mechanism is versatile. Our configuration is just the tip of the ice-berg. We will explore this more as our projects grow in complexity.

We configured Shadow's `:main` but haven't created that namespace yet. First, we need to create a file to hold that namespace:
```bash
mkdir -p src/first_project
touch src/first_project/core.cljs
```

Once we have the file in place, we can define the main function:

{lang=clojure}
<<[first-project/src/first_project/core.cljs](./protected/source_code/first-project/src/first_project/core.cljs)

We have seen `defn` before. But the `ns` function new. It allows you to define the namespace of a file.

Namespaces let you refer to and import functionality. In our config, we referred to the `main` function.

If we had another namespace, say `first-project.utils`, we can use functions defined there in `first-project.core` by using the `:require` argument:

```clojure
(ns first-project.core
  (:require [first-project.utils :as u]))
```

With the require statement above, any function `x` defined in `first-project.utils` namespace, will be available as `u/x` in `first-project.core` namespace.

## Namespace naming rules
Namespaces are closely connected to source paths. Namespaces also need us to follow some naming rules. In our example, where we refer to `first-project.core/main`, we are referring to:
- A directory named `first_project` that exists on the source path (ie at `src/first_project`)
- A file named `core.cljs` that exists inside `first_project` directory and
- A function named `main` defined in `core.cljs` file

The namespace definition using the `ns` function uses `kebab-case` but the respective file or folder use `snake_case`.

Here are some more examples of namespace definitions and their respective paths on disk:

| ns definition | path on disk |
|---|---|
|(ns common-lib.util) | src/common_lib/util.cljs |
|(ns first-project.validation-helper) | src/first_project/validation_helper.cljs|
|(ns first-project.shared.ui) | src/first_project/shared/ui.cljs|

The naming rules for namespaces are common for all build tools.

Since namespaces expect a file to exist on a particular path, can you think of another location on disk that is a valid path for `(ns first-project.core)`?

If you thought `resources/first_project/core.cljs`, you are right. The build tools just need the code to be available on the source path. Since `resources` is a source path, Shadow won't complain if you place the file there. However, this will break the convention of using the `src` directory for source code and confuse everyone on your team, so don't do it.

## NPM dependencies
Shadow allows you to import NPM modules directly. Shadow itself is distributed as an NPM module, however, it requires JDK on the classpath to operate.

:::note
If you followed the installation process of this course, you will have JDK on classpath already.
:::

### Initialize NPM project
We are going to use `yarn` but you can use `npm` if you prefer. In the `first-project` directory, initialize a new project:

```bash
yarn init
# or npm init
```

You'd be asked for a project name, license information, and some other fields. It's safe to keep hitting enter. This project is just for us to learn how a ClojureScript project is setup. Once done your directory structure should be:

```bash
.
├── package.json
├── resources
├── shadow-cljs.edn
└── src
```

And depending on how you initialized your NPM project, the `package.json` file should look something similar to:
```js
{
  "name": "first-project",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true
}

```


### Install Shadow
We have created the Shadow config but have not installed it yet. Since it's an NPM package, let's install it via `yarn`. Shadow should be installed as a `dev` dependency since it's not needed at runtime.

```bash
yarn add shadow-cljs --dev
# or npm install shadow-cljs --dev
```

At the time of writing, the latest stable version is `2.10.15`. To check the installation, you can pull up check Shadow's help menu:

```bash
yarn shadow-cljs --help
# or npx shadow-cljs --help
```

You should be presented with a list of API methods.

## Conclusion
In this lesson, we learned how to set up a Shadow project from scratch. We walked through some Shadow configuration parameters and understood the rules of namespacing.

We also set up an NPM project and installed Shadow.


## Recommended watch

- [Simple made easy](https://twitter.com/stuarthalloway) by [Rich Hickey](https://twitter.com/richhickey)

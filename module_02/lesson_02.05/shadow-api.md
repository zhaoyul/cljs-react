---
title: Shadow CLJS API
slug: language-semantics-shadow-cljs-api
description: Our first project is now in place. In this chapter, we'll learn how to build and run it. We'll also explore some other build targets and explore Shadow with Reagent, a ClojureScript wrapper to React.
privateVideoUrl: https://fullstack.wistia.com/medias/ildi43fpgg
---
# Shadow CLJS API
Shadow offers many helpers to compile and develop your app, but we only need to know about three methods right now:
- Compile
- Watch and
- Release

*Compile* and *watch* are similar in scope. Both of them convert the ClojureScript code to JavaScript code based on the build target. The only difference is that *watch* re-compiles each time a file on the source path changes.

The JavaScript code produced by both *compile* and *watch* is inspect-able, ie. it's not uglified or minified.

The *release* method bundles the code for production. It applies advanced optimizations, minification, and uglification.

ClojureScript relies on Google's Closure Library (GCP) to transform CLJS to JavaScript. GCP is Google's in-house alternative for Webpack and was open-sourced over 10 years ago. All major Google Apps including GMail rely on GCP.

:::note
GCP has got nothing to do with Clojure. The term "Closure" in GCP might be a little confusing. It's not a typo. GCP has a Closure with an "s".
:::

## Start `watch`ing
We are ready to start our first build. We have set up our configuration, installed Shadow, and created a namespace. Our `main` function prints "Hello World".

To start Shadow `watch`, we need to issue the `watch` command with a build target:

```bash
yarn shadow-cljs watch :script
# or npx shadow-cljs watch :script
```

The `:script` is the name of our build target, defined in Shadow config.

:::note
When you run the `watch` command for the first time, Shadow will install the required dependencies.

Your output will be similar to:
```
$ yarn shadow-cljs watch :script
yarn run v1.21.1
shadow-cljs - updating dependencies
Retrieving thheller/shadow-cljs/2.10.15/shadow-cljs-2.10.15.pom from https://repo.clojars.org/
Retrieving cider/piggieback/0.5.0/piggieback-0.5.0.pom from https://repo.clojars.org/

...

Retrieving thheller/shadow-cljsjs/0.0.21/shadow-cljsjs-0.0.21.jar from https://repo.clojars.org/
shadow-cljs - dependencies updated
```
:::


If everything goes well, you should see some log statements saying that the build completed and the NREPL server is running:

```
shadow-cljs - server version: 2.10.15 running at http://localhost:9630
shadow-cljs - nREPL server started on port 9000
shadow-cljs - watching build :script
[:script] Configuring build.
[:script] Compiling ...
[:script] Build completed. (76 files, 75 compiled, 0 warnings, 18.76s)
```

Shadow compile 76 files, started the nREPL on port 9000 as defined in the config, and also started a server on port 9630. We have learned about the nREPL already. This other server offers a web-based dashboard that gives an overview of all builds and runtimes. It also provides an interface to Shadow Inspect, which is a smart logging system, similar to Chrome Dev. Tools. 

## Running the script
At this point, your ClojureScript code is compiled to a Node script in `build/node-script/core.js`. You can inspect this code as it's JavaScript, but it might not make much sense. The `:node-script` target bundles everything into a single file which allows for easy distribution at the cost of readability.

However, we can simply run the compiled Node script:

```bash
# in the first-project directory
node build/node-script/core.js
"Hello World"
shadow-cljs - #3 ready!
```

You might notice that the process doesn't terminate. This is because Shadow in `watch` mode, allows for some hooks that can execute your code in the Node environment each time you make a change. For now, you can simply press `Ctrl+C` or `Cmd+C` to exit.

Try changing the message in `core.cljs` to "Hello World 2". You should notice that as soon as you save that file, Shadow rebuilds the script.


## Making script production-ready
So far the scripts we built with `watch` were for the development environment.

The `release` command builds the script in production mode. It uglifies, minifies, and applies optimizations to JavaScript output. To build our `:script` target run the following command:

```bash
yarn shadow-cljs release :script
```

If you try and run the script in Node again, the process will terminate, since the script was packaged for production use:

```bash
node build/node-script/core.js
"Hello World 2"
```

## Setting up a release and watch shorthands
Typing the entire build command can sometimes feel tedious. It's my practice to add these commands to NPM scripts so they become easier to use.

We can add the following short hands to `package.json`'s `scripts` configuration:

{lang=javascript,crop-start-line=10,crop-end-line=13}
<<[first-project/package.json](./protected/source_code/first-project/package.json)

Now instead of `yarn shadow-cljs watch :script` we can use `yarn w:script`. Feel free to experiment with aliases that suit you.

## Automate Scaffolding
Setting up a new ClojureScript project with Shadow is simple but not easy. You need to create a configuration, a directory structure, and set up some build targets.

[create-cljs-app](https://github.com/filipesilva/create-cljs-app) can help ease this process. This tool is similar in scope to `create-react-app`.

To create a new project with the tool you can use it as:

```bash
yarn create cljs-app second-project
# or npx create-cljs-app second-project
```

This will create a Shadow config, an NPM config, install dependencies, and set up a directory structure for your code and tests. It will also install a linter and setup NPM script aliases for running, packaging, and testing your application.

In the default configuration, the project created by `create-cljs-app` targets the `:browser` and includes Reagent, a CLJS wrapper for React.

Our examples so far used the `:node-script` target. The other notable difference is the usage of a `public` directory instead of `resources`.

This is a good way to get started once you understand the ecosystem and want bootstrap projects quickly.


## Targeting the browser

The app generated using `create-cljs-app` is a React application that runs in the browser. It uses [Reagent](https://reagent-project.github.io/) under the hood and sets up a basic SPA. If you run `yarn start` in the newly minted `second-project` directory, Shadow will start a dev server for you on port 3000 and an nREPL on port 3333 (assuming you didn't change any config).

If you check `http://localhost:3000`, you'd see a simple React component. The following configuration is responsible for compiling the app to run in the browser:

```clojure
:app {:asset-path "/js"
      :modules {:main :init-fn app.core/main}}
      :output-dir "public/js"
      :target :browser}
```

Feel free to poke around the source and check the `app.core/main` function. We'll walk through the configuration next, but learn about the code in later sections.

### Browser Target
The keyword `:browser` requests Shadow to produce JavaScript code suitable for running in a browser. Shadow relies on Google's Closure Compiler which can produce `ES3`, `ES5`, `ES6`, and a few other versions of browser-ready JavaScript.

### Output Directory
This is the directory where all compiled files reside. Unlike the `:node-script` target where we specify an output file, the `:browser` target needs us to specify a directory because more than one file is created.

### Asset path
This key-value pair defines the location of compiled resources concerning the webserver.

For example, your web server is configured to serve a static website on https://example.com from `/root/example-com/public` directory. And you compiled your code to `public/js` directory, then your asset path relative to the webserver is `/js`, ie. if a file called `public/index.html` needs to include a compiled script, then it can do so at `http://example.com/js/main.js` (or simply `/js/main.js`).


### Modules
Modules configuration is a map of outputs that need to be produced. This helps with code-splitting.

In the example above, we have configured Shadow to generate a single module `:main`. This will lead to the generation of a file called `main.js` in the `:output-dir`.

The `:init-fn` option specifies a namespace-qualified function that should be run as soon as the module is loaded. For example, in a React app, we might want to call `render` as soon as the app loads.

As the size of your app grows, you can split your output into multiple modules. Modules can also depend on each other. Shadow will compute the dependency graph and will try to push most code to the edges.

It's a common practice to have one `:shared` module to load base dependencies, a `:main` module to initialize the app, and multiple domain-specific modules, like `:login`, `:dashboard` etc.

The module configuration will become easier to grasp as we use it. For now, just consider it as an option that puts your code into different baskets.

## Including main in index.html
Browser-based JavaScript needs some HTML. It might not be evident from the configuration, but if you check the `public` folder generated by `create-cljs-app`, you'd find an `index.html` file.

This file includes the `main.js` file which was generated as a result of the `:main` module configuration.

## Dev Server
Did you notice an HTTP server running on port 3000, serving your compiled app? This was courtesy of the `:dev-http` Shadow config.

`:dev-http` takes a port and root directory and serves the content of that directory with `index.html` as the entry point. This ties the entire process in a loop:

- You start `watch`ing :app target using `yarn start`
- Shadow compiles CLJS Code to JavaScript and output to `public/js` directory
- Dev server serves this directory on port 3000
- You open your browser to check the output
- When you make changes, Shadow recompiles your application
- It also hot reloads!


## Conclusion
In this module, we ran our first application and understood Shadow's fundamental APIs. We learned about automating the bootstrap process using the `create-shadow-cljs` app. We studied Shadow's browser target and saw an auto-generated SPA. We also established a dev workflow and understood how things tie in together.


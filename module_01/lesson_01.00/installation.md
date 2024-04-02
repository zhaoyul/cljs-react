---
title: Installation
slug: getting-started-installation
description: In this chapter, we'll setup our system to run Clojure. We'll install all the required dependencies and run the "Hello World" program.
isPublicLesson: true
---

## Code Downloads

I> 👩‍💻 Download the complete set of code for this course [here](https://api.newline.co/assets/protected/courses/tinycanva-clojure-for-react-developers/downloads/course-full.zip)
I>
I> 🎳 Join us over at the `#clojure` channel in our Discord server - [here](https://newline.co/discord).

# Installation

Clojure is designed to be hosted. This means that it runs on top of other languages. We'll learn about this property later in this course. For now, we just need to know that JVM and NodeJS are required to run Clojure.

## Checking if JVM and Node are installed already
Before getting started, we suggest that you check if your system has Node and Java installed already.

### JVM

In a terminal, execute the command `javac -version`.

If you get a version number like `javac 1.8.0_202`, the JVM is installed and you can safely skip JVM installation process.
Any Java version above 1.8 or higher is recommended (Java 1.8 is sometimes also referred to as Java 8. The next version is Java 11).

### NodeJS

The command `node -v` will show the currently installed Node version. If it results to a number like `v12.16.1`, you can skip the Node installation process.
The latest stable Node version is recommended.

## Installing JVM/ JDK
You can either work with [Oracle's JDK](https://java.com/en/download/), [Adopt Open JDK](https://adoptopenjdk.net) or [Open JDK](https://openjdk.java.net/install/). All three JDKs are identical in terms of development. The only difference is that Open JDK and Adopt have a more permissible license. Oracle JDK requires a license for commercial use.

If you do not have JDK installed already, we suggest Adopt Open JDK. Detailed install instructions can be found at the following URLs:
- [Install on MacOS](https://mkyong.com/java/how-to-install-java-on-mac-osx/)
- [Install on Windows](https://adoptopenjdk.net/installation.html#windows-msi)
- [Install on RPM, Debian and Ubuntu](https://adoptopenjdk.net/installation.html#linux-pkg)

## Installing NodeJS
If you are on Windows or Mac, you can use the [official installer](https://nodejs.org/en/download/). Just download the correct package, based on your OS and the graphical interface will guide you through it.

On Linux, Node is distributed for all major package managers (yum, apt etc) as `nodejs`. You can find the install command depending on your distro [here](https://nodejs.org/en/download/package-manager/).

## Installing Clojure

### On MacOS
Clojure is available as a recipe on [Homebrew](https://brew.sh).

```bash
brew tap clojure/tools
brew install clojure/tools/clojure
```

This recipe installs Clojure CLI tools and can be used to run an interactive REPL.

### On Windows

Clojure on Windows require PowerShell 5. You can find the detailed install instructions [here](https://github.com/clojure/tools.deps.alpha/wiki/clj-on-Windows).

### On Linux
Clojure has an [official bash script](https://clojure.org/guides/getting_started#_installation_on_linux) for handling installation on Linux machines. It expects that you already have `bash`, `curl`, `rlwrap` and `Java` installed. You can run the script as follows:

```bash
curl -O https://download.clojure.org/install/linux-install-1.10.1.727.sh
chmod +x linux-install-1.10.1.727.sh
sudo ./linux-install-1.10.1.727.sh
```

If you'd like to change the default install location, refer to the [docs](https://clojure.org/guides/getting_started#_installation_on_linux).

## Test Clojure installation
If everything went fine, executing the command `clj` in the terminal of your choice should start an interactive Clojure session:

```bash
$ clj
Clojure 1.10.1
user=>
```

Clojure might download some dependencies the first time you run this command.

This is a good time to run the customary Hello World! program.

```
user=> (println "Hello World!")
Hello World!
nil
user=>
```

## Conclusion

In this chapter, we installed Clojure and its required dependencies. In the next chapter we'll learn about LISP code and editor integration.


---
title: Conclusion
slug: adv-conclusion
description: Going forward - information about online Clojure communities, server-side Clojure concepts, companies and job boards.:w
---

[comment]: <GM: stray :w in description - is that intentional?>
# Conclusion
By building a frontend app, we've only scratched the surface of the Clojure ecosystem. We hope that this course helped you get started with Clojure, and that you've picked up concepts like Lisp, REPL, immutability, and functional programming. This chapter in an outline of what you could do next.

## Server-side
With the power of JVM and features like REPL, Clojure is huge on the server-side. Libraries like [HugSQL](https://www.hugsql.org/) let you write SQL statements and convert them into callable functions.

- [Reitit router](https://cljdoc.org/d/metosin/reitit/0.5.10/doc/introduction) is a lean library for developing APIs. 

- Dependency injection libraries like [component](https://github.com/stuartsierra/component) and [integrant](https://github.com/weavejester/integrant) help  with easy structuring of stateful systems.

- With [Onyx](https://www.onyxplatform.org/), you can build distributed systems with ease.

- ... and if that isn't enough, you can use any JVM package hosted on Maven and use it with native interop.

## Datomic
Rich Hickey, the creator of Clojure, also created a database system called Datomic. It's an append-only database, with time-traveling capabilities. Fancy right? 

Coming from a traditional SQL background, it blew my mind. It made me wonder why all databases are not like Datomic. If you have never heard of it, [Value of Values](https://www.youtube.com/watch?v=-6BsiVyC1kM) is a must-watch!

Datomic is proprietary, but [Crux](https://opencrux.com/main/index.html) is an open-source alternative.
 
## Community
The [Clojurians Slack group](https://clojurians.slack.com) is an active hub. You'll always find help and support here. The [Zulip group](https://clojurians.zulipchat.com/) is also growing.

[Planet Clojure](http://planet.clojure.in/) is another helpful resource, which aggregates feeds from various Clojure blogs. The [r/clojure](https://www.reddit.com/r/Clojure/) community is an active source of information too.

## Companies and Jobs
The Clojure website maintains [a list of companies](https://clojure.org/community/companies) using Clojure in production - Atlassian, Clubhouse, NuBank, CircleCI, Walmart, Mail Online, and GoJEK are just a few of the big brands that rely on Clojure.

There are many job openings too (admittedly not as many as JavaScript or Python!) They may be hard to discover though. [Brave Clojure blog](https://www.braveclojure.com/) maintains a [job board](https://jobs.braveclojure.com/), and there is a monthly hiring thread on Reddit.

Many job positions are not advertised. One hack is to use Google's index to find these listings. If you type "clojure site:workable.com" or "clojure site:bamboohr.com", Google will give you all active hiring pages hosted on these platforms. The last time I checked, I was able to find more than 20 Clojure openings that weren't advertised.

## Types
Clojure is a dynamic language but has been incubating a library called [`core.spec`](https://clojure.org/about/spec) since 2016. It's not finalized yet but is usable and has a stable API.

Spec lets you define optional types and type-check your functions. It's not as mature as Haskell, but it gives enough power to implement typing.

## Async
The async model is a hidden gem that we didn't cover in this course. Clojure's async follows the [CSP model](https://levelup.gitconnected.com/communicating-sequential-processes-csp-for-go-developer-in-a-nutshell-866795eb879d), like Go lang or Elixir.

Instead of promises and futures, it depends on channels that can be consumed as needs be. If this sounds alien, you can watch [Rich Hickey's talk](https://www.youtube.com/watch?v=drmNlZVkUeE) about it.

## Keeping in touch

[comment]: <GM: check the twitter link as from gitlab it is not taking me outside gitlab.>
It's time for us to part, but I'd love to stay in touch. You can reach out on [Twitter](twitter.com/shivek_khurana/) if you'd like to share your thoughts about the course or Clojure in general or have any questions. 

You can also follow me on [Github](https://github.com/shivekkhurana) or [Medium](https://medium.com/@shivekkhurana) so you get notified when I post cat memes on my feed.

If you liked Clojure on the frontend and want to learn how to build backends too, let us know on the Newline Discord. We might have a surprise for you :)



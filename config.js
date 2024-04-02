module.exports = ({ dedent }) => ({
  title: "Tinycanva: Clojure for React Developers",
  slug: "tinycanva-clojure-for-react-developers",
  permalink: "/courses/tinycanva-clojure-for-react-developers",
  // posterImageUrl: "./images/tinyhouse-video-banner.png",
  gitRepoHttpUrl:
    "https://gitlab.com/fullstackio/books/Build-Canva-with-Clojurescript",
  publicLessonCount: 0,
  previewPercent: 40,
  modulePrefix: "module_",
  lessonDirsGlob: "module_*/lesson_*",
  moduleDirsGlob: "module_*",
  authorSlugs: ["shivekkhurana"],
  isFree: false,
  isShownPublicly: true,
  useDeltas: true,
  previewPagesOnSite: true,
  heroVideoUrl: "https://fullstack.wistia.com/medias/ler01csxi6",
  summary: dedent(`
This is a course on Clojure for React developers in which we'll build a web-based graphics editor similar to Canva.
`),
  whatYouWillLearn: {
    items: [
      { text: "The concept of tree-based codes aka LISPs" },
      { text: "Editor integrations that make writing LISPs easy" },
      { text: "Mental models for Clojure's rich standard library" },
      { text: "Understanding of tools like NREPL to aid fast feedback" },
      {
        text:
          "Hosted nature of Clojure and its ability to tap into JVM, JavaScript, CLR and other language ecosystems"
      },
      { text: "Syntaxlessness and expressiveness of the language" },
      { text: "How to create React applications with Clojure" },
      { text: "Flux-like state management with Reframe" },
      { text: "Integration with APIs using Google Firebase" },
      { text: "Key-based authentication and access control" },
      { text: "Unit testing" },
      { text: "Integration with React Router and Fabric JS" },
      { text: "Lazy loading and code splitting" },
      {
        text:
          "Map of communities and resources that can help when you get stuck"
      }
    ]
  },
  primaryDescriptionMarkdown: dedent(`
Clojure is a functional hosted LISP known for its expressiveness, which has excellent interop with Javascript, Java, and Microsoft's Common Language Runtime (CLR). 

Many developers praise the elegance and productivity Clojure allows, but for many it seems like an esoteric language with an "ugly" syntax that is impossible to get started with. This course will change that view and show you how to be productive with this marvelous language.

In this course, we'll build a web-based graphics editor similar to Canva. We'll explore Clojure from the perspective of a JavaScript developer. Along the way, we'll also explore state management, authentication, API integration with Google Firebase and interop with NPM.

This course takes you from zero to an understanding of Clojure semantics, LISP tools, and building a production-ready React application in just a few hours. 

We'll start with the basics and build up to writing a fullstack app with both frontend and backend in Clojure. 

The frontend, built using ClojureScript (Clojure that runs on JavaScript) will be a single page React application with routing, key-based authentication and API integration, which will save, list, edit and delete graphics.
 

The backend is hosted on Google Firebase. 

Throughout the course, we'll learn about tools like REPL that aid development. Towards the end, we'll learn about advanced concepts like code splitting and end-to-end testing.

Clojure is unlike other languages as it is hosted on, and can leverage, existing VMs. This means that you can learn Clojure once and write it on the backend with JVM or CLR, and the frontend with JavaScript. If a new technology like Rust takes over the world tomorrow, you will probably be able to continue to write Clojure because a Rust port is already in the making.

By the end of this course, you'll have a superpower: the ability to write fullstack Clojure applications.
`),
  numProjects: 1,
  linesOfCode: 3136,
  ctaFeatures: {
    features: [
      { text: "Learn about Clojure" },
      { text: "Build a web based graphics editor like Canva" },
      { text: "Key based authentication" },
      { text: "Integrate APIs with Google Firebase" }
    ]
  },
  authorBios: {
    shivekkhurana: dedent(`
Hi there, I'm Shivek Khurana, your instructor for this course. I've been developing frontends with React for over five years and discovered Clojure in 2016. In 2017, I started writing Clojure professionally and it changed my perspective on how to build apps. 

Its immutablilty and syntax-free properties embedded in me a thought process that caused to me to greatly improve as a developer.

While I was learning, I was lucky to be surrounded with some of the best Clojure talent. But not everyone has the access to senior developers like I did. **This course is a distilled form of my journey over the years.** 

It focuses on the aspects of the language that turned out to be important in production. I also built this course so I could recommend my clients to use Clojure. I hope it helps you - and makes you a better developer!
`)
  },
  faq: [
    {
      q: "Who is this course for?",
      a:
        "This course is for React and JavaScript developers who want to explore functional languages and concepts."
    },
    {
      q: "What if I need help?",
      a:
        "You can ask us questions anytime through the community Discord channel or by [sending us a message](mailto:us@fullstack.io)."
    },
    {
      q: "Are there any prerequisites?",
      a:
        "Yes. The course assumes that you have a fair understanding of React, SPA routing and Redux like state management."
    }
  ]
});

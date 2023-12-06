---
title: "Creating a Vue Application with build setup"
description: In this post we'll learn a little about the what is and how to create a Vue application using the build setup.
date: 2023-12-04
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: Creating a Vue Application with build setup
  - - meta
    - name: og:description
      content: In this post we'll learn a little about the what is and how to create a Vue application using the build setup.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-build-step
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-04%2016.17.19%20-%20A%20minimalist%20and%20detailed%20pen%20and%20ink%20sketch%20of%20a%20claw%20hammer%20lying%20on%20a%20wooden%20surface,%20with%20the%20claw%20end%20facing%20up%20and%20the%20head%20to%20the%20left,%20in%20a%2016_S0oGD3F6k.png?updatedAt=1701717631774
  - - meta
    - name: twitter:title
      content: Creating a Vue Application with build setup
  - - meta
    - name: twitter:description
      content: In this post we'll learn a little about the what is and how to create a Vue application using the build setup.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-build-step
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-04%2016.17.19%20-%20A%20minimalist%20and%20detailed%20pen%20and%20ink%20sketch%20of%20a%20claw%20hammer%20lying%20on%20a%20wooden%20surface,%20with%20the%20claw%20end%20facing%20up%20and%20the%20head%20to%20the%20left,%20in%20a%2016_S0oGD3F6k.png?updatedAt=1701717631774
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-04%2016.17.19%20-%20A%20minimalist%20and%20detailed%20pen%20and%20ink%20sketch%20of%20a%20claw%20hammer%20lying%20on%20a%20wooden%20surface,%20with%20the%20claw%20end%20facing%20up%20and%20the%20head%20to%20the%20left,%20in%20a%2016_S0oGD3F6k.png?updatedAt=1701717631774" class="img-banner" alt="Abstract illustrative image" width="756" />

A build setup for Vue.js refers to a configuration or tooling environment that prepares a Vue.js application for development and production. This setup typically involves tools and processes that handle various tasks like transpiling modern JavaScript code, bundling assets, optimizing performance, and automating workflows. The goal is to streamline the development process, enhance performance, and ensure that the application is deployable across different environments. In this post, we'll learn how to create a Vue application using the build setup.

---

### Why using the build setup

Using a build setup for a Vue.js project brings several benefits, especially for medium to large-scale applications or when developing sophisticated single-page applications (SPAs). A build setup typically involves tools like Webpack, Vite, or Vue CLI, which help in automating and optimizing various aspects of the development process.

Key reasons for using a build setup in Vue.js development include:

- **Transpilation and Polyfills:** Modern JavaScript (ES6+) offers many advantages but isn't fully supported in all browsers. A build setup can transpile this modern JavaScript code to ES5, which is widely supported. It can also add polyfills for features not supported by certain browsers, enhancing cross-browser compatibility.

- **Module Bundling:** Vue.js applications often consist of many separate files and modules. A build tool can bundle these files into fewer, optimized files, reducing the number of HTTP requests and improving load times.

- **Optimizations:** Build tools can perform various optimizations like minifying code (removing unnecessary characters from source code without changing its functionality) and tree shaking (removing unused code), leading to smaller bundle sizes and faster application performance.

- **Hot Module Replacement (HMR):** During development, HMR allows for immediate feedback in the browser when a file is modified, without needing a full page reload. This speeds up development and makes it more convenient.

- **Environment Variables and Modes:** Build setups can manage environment variables and different modes (development, production, testing), allowing you to tailor the application’s behavior and configuration to the current environment.

- **Sass/Less/Stylus Support:** Many Vue developers prefer using pre-processors like Sass, Less, or Stylus for styling. Build tools can easily integrate these pre-processors, compiling their specific syntax into standard CSS.

- **File Loader Configuration:** Build setups allow for advanced configurations for handling different file types. For example, they can include loaders to import images and fonts directly in JavaScript and Vue components.

- **Single-File Components (SFCs):** Vue’s Single-File Components (.vue files) are a core feature for Vue.js development. A build setup is required to parse these files into an application, as browsers don’t understand .vue files natively.

- **Ease of Integration:** Build tools make it easier to integrate with other tools and libraries like ESLint for linting, Babel for additional JavaScript features, and various plugins for extended functionalities.

- **Scalability:** As applications grow, the complexity of managing dependencies, assets, and optimizations increases. A build setup helps in scaling the application by maintaining an organized and efficient workflow.

### Let's create our app

To scaffold a Vue Single Page Application (SPA) on your local machine using a build setup that supports Vue Single-File Components (SFCs) using Vite, you can follow these steps:

1. Install [Node.js](https://nodejs.org/en) version 16 or higher.
2. Open your terminal in the fold where you want to create your project.
3. Run the following command to install and execute [create-vue](https://github.com/vuejs/create-vue), the official Vue project scaffolding tool. 

```bash
npm create vue@latest
```

4. After this command, will appear several options features to add in you project.

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

If you unsure about any of then, choose `No`. But as they are all extremely important, let's see a little about each one of them:

- **TypeScript:** is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing to JavaScript, which can help catch errors early through a type system and improve the developer experience with features like code completion and intelligent refactoring.
- **JSX (JavaScript XML):** is a syntax extension for JavaScript, primarily used with React, a popular JavaScript library for building user interfaces. JSX allows you to write HTML elements in JavaScript and place them in the DOM without any createElement() and appendChild() calls. It provides a way to structure component rendering using a syntax familiar to many developers, especially those with experience in HTML and JavaScript.
- **Vue Router:** is the official routing library for Vue.js. It is used for building single-page applications (SPAs). Vue Router seamlessly integrates with Vue.js and allows developers to define routes and navigate between different components within a Vue application. It provides a way to manage navigation and rendering of components based on the browser's URL.
- **Pinia:** is a modern state management library for Vue.js applications. It serves as an alternative to Vuex, the official state management library for Vue. Pinia was designed with simplicity and flexibility in mind, offering a more straightforward and enjoyable development experience compared to Vuex, especially when working with Vue 3.
- **Vitest:** is a modern, fast unit test framework tailored specifically for Vue.js applications, although it can be used with any JavaScript or TypeScript project. It is designed to work out-of-the-box with Vite, a build tool that aims to provide a faster and leaner development experience for modern web projects.
- **End-to-end (E2E) testing:** is a software testing methodology used to validate the entire workflow or process of an application from start to finish. The goal of E2E testing is to simulate real user scenarios and ensure that the system as a whole functions as expected. This type of testing is conducted in an environment that closely mirrors the production environment where the application will be deployed.
- **ESLint:** is an open-source JavaScript linting utility, which is a type of tool used to analyze code for potential errors, stylistic issues, and adherence to certain coding standards. It was created by Nicholas C. Zakas in 2013 and has since become one of the most popular linting tools in the JavaScript ecosystem.
- **Prettier:** is an open-source code formatter for JavaScript, TypeScript, CSS, HTML, JSON, and many other languages. It is designed to enforce a consistent code style across an entire project by automatically formatting code according to a set of rules. Prettier takes your code and reprints it in a consistent style, aiming to improve the readability and maintainability of the codebase.

5. After the options on prompt finish, the project will be created in a fold with the name you give to them. Let's open the fold with this command on terminal: 

```bash
cd <your-project-name>
```

6. Once in the project folder, let's install the project dependencies:

```bash
npm install
```

6. Finally, run the project on the browser:

```bash
npm run dev
```

This command will create a local server that runs the project on port 5174 of your machine, and can be accessed through this link `http://localhost:5174/`. It's important to note that when you change anything in the project, automatically the change will appear in the browser, facilitating the process of learning and development.

Congratulations! Now you create and run your first Vue.js 3 project! If you don't have choice an IDE, the official recommendation is Visual Studio Code (VSCode) + Volar extension. When you finish having fun with your project and want to put it into production, you can run the command below to build the project and all the files will be found in `./dist` folder.

```bash
npm run build
```

### Concluding 

In this, we post to learn about how to create a Vue Application with a build setup. In the next posts, we'll learn about another way to create a Vue application. See you there.
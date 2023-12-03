---
title: "Introduction to Vue.js"
description: In this post we'll learn a little about the history of Vue and its main features.
date: 2023-12-01
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: Introduction to Vue.js
  - - meta
    - name: og:description
      content: In this post we'll learn a little about the history of Vue and its main features.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/What-is-internet
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-01%2015.45.47%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20wide,%20horizontal%20banner,%20displaying%20the%20Vue.js%20logo%20in%20a%20minimalist%20style%20without%20any%20text.%20The%20logo%20is%20a%20'V'%20shape_AvmlrpnIt.png?updatedAt=1701457914818
  - - meta
    - name: twitter:title
      content: Introduction to Vue.js
  - - meta
    - name: twitter:description
      content: In this post we'll learn a little about the history of Vue and its main features.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/What-is-internet
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-01%2015.45.47%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20wide,%20horizontal%20banner,%20displaying%20the%20Vue.js%20logo%20in%20a%20minimalist%20style%20without%20any%20text.%20The%20logo%20is%20a%20'V'%20shape_AvmlrpnIt.png?updatedAt=1701457914818
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-01%2015.45.47%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20wide,%20horizontal%20banner,%20displaying%20the%20Vue.js%20logo%20in%20a%20minimalist%20style%20without%20any%20text.%20The%20logo%20is%20a%20'V'%20shape_AvmlrpnIt.png?updatedAt=1701457914818" class="img-banner" alt="Abstract illustrative image" width="756" />

Vue.js, the progressive framework, often simply referred to as Vue, is a progressive JavaScript framework used for building user interfaces. Primarily focused on the view layer (the front-end), it enables developers to create rich and interactive web applications. In this post we'll learn a little about the history of Vue and its main features.

---

### History

Vue.js was created by Evan You after working at Google using AngularJS in several projects. He found the need for a lightweight framework that combined the best aspects of Angular (such as data-binding and a component-based approach) with a simpler learning curve. 

Over time, Vue gained popularity due to its simplicity, detailed documentation, and gentle learning curve. It evolved with contributions from the community and additional features like the Vue Router and Vuex for state management. Vue was first released in February 2014, Vue 2.0, released in 2016, brought significant improvements, and Vue 3.0, released in 2020, introduced the Composition API, further enhancing its capabilities. Vue's growth has been organic, driven by the community and its user-friendly approach to front-end development. You can see more about the history of Vue in their [documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI).

Vue.js, as of 2023, has solidified its position as a significant player in the world of JavaScript frameworks:

- Competitive Standing: Vue.js frequently competes with React.js for the top spot in terms of popularity among front-end frameworks. These two frameworks often switch positions in categories like "most loved," "most used," and "most popular" in the developer community​​. *[Ref](https://www.monterail.com/blog/vue-vs-react#:~:text=April%206%2C%202023%20Vue,most%20loved%2C%20used%20or%20popular)*.

- Market Share: In the *[JetBrains State of Developer Ecosystem report for 2023](https://www.jetbrains.com/lp/devecosystem-2023/)*, Vue.js emerged as a noteworthy contender, capturing a 32% share. This significant market presence underscores its increasing adoption and relevance in the developer ecosystem​​. [Ref](https://www.techrepublic.com/article/jetbrains-state-of-developer-ecosystem-2023-insights-industry-experts/#:~:text=Vue,it%20an%20ideal%20choice).

- Popularity Factors: Several reasons contribute to Vue.js's popularity. It is recognized as the go-to progressive JavaScript framework for creating feature-rich single-page applications and user interfaces. The framework's easy-to-learn nature, with its gentle learning curve, makes it accessible for developers new to JavaScript and front-end development​​​​. *[Ref1](https://dev.to/shoyeb001/why-you-should-learn-vue-js-3-in-2023-e46), [Ref2](https://www.jspanther.com/blog/why-vuejs-gaining-popularity/#:~:text=March%2017%2C%202023%20Vue,and%20his%20team%20of%20experts)*.

Vue.js's rise in popularity can be attributed to its approachable learning curve, flexibility, and effectiveness in building complex, modern web applications. It's designed to be incrementally adoptable, which means that it can be easily integrated into existing projects, and its component-based architecture allows for better code organization and reuse. These features make Vue.js a compelling choice for both new and experienced developers in the web development realm.

### The framework

Vue is known for its simplicity and flexibility, offering a declarative and component-based programming model. This model helps efficiently develop both simple and complex user interfaces. Vue builds on top of standard HTML, CSS, and JavaScript, making it easy to integrate into projects and for developers with knowledge of these technologies to learn Vue quickly. Let's see the key features of them. 

**Progressive approach**

They are termed "The Progressive Framework" because of their design philosophy, which allows for incremental adoption and flexibility. This means that developers can start using Vue in a small part of their project, like enhancing static HTML with interactive features, and then progressively integrate more of Vue's features and capabilities as needed. This approach makes Vue adaptable to a wide range of projects, from simple to complex applications. The framework grows with the developer's needs, making it suitable for both beginners and experienced developers tackling larger-scale projects.

**Single-File Components (SFCs)**

Single-File Components (SFCs) in Vue are a defining feature where a Vue component is encapsulated in a single file. These files, typically with a .vue extension, contain three types of code blocks:

- Template Block: Contains the HTML structure of the component.
- Script Block: Includes the JavaScript logic, where you can define data, computed properties, methods, lifecycle hooks, etc.
- Style Block: Houses the CSS styles specific to the component. These styles can be scoped to the component, preventing them from affecting other elements in the application.

This structure brings a modular approach to building web applications, making components more organized, maintainable, and reusable. Each SFC encapsulates its structure, behavior, and style in one cohesive file, streamlining development and aiding in understanding how each part of the application UI works.

**API styles**

In Vue, there are two primary API styles for authoring components:

- Options API: This is the classic Vue API, where you define a component's logic using an object with options like data, methods, computed, and lifecycle hooks. These options help structure the code and make it more readable, especially for those familiar with object-oriented programming.

- Composition API: Introduced in Vue 3, this API is more function-based. It provides a more flexible way to organize component logic by using reactive states and functions. The Composition API is particularly useful for complex components, as it makes it easier to extract, share, and manage reactive logic.

Both APIs are fully capable and are built on the same reactivity system. Choosing between Vue's Options API and Composition API depends on your project's needs and your familiarity with Vue or programming concepts. Let's see which one to choose.

Options API:

- Best for: Beginners or developers more comfortable with a more structured, object-oriented approach.
- Reasons to Choose: It's easier to understand for those new to Vue or front-end frameworks. It abstracts away the reactivity details and enforces a more organized code structure.

Composition API:

- Best for: Large-scale applications or when managing complex component logic.
- Reasons to Choose: Offers more flexibility and better code reusability. It's beneficial for advanced users who need fine-grained control over reactive dependencies and want to compose logic across different components.

In general, if you're new to Vue or prefer a more structured approach, start with the Options API. If you're dealing with complex state management or building large applications, the Composition API might be more suitable.

### Concluding 

In this post learn a little about the history of Vue and its main features. In the next two posts, we'll learn about the two ways to create a Vue application. See you there.
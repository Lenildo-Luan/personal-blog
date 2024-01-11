---
title: "Vue: reactivity"
description: In this post, we'll learn more about the reactivity.
date: 2023-12-23
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: reactivity"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the reactivity.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-reactivity
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2015.56.30%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20representing%20the%20concept%20of%20'reaction'%20in%20a%20metaphorical%20or%20abstract%20manner.%20The%20image%20should%20symbolize%20the%20__5Ju2F3Qv.png?updatedAt=1703271555890
  - - meta
    - name: twitter:title
      content: "Vue: reactivity"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the reactivity.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-reactivity
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2015.56.30%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20representing%20the%20concept%20of%20'reaction'%20in%20a%20metaphorical%20or%20abstract%20manner.%20The%20image%20should%20symbolize%20the%20__5Ju2F3Qv.png?updatedAt=1703271555890
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2015.56.30%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20representing%20the%20concept%20of%20'reaction'%20in%20a%20metaphorical%20or%20abstract%20manner.%20The%20image%20should%20symbolize%20the%20__5Ju2F3Qv.png?updatedAt=1703271555890" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---


Reactivity in Vue.js is a fundamental concept that allows the framework to track and manage the state of the application efficiently. When the state of your application changes (for example, a user inputs data or an API loads new data), Vue automatically updates the DOM (Document Object Model) to reflect these changes. This is done in a way that is both efficient and minimizes the amount of manual DOM manipulation you need to do.

Here's a more detailed breakdown of how reactivity works in Vue.js:

- **Reactive Data:** In Vue, data objects are made reactive by internally converting them using JavaScript's getters and setters. This is typically done in the data function of a Vue component.

- **Dependency Tracking:** When a Vue component renders, Vue automatically tracks which reactive properties the component accesses during the render. This way, Vue knows which properties are responsible for making the component look the way it does.

- **Change Detection:** Whenever a reactive property changes (due to user input, API responses, etc.), Vue is notified. Since Vue already knows which components depend on which properties, it can intelligently re-render only the components that depend on the properties that changed.

- **Efficient Updates:** Vue's reactivity system ensures that the DOM is updated as efficiently as possible. Only the parts of the DOM that actually need to change are updated, which improves performance and user experience.

- **Computed Properties:** Vue also offers computed properties, which are reactive properties that depend on other reactive properties. Vue automatically updates computed properties when their dependencies change, and caches their values when the dependencies haven't changed.

- **Watchers:** Vue provides a way to watch reactive properties and run code in response to changes. This is useful for situations where you need to perform actions or calculations that are too complex for a computed property.

- **Virtual DOM:** Under the hood, Vue uses a Virtual DOM to make updates more efficient. Instead of changing the actual DOM directly, Vue first makes changes to a virtual representation of the DOM, calculates the most efficient way to make those changes to the real DOM, and then does so.

Understanding and effectively utilizing Vue's reactivity system is key to building dynamic, responsive web applications with Vue.js.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
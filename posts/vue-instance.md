---
title: "Vue: the app instance"
description: In this post, we'll learn more about this method and the creation of a Vue app.
date: 2023-12-19
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: the app instance"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about this method and the creation of a Vue app.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-cdn
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-19%2017.26.21%20-%20A%20minimalist%20pen%20and%20ink%20sketch%20of%20a%20framework,%20depicted%20in%20a%20detailed%20yet%20simplistic%20style.%20The%20design%20should%20focus%20on%20the%20essential%20elements%20of%20a%20fr_Hc3lVSOfB.png?updatedAt=1703017651643
  - - meta
    - name: twitter:title
      content: "Vue: the app instance"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about this method and the creation of a Vue app.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-cdn
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-19%2017.26.21%20-%20A%20minimalist%20pen%20and%20ink%20sketch%20of%20a%20framework,%20depicted%20in%20a%20detailed%20yet%20simplistic%20style.%20The%20design%20should%20focus%20on%20the%20essential%20elements%20of%20a%20fr_Hc3lVSOfB.png?updatedAt=1703017651643
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-19%2017.26.21%20-%20A%20minimalist%20pen%20and%20ink%20sketch%20of%20a%20framework,%20depicted%20in%20a%20detailed%20yet%20simplistic%20style.%20The%20design%20should%20focus%20on%20the%20essential%20elements%20of%20a%20fr_Hc3lVSOfB.png?updatedAt=1703017651643" class="img-banner" alt="Abstract illustrative image" width="756" />

Last post we create our Vue application by CDN setup and are presented with a new code snippet that calls a method that returns a new Vue instance, where all the magic occurs. In this post, we'll learn more about this method and the creation of a Vue app.

---

A Vue Application instance is a fundamental concept in Vue.js. When you create a Vue application, you essentially create a new instance of Vue, which serves as the root of your application and the starting point for your Vue.js project. This instance is created by calling the Vue.createApp function, a function that returns a new application instance, often stored in a variable.

```js
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({/* options object */})
```

The argument you pass to createApp is an options object. This object can include data properties, methods, lifecycle hooks, and more, defining how your application behaves. Is important to note the object we are passing into createApp is in fact a component and every app requires a "root component" that can contain other components as its children. This is similar to HTML, where all the tags of a document is inside a html tag.

After creating the application instance (always after), you typically need to mount it to a DOM element. This is where Vue takes control and renders the application. It expects a "container" argument, where the content off the app will be rendered, which can either be an DOM element or a selector string.

```html
  <div id="app"></div>

  <script type="module">
    import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

    const app = createApp({/* options object */}).mount('#app')
  </script>
```

Realize that app just render on the DOM element passed to .mount(), where the instance of them is stored in the app constant. Because of this, is possible have how many Vue apps you want, each one with their own scope, just create another element and another Vue instance to render the app on it, like the example below.

```html
  <div id="app-1"></div>
  <div id="app-2"></div>

  <script type="module">
    import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

    const app1 = createApp({/* options object */}).mount('#app-1')
    const app2 = createApp({/* options object */}).mount('#app-2')
  </script>
```

### Concluding 

In summary, the Vue Application instance is the central part of any Vue.js application, responsible for creating, configuring, and managing the application's lifecycle and reactivity. It is the main point of interaction for defining how your application behaves and responds to user input.

In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there!
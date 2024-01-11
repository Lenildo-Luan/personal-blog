---
title: "Vue: computed"
description: In this post, we'll learn more about the computed.
date: 2023-12-24
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: computed"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the computed.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-computed
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096
  - - meta
    - name: twitter:title
      content: "Vue: computed"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the computed.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-computed
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---


Computed properties in Vue.js are a powerful feature used to define reactive properties that depend on other data sources in your Vue instance. They are particularly useful for performing calculations or processing data that needs to update whenever its dependencies change. Here's a closer look at computed properties:

- **Reactive Dependencies:** Computed properties automatically track dependencies (data or other computed properties) and update themselves when any of these dependencies change.

- **Caching:** Unlike methods, computed properties are cached based on their dependencies. This means a computed property will only re-evaluate when one of its dependencies has changed, making them more efficient for expensive operations.

- **Getter and Setter Functions:** By default, computed properties have a getter function, but you can also provide a setter function. The getter function is used to calculate the value, and the setter function is called when you assign a value to the computed property.

- **Declarative Code:** They help in writing more declarative and understandable code. Instead of putting complex logic directly in your template, you can abstract it into a computed property.

```js
new Vue({
  el: '#app',
  data: {
    a: 10,
    b: 20
  },
  computed: {
    sum: function() {
      return this.a + this.b;
    }
  }
});
```

In this example, *sum* is a computed property that depends on *a* and *b*. Whenever *a* or *b* changes, *sum* will automatically update to reflect the new total.

### Usage in Templates

You can use computed properties in your templates just like you would use any other property:

```js
<div id="app">
  <p>The sum is: {{ sum }}</p>
</div>
```

This makes your templates cleaner and your logic more centralized and manageable.

Remember, computed properties are best used when you need to perform some calculation or transformation on your data for display purposes, and when these calculations depend on reactive data sources.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
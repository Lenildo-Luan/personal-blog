---
title: "Vue: list rendering"
description: In this post, we'll learn more about the list rendering.
date: 2023-12-27
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: list rendering"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the list rendering.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-list-rendering
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2020.36.46%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20of%20a%20list%20on%20a%20white%20background.%20The%20sketch%20should%20emphasize%20the%20fine%20lines%20and%20intricate%20details%20typical%20of_jsuH24lZD.png?updatedAt=1703288221549
  - - meta
    - name: twitter:title
      content: "Vue: list rendering"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the list rendering.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-list-rendering
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2020.36.46%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20of%20a%20list%20on%20a%20white%20background.%20The%20sketch%20should%20emphasize%20the%20fine%20lines%20and%20intricate%20details%20typical%20of_jsuH24lZD.png?updatedAt=1703288221549
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2020.36.46%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20of%20a%20list%20on%20a%20white%20background.%20The%20sketch%20should%20emphasize%20the%20fine%20lines%20and%20intricate%20details%20typical%20of_jsuH24lZD.png?updatedAt=1703288221549" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

List rendering in Vue.js refers to the process of displaying a list of items dynamically based on an array of data. It's a common technique in front-end development, particularly useful when you want to create a UI that updates automatically as the underlying data changes. This is often seen in scenarios like displaying a list of products, messages, or any other collection of similar items.

In Vue.js, list rendering is typically done using the v-for directive. This directive allows you to loop through an array and render a block of HTML or a component for each item in the array.

Here’s a basic example to illustrate this:

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
      ]
    }
  }
}
</script>
```

In this example:

- items is an array of objects, each with an id and text.
- The v-for directive in the `<li>` element iterates over each item in the items array.
- :key is used to provide a unique key for each element in the list, which is a recommended practice for optimizing DOM updates and re-rendering.

Whenever the items array changes (like adding, removing, or updating its elements), Vue automatically updates the DOM to reflect these changes. This makes it very efficient for handling dynamic content.

Vue.js's reactivity system ensures that only the necessary DOM updates are made when the data changes, which is crucial for performance, especially with large lists.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
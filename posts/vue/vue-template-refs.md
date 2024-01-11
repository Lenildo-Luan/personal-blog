---
title: "Vue: template refs"
description: In this post, we'll learn more about the template refs.
date: 2024-01-01
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: template refs"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the template refs.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-template-refs
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2010.01.24%20-%20a%20barcode%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist%20design,%20white%20background,%2016_9%20aspect%20ratio_nNhtCtXEJ.png?updatedAt=1703336503141
  - - meta
    - name: twitter:title
      content: "Vue: template refs"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the template refs.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-template-refs
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2010.01.24%20-%20a%20barcode%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist%20design,%20white%20background,%2016_9%20aspect%20ratio_nNhtCtXEJ.png?updatedAt=1703336503141
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2010.01.24%20-%20a%20barcode%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist%20design,%20white%20background,%2016_9%20aspect%20ratio_nNhtCtXEJ.png?updatedAt=1703336503141" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

Template refs in Vue.js are a way to directly access a DOM element or a child component instance within your Vue template. They are particularly useful when you need to directly interact with an element, like focusing on an input or measuring its dimensions, which are tasks that are typically outside the scope of Vue's reactive data system.

Here's how you can use a template ref in a Vue component:

- Assigning the ref attribute: In your template, you add a special ref attribute to an element. This attribute takes a string that serves as the reference name.

```html
<template>
  <input ref="myInput">
</template>
```

- Accessing the ref in your script: Within your Vue component's script, you can access this ref via this.$refs followed by the name you gave it. For instance, this.$refs.myInput would give you direct access to the input element.

```js
<script>
export default {
  mounted() {
    this.$refs.myInput.focus(); // This will focus the input element when the component mounts
  }
}
</script>
```

Remember that refs are only populated after the component has been rendered, and they will not trigger updates to your Vue component's data or computed properties when they change. This is because refs are not reactive data sources. They are more like "escape hatches" out of Vue's reactivity system to help you do things directly on the DOM or with child component instances.

Also, if you're using Vue 3's Composition API, the approach to using refs is slightly different, involving the ref function from Vue's reactivity system and the onMounted lifecycle hook.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
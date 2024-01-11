---
title: "Vue: conditional rendering"
description: In this post, we'll learn more about the conditional rendering.
date: 2023-12-26
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: conditional rendering"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the conditional rendering.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-conditional-rendering
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096
  - - meta
    - name: twitter:title
      content: "Vue: conditional rendering"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the conditional rendering.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-conditional-rendering
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2019.43.02%20-%20An%20image%20of%20a%20'fork%20in%20the%20road',%20illustrated%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches.%20The%20artwork%20should%20be%20minimalist,%20capturing%20the%20essential_37Cyx8UXy.png?updatedAt=1703285036590" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

Conditional rendering in Vue.js refers to the ability to render elements or components in the DOM based on certain conditions. This is a powerful feature that allows you to control what is displayed to the user based on the state of your application or user interactions. In Vue.js, this is typically achieved using directives such as v-if, v-else-if, v-else, and v-show.

Here's a brief overview of these directives:

- v-if: This directive is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value. It’s akin to using an if statement in JavaScript.

- v-else-if and v-else: These directives are used in conjunction with v-if to create a chain of conditions. v-else-if serves as an “else if block” for v-if, and v-else serves as an “else block”.

- v-show: Unlike v-if, the v-show directive does not remove elements from the DOM. It simply toggles the CSS display property of the element based on the truthiness of the expression. This is generally used for frequently toggled elements as it's more efficient for elements that switch often.

Here’s a simple example to illustrate these concepts:

```vue
<template>
  <div>
    <h1 v-if="isLoggedIn">Welcome back!</h1>
    <h1 v-else>Welcome, guest!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>
```

In this example, if isLoggedIn is true, the message "Welcome back!" will be displayed. If isLoggedIn is false, the message "Welcome, guest!" will be shown instead.

These conditional rendering directives give you fine-grained control over the rendering process and are a fundamental part of building dynamic, interactive web applications with Vue.js.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
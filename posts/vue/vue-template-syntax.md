---
title: "Vue: template syntax"
description: In this post, we'll learn more about the template syntax.
date: 2023-12-22
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: template syntax"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the template syntax.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-template-syntax
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2011.46.06%20-%20An%20image%20of%20a%20'computer%20screen,'%20illustrated%20as%20a%20detailed%20pen%20and%20ink%20sketch%20in%20a%20minimalist%20style,%20on%20a%20white%20background.%20The%20artwork%20should%20represe_fpKWVHuFG.png?updatedAt=1703256942449
  - - meta
    - name: twitter:title
      content: "Vue: template syntax"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the template syntax.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-template-syntax
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2011.46.06%20-%20An%20image%20of%20a%20'computer%20screen,'%20illustrated%20as%20a%20detailed%20pen%20and%20ink%20sketch%20in%20a%20minimalist%20style,%20on%20a%20white%20background.%20The%20artwork%20should%20represe_fpKWVHuFG.png?updatedAt=1703256942449
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2011.46.06%20-%20An%20image%20of%20a%20'computer%20screen,'%20illustrated%20as%20a%20detailed%20pen%20and%20ink%20sketch%20in%20a%20minimalist%20style,%20on%20a%20white%20background.%20The%20artwork%20should%20represe_fpKWVHuFG.png?updatedAt=1703256942449" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

In Vue.js, template syntax is used to bind the rendered HTML structure to the underlying Vue instance's data and methods. It provides a declarative way to define the user interface and its behavior. Here's an overview of the key aspects of Vue.js template syntax:

### Interpolation

- Text: The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces). This will display the value of the message property on the corresponding Vue instance.
```vue
<span>{{ message }}</span>
```
- Raw HTML: To output real HTML, you need to use the v-html directive, this will treat the value of rawHtml as HTML code, not plain text.
```vue
<span v-html="rawHtml"></span>
```

### Directives

Directives are special tokens in the markup that tell the library to do something to a DOM element. For example:

- **v-if**: Conditionally render an element based on the truthiness of the expression value. 
```vue
<p v-if="seen">Now you see me</p>
```
- **v-for**: Render a list of items based on an array .
```vue
<li v-for="item in items">{{ item.text }}</li>
```
- **v-on**: Listen to DOM events and execute some JavaScript when they’re triggered.
```vue
<button v-on:click="doSomething">Click me</button>
```
- **v-bind**: Dynamically bind one or more attributes, or a component prop to an expression.
```vue
<img v-bind:src="imageSrc" />
```

### Shorthands

- **v-bind shorthand**: Instead of `v-bind:`, you can just use `:`.
```vue
<img :src="imageSrc" />
```
- **v-on shorthand**: Instead of `v-on:`, you can use `@`.
```vue
<button @click="doSomething">Click me</button>
```

Understanding and effectively using template syntax is fundamental in Vue.js to create interactive and dynamic user interfaces. Remember, Vue.js templates are very powerful and provide a clear and concise way to bind the data and behavior defined in your Vue instances to your application's UI.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
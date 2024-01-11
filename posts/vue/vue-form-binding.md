---
title: "Vue: form binding"
description: In this post, we'll learn more about the form binding.
date: 2023-12-29
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: form binding"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the form binding.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-form-binding
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2008.49.04%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20of%20a%20form%20on%20a%20white%20background.%20The%20image%20should%20showcase%20a%20simple,%20clear%20form,%20possibly%20a%20generic%20applicat_-z8EXFL9R.png?updatedAt=1703332168592
  - - meta
    - name: twitter:title
      content: "Vue: form binding"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the form binding.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-form-binding
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2008.49.04%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20of%20a%20form%20on%20a%20white%20background.%20The%20image%20should%20showcase%20a%20simple,%20clear%20form,%20possibly%20a%20generic%20applicat_-z8EXFL9R.png?updatedAt=1703332168592
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2008.49.04%20-%20A%20minimalist,%20detailed%20pen%20and%20ink%20sketch%20of%20a%20form%20on%20a%20white%20background.%20The%20image%20should%20showcase%20a%20simple,%20clear%20form,%20possibly%20a%20generic%20applicat_-z8EXFL9R.png?updatedAt=1703332168592" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

Form Input Bindings in Vue.js refer to the ways in which you can bind form inputs like text fields, checkboxes, radio buttons, and select boxes to Vue.js data. This binding creates a two-way connection between the form inputs and the application's data model, meaning any changes to the input fields will automatically update the corresponding data in your Vue instance, and vice versa.

Here are some key concepts and examples:

- v-model Directive: The primary method for binding form elements to data in Vue.js is using the v-model directive. This creates a two-way binding on a form input element or a component.

For example:

```html
<input v-model="message">
```

This will bind the input element to the message property in your Vue instance.

- Modifiers: Vue.js provides modifiers for v-model to handle different types of data manipulation and validation. For instance, .number for automatic typecasting to a number, or .trim for trimming whitespace.

- Value Binding: For radio buttons and checkboxes, you often need to bind the input's value to a non-string data type. Vue.js allows this with v-bind.

Example with a checkbox:

```html
<input type="checkbox" v-model="checkedNames" value="John">
```

Here, checkedNames will be an array containing the value "John" if the checkbox is checked.

- Dynamic v-model: Vue.js also supports dynamically assigning the v-model attribute using the syntax v-model="dynamicPropertyName" where dynamicPropertyName is a property in your data that determines which actual data property to bind to.

- Handling Select Elements: For select elements, Vue.js can bind the selected value to a piece of data using v-model. This is especially useful for select elements with dynamic option values generated with v-for.

- Custom Components: Vue.js's form input bindings aren't limited to native HTML elements. You can also use v-model on custom components, but it requires a little extra setup inside the component to emit events and accept props correctly.

By using form input bindings, Vue.js simplifies the process of creating interactive forms, ensuring the UI stays in sync with the underlying data model.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
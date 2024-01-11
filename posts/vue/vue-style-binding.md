---
title: "Vue: style binding"
description: In this post, we'll learn more about the style binding.
date: 2023-12-25
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: style binding"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the style binding.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-style-binding
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096
  - - meta
    - name: twitter:title
      content: "Vue: style binding"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the style binding.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-style-binding
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.17.18%20-%20A%20detailed%20pen%20and%20ink%20sketch%20of%20a%20calculator,%20executed%20in%20a%20minimalist%20style.%20The%20calculator%20should%20have%20a%20simple%20yet%20precise%20design,%20capturing%20the%20e_sEMR1kPpz.png?updatedAt=1703271910096
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-22%2014.23.29%20-%20a%20painting%20palette,%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist,%20white%20background,%2016_9%20aspect%20ratio_Mn8uv95Bd.png?updatedAt=1703274100701" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

Class and style bindings in Vue.js are powerful features that allow you to dynamically set CSS classes and inline styles on HTML elements based on the state of your Vue.js application.

### Class Bindings

This feature allows you to dynamically toggle CSS classes on an element. Vue.js provides several ways to bind classes:

- **Object Syntax:** You can pass an object to v-bind:class (or just :class for shorthand), where the keys are class names and the values are booleans indicating whether the class should be applied. In this example, the active class will be applied if isActive is truthy, and text-danger will be applied if hasError is truthy.

```vue
<div :class="{ active: isActive, 'text-danger': hasError }"></div>
```

- **Array Syntax:** This allows you to specify an array of classes to be added to the element. It's useful for applying multiple classes conditionally. Here, activeClass and errorClass are data properties that hold class names.

```vue
<div :class="[activeClass, errorClass]"></div>
```

### Style Bindings

Vue.js also allows you to bind inline styles dynamically using object or array syntax, similar to class bindings.

- **Object Syntax:** Here, you can bind an object to v-bind:style (or :style as shorthand). The object keys correspond to CSS properties, and their values are the respective values for those CSS properties. activeColor and fontSize are data properties. Vue automatically adds vendor prefixes where necessary.

```vue
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

- **Array Syntax:** This allows you to pass an array of style objects, which is useful when you want to combine multiple style objects. BaseStyles and overridingStyles are data objects that contain CSS properties and values.

```vue
<div :style="[baseStyles, overridingStyles]"></div>
```

These features make it easy to have a dynamic UI that reacts to your application's state, enhancing the user experience without cluttering your HTML with conditional logic and complex class and style manipulations.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
---
title: "Vue: watchers"
description: In this post, we'll learn more about the watchers.
date: 2023-12-31
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: "Vue: watchers"
  - - meta
    - name: og:description
      content: In this post, we'll learn more about the watchers.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-watchers
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2009.51.35%20-%20An%20eye%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist,%20with%20a%20white%20background.%20The%20image%20should%20be%20in%2016_9%20aspect%20ratio,%20capturing%20the%20int_md-fZp1N5.png?updatedAt=1703335912157
  - - meta
    - name: twitter:title
      content: "Vue: watchers"
  - - meta
    - name: twitter:description
      content: In this post, we'll learn more about the watchers.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-watchers
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2009.51.35%20-%20An%20eye%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist,%20with%20a%20white%20background.%20The%20image%20should%20be%20in%2016_9%20aspect%20ratio,%20capturing%20the%20int_md-fZp1N5.png?updatedAt=1703335912157
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-23%2009.51.35%20-%20An%20eye%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist,%20with%20a%20white%20background.%20The%20image%20should%20be%20in%2016_9%20aspect%20ratio,%20capturing%20the%20int_md-fZp1N5.png?updatedAt=1703335912157" class="img-banner" alt="Abstract illustrative image" width="756" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

---

In Vue.js, "watchers" are a feature used to react to changes in your component's data. When you use watchers, you can specify a function that will be called whenever a specified piece of data changes. This is particularly useful for performing some action in response to a change in your application's state.

Here's a basic overview of how watchers work in Vue.js:

Define a Watcher: You define a watcher for a specific data property in your component. This is typically done inside the watch option in your Vue component.

Reacting to Changes: The function you define for the watcher receives the new value of the property as an argument (and optionally the old value). You can then execute any code in response to the change in this value.

Use Cases: Watchers are useful for cases where you need to perform actions in response to a change in your app's data — for example, fetching data from an API when a user input changes, or updating another part of your component when a certain value updates.

Here's an example of how you might use a watcher in a Vue component:

```js
export default {
  data() {
    return {
      username: ''
    };
  },
  watch: {
    // Watcher for the "username" data property
    username(newUsername, oldUsername) {
      console.log(`Username changed from ${oldUsername} to ${newUsername}`);
      // Perform some action when the username changes
    }
  }
};
```

In this example, the username watcher will be called every time the username data property changes in your component. This allows you to react to changes in your application's state in a granular and efficient way.

### Concluding 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan consequat turpis quis venenatis. Duis ac ligula sodales metus finibus porta non vitae est. Praesent in sollicitudin leo, in tincidunt erat. Pellentesque vel metus massa. In hac habitasse platea dictumst. Proin gravida velit ut ante malesuada, ac pellentesque nibh suscipit.

<!-- In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there! -->
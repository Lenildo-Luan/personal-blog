---
title: "Creating a Vue Application with CDN setup"
description: In this post we'll learn a little about the what is and how to create a Vue application using the CDN setup.
date: 2023-12-15
author: Lenildo Luan
gravatar: 1d7a7642e5705edc116ed19d4fe64d87
twitter: "@lenildoluan_dev"
head:
  - - meta
    - name: og:title
      content: Creating a Vue Application with CDN setup
  - - meta
    - name: og:description
      content: In this post we'll learn a little about the what is and how to create a Vue application using the CDN setup.
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://lenildo.com/posts/vue-cdn
  - - meta
    - name: og:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-18%2017.32.35%20-%20A%20cloud%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist%20design,%20on%20a%20white%20background.%20The%20image%20should%20be%20in%20a%2016_9%20aspect%20ratio_hVMr_Hby83.png?updatedAt=1702931597287
  - - meta
    - name: twitter:title
      content: Creating a Vue Application with CDN setup
  - - meta
    - name: twitter:description
      content: In this post we'll learn a little about the what is and how to create a Vue application using the CDN setup.
  - - meta
    - name: twitter:type
      content: article
  - - meta
    - name: twitter:url
      content: https://lenildo.com/posts/vue-cdn
  - - meta
    - property: twitter:image
      content: https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-18%2017.32.35%20-%20A%20cloud%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist%20design,%20on%20a%20white%20background.%20The%20image%20should%20be%20in%20a%2016_9%20aspect%20ratio_hVMr_Hby83.png?updatedAt=1702931597287
---

<img src="https://ik.imagekit.io/zjvju1m8yb/Blog_LenildoLuan/posts/Vue/DALL_E%202023-12-18%2017.32.35%20-%20A%20cloud%20in%20the%20style%20of%20detailed%20pen%20and%20ink%20sketches,%20minimalist%20design,%20on%20a%20white%20background.%20The%20image%20should%20be%20in%20a%2016_9%20aspect%20ratio_hVMr_Hby83.png?updatedAt=1702931597287" class="img-banner" alt="Abstract illustrative image" width="756" />

Vue.js isn't called "The progressive JavaScript Framework" for nothing. They are called that because you don't need to install a lot of npm packages and recreate your entire project in a new framework. If you have an existing website and need to add some interactive features to it, just add the Vue.js by `script` tag and use it in your page. How to do that? Let's see in this post.

---

Using Vue from a CDN (Content Delivery Network) means that instead of downloading and hosting the Vue.js library on your server, you include it in your web project by linking to a version hosted on a CDN. This technique offers several advantages for vanilla web projects that want to add more complex user interfaces or modernize their code. Furthermore, another reason for using this method:

- **Speed and Performance:** CDNs are optimized for delivering content efficiently. They often have servers all over the world, ensuring that your users download Vue.js from a location close to them, reducing load times.

- **Ease of Use:** It's straightforward to include Vue in your project. You just need to add a `<script>` tag in your HTML file that points to the Vue.js CDN link.

- **No Installation Required:** There's no need to install Vue using npm or yarn, which can be beneficial for small projects or for learning purposes.  

However, there are also downsides to using a CDN:

- **Reliance on external service:** Your project's functionality might be compromised if the CDN goes down or has issues.

- **Limited control:** You have less control over the version of Vue being used, unless you specify a particular version in the CDN link.

- **Not Ideal for larger projects:** It's often better to install Vue locally to have more control over the environment and to use Vue's powerful development tools.

To use Vue from a CDN, just add a `script` tag with they `src` pointed to URL where is located the Vue.js file:

```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app">{{ message }}</div>

  <script>
    const { createApp, ref } = Vue

    createApp({
      setup() {
        const message = ref('Hello vue!')
        return {
          message
        }
      }
    }).mount('#app')
  </script>
```

The example above adds Vue to the project and creates a hello world app to validate if the framework as imported successfully.

### Concluding 

In conclusion, using Vue.js via a CDN is a convenient and efficient way to modernize an existing web project or to add interactive features without the complexities of a full framework installation. By adding just a few lines of code, you can significantly enhance your web application, making Vue.js a versatile and accessible tool for web developers of all skill levels. 

In the next post, we'll explore the Hello World example and understand every aspect of this coding. See you there!
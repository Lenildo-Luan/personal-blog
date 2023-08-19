import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Lenildo Luan',
  description: 'Personal blog about programming and Front-End Development',
  cleanUrls: true,
  head: [
    ['meta', { name: 'twitter:site', content: '@lenildoluan_dev' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://2.gravatar.com/avatar/1d7a7642e5705edc116ed19d4fe64d87'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://2.gravatar.com/avatar/1d7a7642e5705edc116ed19d4fe64d87'
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,400;10..48,500;10..48,700;10..48,800&display=swap'
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'NYHGSGQV',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {},
      'window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };'
    ],
    [
      'script',
      {
        src: '/_vercel/insights/script.js',
        defer: ''
      }
    ]
  ],
  buildEnd: genFeed
})

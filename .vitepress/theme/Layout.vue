<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="bg-gray-950">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="The Vue Point">
          <img
            class="inline-block mr-2"
            style="width: 50px; height: auto; border-radius: 50%"
            alt="logo"
            src="https://2.gravatar.com/avatar/1d7a7642e5705edc116ed19d4fe64d87"
          />
          <span
            v-if="!frontmatter.index"
            class="hidden md:inline dark:text-white"
          >
            Lenildo Luan
          </span>
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://www.linkedin.com/in/lenildoluan/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://twitter.com/lenildoluan_dev"
            target="_blank"
            rel="noopener"
          >
            Twitter
          </a>
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/Lenildo-Luan"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>

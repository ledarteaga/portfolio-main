<template>
  <NuxtPage />
</template>


<script setup lang="ts">

useHead({
  title: 'Luis Arteaga | Front End Developer',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Soy un desarrollador front end con experiencia en Typescript, Vue 3, Nuxt y Flutter' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'author', content: 'Luis Arteaga' },
    { name: 'keywords', content: 'Vue.js, Nuxt.js, JavaScript, Front End, Desarrollador, Flutter, Nuxt, Dart, Typescript, Html, Css, Sass, Tailwind' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' }
  ]
})
</script>
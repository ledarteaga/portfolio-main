<template>
  <div v-if="pending">
    El contenido esta cargando
  </div>
  <div v-else-if="error">
    Error: {{ error.message }}
  </div>

  <div v-else>
    <p class="text-2xl font-bold ml-16 px-24 mb-8">
      Mis proyectos
    </p>
    <Carousel :items-to-show="4" :autoplay="5000" :wrap-around="true">
      <Slide v-for="slide in repos" :key="slide.id">
        <RepositoryCard :repo="slide" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import type { iRepoDetails } from '~/types';

const repos = ref<iRepoDetails[]>([])

  const config = useRuntimeConfig();

  const { pending, error } = useFetch('/users/ledarteaga/repos', {
    headers: {
      authorization: 'Bearer ' + config.public.token,
    },
    baseURL: config.public.baseURL,
    onResponse ({ request, response, options }) {
      repos.value = response._data.map((e:any) => e as iRepoDetails)
      // Process the response data
  },
  },);
</script>

<template>
  <LoadingPlaceholder v-if="pending" />
  <ErrorPlaceholder v-else-if="error" />
  <div v-else>
    <Vue3Marquee :duration="120">
      <RepositoryCard class=" mx-10" v-for="slide in repos" :key="slide.id" :repo="slide" />

    </Vue3Marquee>
  </div>
</template>

<script lang="ts" setup>

import type { iRepoDetails } from '~/types';
import LoadingPlaceholder from './LoadingPlaceholder.vue'

const repos = ref<iRepoDetails[]>([])

const config = useRuntimeConfig();

const { pending, error } = useFetch('/users/ledarteaga/repos', {
  headers: {
    authorization: 'Bearer ' + config.public.token,
  },
  baseURL: config.public.baseURL,
  onResponse({ request, response, options }) {
    repos.value = response._data.map((e: any) => e as iRepoDetails)
    // Process the response data
  },
},);
</script>

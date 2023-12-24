<template>
  <a :href="repo.html_url" target="_blank">
    <div class="flex flex-col w-72  h-52 md:h-52 rounded-md bg-gray-800 shadow px-3 py-2">

      <div>
        <p class="text-lg font-bold capitalize">
          {{ repo.name }}
        </p>
      </div>
      <div class=" flex-grow">
        <p class="text-base  ">
          {{ repo.description }}
        </p>
      </div>
      <div class="footer flex justify-between">
        <p class="text-xs font-bold">
          {{ $dayjs(repo.created_at).format('DD/MM/YYYY') }}
        </p>

        <p v-if="repo.name" class="text-xs font-bold">
          <RepositoryLanguages :repo-name="repo.name" />
        </p>
      </div>

    </div>

  </a>
</template>

<script setup lang="ts">
  import type { iRepoDetails } from '~/types';

  interface Props {
    repo: iRepoDetails
  }

  defineProps<Props>()
</script>

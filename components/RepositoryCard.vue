<template>
  <a
    :href="repo.html_url
    "
    target="_blank"
  >
    <UCard class=" w-72 h-full h-52">
      <template #header>
        <p class="capitalize font-bold">
          {{ repo.name }}
        </p>
      </template>

      <p class="text-sm  whitespace-pre-line">
        {{ repo.description }}
      </p>

      <template #footer>
        <div class="flex justify-between items-center">
          <p class="font-bold">
            {{ repo.language }}
          </p>
          <p class="font-semibold">
            {{ $dayjs(repo.updated_at).format('DD/MM/YYYY') }}
          </p>
        </div>
      </template>
    </UCard></a>
</template>

<script setup lang="ts">
import type { iRepoDetails } from '~/types';

    interface Props {
        repo: iRepoDetails
    }

    defineProps<Props>()
</script>

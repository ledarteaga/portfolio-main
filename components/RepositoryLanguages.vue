<template>
    <div class="flex gap-1">
        <Icon v-for="i in formattedLaguages" :key="i" size="14" :name="'vscode-icons:file-type-' + i.toLowerCase()" />
    </div>
</template>

<script setup lang="ts">
    interface Props {
        repoName: string
    }
    const props = defineProps<Props>()
    const config = useRuntimeConfig();
    const languages = ref<Record<string, number>>();
    const formattedLaguages = computed(() => languages.value ? Object.keys(languages.value) : [])

    const { pending, error } = useFetch(`repos/ledarteaga/${props.repoName}/languages`, {
        headers: {
            authorization: 'Bearer ' + config.public.token,
        },
        baseURL: config.public.baseURL,
        onResponse({ request, response, options }) {
            languages.value = response._data
        },
    }
    )
</script>

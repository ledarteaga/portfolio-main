<template>
    <div class="flex gap-2">
        <Icon v-for="i in formattedLaguages" :key="i" size="23" :name="'devicon:' + formatIconName(i.toLowerCase())" />
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
    })

    const formatIconName = (s: string) => {
        switch (s) {
            case 'css':
            case 'less':
                return 'css3';
            case 'vue':
                return 'vuejs';
            case 'html':
                return 'html5';
            case 'scss':
                return 'sass';
            case 'shell':
                return 'powershell';
            case 'objective-c':
                return 'powershell';
            case 'asp.net':
                return 'dot-net';
            case 'c+':
            case 'c#':
            case 'c++':
                return 'csharp';

            default:
                return s;
        }
    }

</script>

<template>
    <Vue3Marquee :duration="120">
        <USkeleton class="h-52 w-60 mx-6" v-for="slide in 10" :key="slide" />

    </Vue3Marquee>
</template>

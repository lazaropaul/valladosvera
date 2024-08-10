<script setup>

    defineProps({
        image: String,
        title: String,
        subtitle: String
    })

</script>

<template>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">{{ text }}</p>
        </div>

    </div>
</template>
<script setup>
    const props = defineProps({
        image: String,
        title: String,
        description: String,
        item: Number,
    })
</script>

<template>
    <a @click="$emit('openModal')">
        <img :src="props.image" :alt="`Proyecto ${props.title}`"
        class="h-64 w-full object-cover transition-transform group-hover:scale-105"
        />
    <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 transition-opacity flex items-end p-6">
        <div class="text-white w-10/12">
            <h3 class="font-bold text-lg">{{ props.title }}</h3>
            <p class="text-sm text-white/80">{{ props.description }}</p>
        </div>
        <div class="flex pb-3 justify-center">
            <button class="text-sm p-1 rounded-md bg-orange-500 hover:bg-orange-600 text-white">Ver más</button>
        </div>

    </div>
</a>
    
</template>
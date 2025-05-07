<script setup>

    const props = defineProps({
        image: String,
        title: String,
        description: String,
    })

</script>

<template>
<!-- service.image, service.title, service.description -->
<div class="h-48 overflow-hidden">
                                <img :src="props.image" :alt="props.title"
                                    class="h-full w-full object-cover transition-transform hover:scale-105" />
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">{{ props.title }}</h3>
                                <p class="text-gray-600 mb-4">{{ props.description }}</p>
                                <a href="#" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                                    Más información
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="ml-1 h-4 w-4">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </a>
                            </div>
</template>
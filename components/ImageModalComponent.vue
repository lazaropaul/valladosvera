<script setup>
    const props = defineProps({
        image: String,
        alt: String,
    })
</script>

<template>
        <UModal>
            <UCard>
                <div class="space-y-2">
                    <img :src="props.image" :alt="props.alt" class="w-full h-auto object-cover" />
                </div>
            </UCard>
        </UModal>
</template>
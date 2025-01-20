<script setup>
defineProps({ //TODO: Poner prompt para img
    title: String,
    text: String,
})
</script>

<template>
    <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg min-h-[48vh] h-auto">
        <img class="w-full object-cover h-[25vh]" src="/main4.jpeg" alt="Sunset in the mountains" />
        <div class="flex flex-col justify-center h-auto">
            <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">{{ title }}</div>
                <p class="text-base text-gray-700">{{ text }}</p>
            </div>
            <div class="px-6 py-4 flex justify-end">
                <!-- <Button buttonText="Saber más" class="bg-orange-500 rounded-md text-white font-bold w-full" /> -->
            </div>
        </div>
    </div>
</template>
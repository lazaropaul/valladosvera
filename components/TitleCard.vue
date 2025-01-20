<script setup>
defineProps({
        title: String,
        link: String,
        image: String
    })
</script>

<template> <!-- TODO: Eliminar si no s'utilitzen -->
    <!-- <NuxtLink :to="link"> Per referenciar variables en components, posar ":" al principi -->
        <div :style="`background-image: url(${image})`" class="bg-cover mt-5 md:w-[100vh] w-full h-[50vh]"> <!-- Per referenciar vars en style, :style="${hola}"-->
            <div class="h-full bg-gradient-to-t from-black/70 to-transparent">
                <div class="h-full w-full flex flex-col justify-end p-10">
                    <h3 class="text-white text-3xl font-bold">{{ title }}</h3>
                </div>
            </div>
        </div>
    <!-- </NuxtLink> -->
</template>
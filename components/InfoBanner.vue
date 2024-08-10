<script setup>
defineProps({
    imagePosition: Boolean,
    title: String,
    text: String,
})

//Funcion para saber si estamos en un dispositivo movil
const isMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

</script>

<template>
    <div v-if="imagePosition" class="md:flex w-full md:px-[20vh] md:py-9">
        <div
            class="md:flex md:flex-col justify-center md:mt-2 py-10 md:px-20 px-10 md:w-[30vw] w-full md:h-[50vh] h-full">
            <div class="flex flex-col justify-center gap-10">
                <h2 class="text-4xl font-bold text-left">{{ title }}</h2>
                <p class="text-xl text-left">{{ text }}</p>
                <Button button-text="Saber más" class="text-xl text-left text-black bg-orange-500" />
                <!-- La diferencia entre el binding con : y sin es que el de : es dinamico, para variables, y el sin, es para texto y demas -->
            </div>
        </div>
        <div class="md:w-[50vw] md:h-[50vh]">
            <NuxtImg src="/main8.jpeg" class="object-cover w-full h-full mt-5 md:mt-5" />
        </div>
    </div>
    <div v-else>
        <div v-if="!isMobile()">
            <desktop class="flex w-full px-[20vh] mt-[10vh]"> <!-- No me gusta ponerlo en el desktop pero estos estilos tienen que afectar a los de abajo -->
                <div class="w-[50vw] h-[60vh]">
                    <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full" />
                </div>
                <div class="flex flex-col justify-top mt-12 py-10 px-20 w-[50vw] h-full gap-10">
                    <h2 class="text-4xl font-bold text-left">{{ title }}</h2>
                    <p class="text-xl text-left">{{ text }}</p>
                    <Button button-text="Pedir presupuesto" class="text-xl text-left text-black bg-orange-500" />
                </div>
            </desktop>
        </div>
        <div v-else>
            <mobile>
                <div class="flex flex-col gap-8 px-10 mt-10">
                    <h2 class="text-4xl font-bold text-left">{{ title }}</h2>
                    <p class="text-xl text-left">{{ text }}</p>
                    <Button button-text="Pedir presupuesto" class="text-xl text-left text-black bg-orange-500" />
                </div>
                <div class="mt-10">
                    <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full" />
                </div>
            </mobile>
        </div>

    </div>
</template>
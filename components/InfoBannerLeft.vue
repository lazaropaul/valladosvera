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
    <div>
        <div>
            <div v-if="isMobile()"> <!-- TODO: Fusionar el isMobile i el !isMobile en un sol div-->
                <div class="md:flex">
                    <div class="flex flex-col gap-8 px-10 mt-10 md:w-2/4">
                        <h2 class="text-5xl font-bold text-left">{{ title }}</h2>
                        <p class="text-xl text-left">{{ text }}</p>
                        <Button button-text="Ver todos los materiales"
                            class="text-xl text-left text-white rounded-md bg-orange-500 font-semibold pl-4" />
                    </div>
                    <div class="mt-10 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[60vh] w-full md:w-full" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="md:flex h-auto"> <!-- TODO: FULL HEIGHT SCREEN -->
                    <div class="flex flex-col justify-around md:w-5/12 pl-24 py-10 mt-10 gap-8">
                        <div class="flex md:flex-col 3xl:flex-row gap-8">
                            <h2 class="text-5xl font-bold text-left">{{ title }}</h2>
                            <p class="text-xl text-left">{{ text }}</p>
                        </div>
                        <Button button-text="Ver todos los materiales"
                            class="text-xl text-left text-white rounded-md bg-orange-500 font-semibold pl-4" />
                    </div>
                    
                    <div class="mt-10 md:px-20 md:w-7/12">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[55vh] w-full md:w-full" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
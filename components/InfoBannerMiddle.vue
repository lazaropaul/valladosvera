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
        <div class="h-auto">
            <div v-if="isMobile()">
                <div class="md:flex">
                    <div class="flex flex-col gap-8 px-10 mt-10 md:w-2/4">
                        <h2 class="text-5xl font-bold text-left">{{ title }}</h2>
                        <p class="text-xl text-left">{{ text }}</p>
                        <Button button-text="Ver todos los materiales"
                            class="text-xl text-left text-white rounded-md bg-orange-500 font-semibold pl-4" />
                    </div>
                </div>
                <div class="md:flex mb-5">
                    <div class="mt-5 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                    <div class="mt-5 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                    <div class="mt-5 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                    <div class="mt-5 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="flex flex-col gap-8 px-10 mt-10 md:w-full">
                    <h2 class="text-5xl font-bold text-left">{{ title }}</h2>
                    <p class="text-xl text-left">{{ text }}</p>
                    <Button button-text="Ver todos los materiales"
                        class="text-xl text-left text-white rounded-md bg-orange-500 font-semibold pl-4" />
                </div>
                <div class="md:flex">
                    <div class="mt-10 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                    <div class="mt-10 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                    <div class="mt-10 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                    <div class="mt-10 md:px-10">
                        <img src="/main5.jpeg" alt="Background Image" class="object-cover h-[50vh] w-full px-5 md:w-auto" />
                    </div>
                </div>
            </div>

        </div>
</template>
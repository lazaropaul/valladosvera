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
        <div>
            <div class="flex flex-col gap-8 md:px-20 px-10 mt-10 mb-10 md:w-full">
                <h2 class="text-5xl font-bold text-right">{{ title }}</h2>
                <p class="text-xl text-right">{{ text }}</p>
            </div>
            <div class="md:flex md:px-20 px-10 gap-5 mb-20 w-full">
                <TitleCard title="Cerramientos" image="/cerramiento.webp"/>
                <TitleCard title="Vallados" image="/vallado_sarria.webp"/>
                <TitleCard title="Puertas metalicas" image="/puerta.webp"/>
                <TitleCard title="Trabajos metalúrgicos" image="/trabajo_metalurgico.webp"/>
            </div>
        </div>

    </div>
</template>
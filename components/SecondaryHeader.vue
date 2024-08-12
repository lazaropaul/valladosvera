<script setup>

defineProps({
    headline: String,
    headImage: String,
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
  <!-- <NuxtImg src="/main.jpeg" /> -->
  <div class="w-full h-auto md:z-49">
    <div
      class="bg-[url('/main.png')] h-3/4 bg-center bg-cover w-full flex md:flex-col justify-center md:p-56 md:p-20 py-56 px-10">
      <div class="md:w-2/4">
        <desktop v-if="!isMobile()">
          <h1 class="text-4xl font-bold md:leading-tight md:text-5xl"><mark
              class="px-3 py-1 text-white bg-orange-500 ">Protección y Calidad en Cada</mark></h1>
          <h1 class="text-4xl font-bold md:leading-tight md:text-5xl"><mark
              class="px-3 py-1 text-white bg-orange-500">Vallado</mark></h1>
        </desktop>
        <mobile v-else>
          <h1 class="text-4xl font-bold leading-tight md:text-5xl"><mark
              class="px-3 py-1 text-white bg-orange-500 ">Cerramientos </mark></h1>
          <h1 class="text-4xl font-bold leading-tight md:text-5xl"><mark
                class="px-3 py-1 text-white bg-orange-500 ">metalicos, PVC,</mark></h1>
          <h1 class="text-4xl font-bold leading-tight md:text-5xl"><mark
              class="px-3 py-1 text-white bg-orange-500">madera y más</mark></h1>
        </mobile>
      </div>
    </div>
  </div>
</template>
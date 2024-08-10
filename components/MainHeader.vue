<script setup>
    const title1 = "Soluciones a medida para tu hogar o negocio";
    const text1 = "Ofrecemos todo tipo de vallados, puertas y estructuras metalicas, madera, plastico, PVC y demás materiales. Informate aqui de los materiales que disponemos.";
</script>

<template>
    <!-- <NuxtImg src="/main.jpeg" /> -->
     <div class="w-full h-auto md:z-49">
        <div class="bg-[url('/main.png')] h-3/4 bg-center bg-cover w-full flex md:flex-col justify-center md:p-56 md:p-20 py-56 px-10">
          <div class="md:w-2/4">
                <h1 class="text-4xl font-bold md:leading-tight md:text-5xl"><mark class="px-3 py-1 text-white bg-orange-500 ">Protección y Calidad en Cada</mark></h1>
                <h1 class="text-4xl font-bold md:leading-tight md:text-5xl"><mark class="px-3 py-1 text-white bg-orange-500">Vallado</mark></h1>
          </div>
        </div>
        
        <InfoBanner :image-position="true" :title="title1" :text="text1"/>
     </div>
</template>
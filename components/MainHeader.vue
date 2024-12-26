<script setup>
const title1 = "Soluciones a medida para tu hogar o negocio";
const text1 = "Ofrecemos todo tipo de vallados, puertas y estructuras metalicas, madera, plastico, PVC y demás materiales. Informate aqui de los materiales que disponemos.";

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
  <div class="w-full h-lvh md:z-49">
    <div
      class="bg-[url('/main.webp')] h-full bg-center bg-cover w-full flex md:flex-col justify-center md:p-56 md:p-20 px-10">
      <div class="md:w-full flex flex-col justify-center">
        <h1 class="relative z-10 max-w-2xl">
          <!-- <span
            class="bg-orange-500 px-4 py-2 text-3xl md:text-5xl lg:text-6xl text-white font-bold rounded-md shadow-md"> -->
            <mark class="text-5xl lg:text-6xl text-white font-bold">
              Cerramientos, Puertas y Vallados
            </mark>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 768px) {
    mark {
      /* margin: 0 0; */
      line-height: 4rem;
      padding: 0.1em 0.4em;
      border-radius: 0.1em 0.1em;
      background: transparent;
      background-image: linear-gradient(
        #ff7700,
        #ff7700
      );
      /* background-image: linear-gradient(
        to right,
        rgba(255, 225, 0, 0.1),
        rgba(255, 225, 0, 0.7) 4%,
        rgba(255, 225, 0, 0.3)
      ); */
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }

  @media only screen and (min-width: 768px) {
    mark {
      /* margin: 0 0; */
      line-height: 5rem;
      padding: 0.1em 0.1em;
      border-radius: 0;
      background: transparent;
      background-image: linear-gradient(
        #ff7700,
        #ff7700
      );
      /* background-image: linear-gradient(
        to right,
        rgba(255, 225, 0, 0.1),
        rgba(255, 225, 0, 0.7) 4%,
        rgba(255, 225, 0, 0.3)
      ); */
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }

</style>
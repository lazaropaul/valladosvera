<template>
  <div v-if="props.proyectoSeleccionado"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    @click.self="$emit('cerrar')">
    <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="relative">
        <button @click="$emit('cerrar')"
          class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>

        </button>
        <img :src="props.proyectoSeleccionado.imagen" :alt="props.proyectoSeleccionado.titulo"
          class="w-full h-64 md:h-96 object-cover" />
      </div>
      <div class="p-6 md:p-8">
        <div class="flex flex-wrap justify-between items-start gap-4 mb-6">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ proyectoSeleccionado.titulo }}</h2>
            <p class="text-gray-600">{{ props.proyectoSeleccionado.ubicacion }}</p>
          </div>
          <span class="inline-block px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600">
            {{ props.categorias }}
          </span>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Descripción del Proyecto</h3>
          <p class="text-gray-700">{{ props.proyectoSeleccionado.descripcionCompleta }}</p>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Características</h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li v-for="(caracteristica, index) in props.proyectoSeleccionado.caracteristicas" :key="index"
              class="flex items-start">
              <CheckIcon class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ caracteristica }}</span>
            </li>
          </ul>
        </div>

        <div v-if="props.proyectoSeleccionado.galeria && props.proyectoSeleccionado.galeria.length > 0">
          <h3 class="text-xl font-semibold mb-4">Galería de Imágenes</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(imagen, index) in props.proyectoSeleccionado.galeria" :key="index"
              class="relative pb-[75%] overflow-hidden rounded-lg cursor-pointer" @click="ampliarImagen(imagen)">
              <img :src="imagen" :alt="`Imagen ${index + 1} del proyecto ${props.proyectoSeleccionado.titulo}`"
                class="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <NuxtLink to="/#contact"
            class="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
            @click="$emit('cerrar')">
            Solicitar Presupuesto
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  proyectoSeleccionado: {
    type: Object,
    required: true
  },
  categorias: {
    type: Array,
    required: true
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto';
});

</script>
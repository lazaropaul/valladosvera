<template>
    <header
            class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
           <NavBar :scrollTo="scrollTo" :toggleMobileMenu="toggleMobileMenu" />
        </header>
    <slot />
    <footer class="bg-gray-900 text-white py-12 flex justify-center">
            <Footer :footerServices="footerServices.value" :footerLinks="footerLinks.value" /> <!-- TODO: Pass the props to Footer component -->
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const footerServices = ref([
    "Vallados Metálicos",
    "Puertas Automáticas",
    "Cerramientos",
    "Mantenimiento",
]);

const footerLinks = ref([
    "Inicio",
    "Servicios",
    "Proyectos",
    "Nosotros",
    "Contacto",
]);
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
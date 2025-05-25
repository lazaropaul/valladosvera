<template>
    <div class="container flex h-16 items-center justify-between">
        <div class="flex flex-row justify-center gap-2">
            <img src="/logo3.svg?height=25&width=75" alt="Vallados Vera Logo" class="h-24 w-auto" />
        </div>
        <nav class="hidden md:flex items-center gap-6">
            <NuxtLink to="/#" class="text-sm font-medium transition-colors hover:text-orange-500">
                Inicio
            </NuxtLink>
            <NuxtLink to="/#services" class="text-sm font-medium transition-colors hover:text-orange-500">
                Servicios
            </NuxtLink>
            <NuxtLink to="/#projects" class="text-sm font-medium transition-colors hover:text-orange-500">
                Proyectos
            </NuxtLink>
            <!-- <a href="#" class="text-sm font-medium transition-colors hover:text-orange-500" @click="scrollTo('contact')">
                        Nosotros
                    </a> -->
            <NuxtLink to="/#contact" class="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white">
                Contactar
            </NuxtLink>
        </nav>
        <button class="md:hidden p-2 rounded-md border border-gray-200" @click="toggleMobileMenu">
            <span class="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
        </button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>
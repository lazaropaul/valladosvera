<template>
    <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <!-- Main navbar container with higher z-index -->
        <div class="bg-gray/50 backdrop-blur-3xl flex justify-between items-center w-[90%] h-[7vh] p-7 mt-6 mx-auto rounded relative z-50">
            <!-- Logo container with highest z-index -->
            <div class="relative z-50">
                <desktop v-if="!isMobile">
                    <img class="w-32 cursor-pointer" src="/logo3.png" alt="..." />
                </desktop>
                <mobile v-else>
                    <img class="w-12 cursor-pointer" src="/logo4.svg" alt="..." />
                </mobile>
            </div>

            <!-- Navigation Links -->
            <!-- right-0 perque sempre quedi la vora dreta del div al costat dret de la pantalla -->
            <div :class="[
                'fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto',
                'bg-white md:bg-transparent',
                'duration-500 ease-in-out',
                'flex flex-col md:flex-row items-center justify-center',
                'z-40',
                isMenuOpen && isMobile ? null : 'translate-x-full',
                'md:!translate-x-0'
            ]">
                <!-- Optional backdrop for mobile menu -->
                <div v-if="isMenuOpen" class="fixed inset-0 bg-opacity-50 md:hidden z-40" @click="toggleMenu">
                </div>

                <ul class="flex text-slate-100 md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 relative z-50">
                    <li>
                        <NuxtLink class="text-3xl font-semibold hover:text-orange-500" to="/">
                            Inicio
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-3xl font-semibold hover:text-orange-500" to="/servicios">
                            Servicios
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-3xl font-semibold hover:text-orange-500" to="/nosotros">
                            Nosotros
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Contact Button and Menu Toggle with high z-index -->
            <div class="flex items-center gap-6 relative z-50">
                <NuxtLink to="/contacto">
                    <Button buttonText="Contactar" class="text-white bg-orange-500 hover:bg-orange-600" />
                </NuxtLink>
                <button @click="toggleMenu" class="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
                    <NuxtImg :src="isMenuOpen ? '/close-outline.svg' : '/menu-outline.svg'" class="h-14 cursor-pointer"
                        alt="Menu toggle" />
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
    console.log("Mobile:" + isMobile.value);
    console.log("Menu:" + isMenuOpen.value);
}

//Funcions per saber si s'esta resizing la pagina
onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile)
})

</script>

<style scoped>
.translate-x-full {
    transform: translateX(100%);
}

.translate-x-0 {
    transform: translateX(0);
}
</style>
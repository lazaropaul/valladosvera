<!-- <template> -->
<!-- <NavBar />

    <main> -->
<!-- <MainHeader />

        <div class="md:flex md:flex-col gap-10"> <!-- 2 primers banners
            <InfoBannerLeft :imagePosition="false" :title="title2" :text="text2" />
            <hr class="h-[1px] mx-20 border-gray-400 mt-10"/>
            <InfoBannerMiddle :image-position="true" :title="title1" :text="text1" />
        </div>

        <section>
            <div class="flex-col bg-orange-500 justify-center md:rounded-md md:mx-20 md:mt-0 md:h-auto md:pb-16 md:mb-20">
                <div class="flex md:justify-center">
                    <div class="w-2/4 p-10 md:my-5">
                        <h2 class="text-6xl font-bold text-center text-white">Últimos trabajos</h2>
                        <!-- <p class="text-center">Conoce todos nuestros servicio</p>
                    </div>
                </div>
                <div class="flex justify-center mt-6 md:h-[50vh]">
                    <div class="flex-col justify-between w-full px-10">
                        <ul class="justify-between md:flex md:w-full md:justify-around">
                            <li class="md:p-5">
                                <CardWithButton @open-modal="openModal(1)" title="Instalación de estructuras, puertas y vallados" text="Instalación personalizada de vallados y estructuras metalicas"/>
                            </li> 
                            <li class="md:p-5">
                                <CardWithButton title="Mantenimiento y reparación" text="Instalación personalizada de vallados y estructuras metalicas"/>
                            </li>
                            <li class="md:p-5">
                                <CardWithButton title="Servicio de manitas" text="Instalación personalizada de vallados y estructuras metalicas"/>
                            </li>
                            <li class="md:p-5">
                                <CardWithButton title="Limpieza de parcelas" text="nstalación personalizada de vallados y estructuras metalicas"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        
        <ContactForm />

    </main>

    <footer>
        <Footer />
    </footer> -->

<template>
    <div class="flex min-h-screen flex-col">
        <!-- Header/Navigation -->
        <header
            class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div class="container flex h-16 items-center justify-between">
                <div class="flex items-center gap-2">
                    <img src="/logo3.svg?height=25&width=75" alt="Vallados Vera Logo" class="h-24 w-auto" />
                </div>
                <nav class="hidden md:flex items-center gap-6">
                    <a href="#" class="text-sm font-medium transition-colors hover:text-orange-500">
                        Inicio
                    </a>
                    <a href="#" class="text-sm font-medium transition-colors hover:text-orange-500">
                        Servicios
                    </a>
                    <a href="#" class="text-sm font-medium transition-colors hover:text-orange-500">
                        Proyectos
                    </a>
                    <a href="#" class="text-sm font-medium transition-colors hover:text-orange-500">
                        Nosotros
                    </a>
                    <button class="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white">
                        Contactar
                    </button>
                </nav>
                <button class="md:hidden p-2 rounded-md border border-gray-200" @click="toggleMobileMenu">
                    <span class="sr-only">Toggle menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-6 w-6">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>
            </div>
        </header>

        <main class="flex-1">
            <!-- Hero Section -->
            <section class="relative">
                <div class="absolute inset-0 bg-black/40 z-10"></div>
                <div class="relative h-[70vh] overflow-hidden">
                    <img src="/cerramiento.webp" alt="Vallados y Cerramientos de Calidad"
                        class="h-full w-full object-cover" />
                </div>
                <div class="absolute inset-0 z-20 flex items-center">
                    <div class="container">
                        <div class="max-w-xl space-y-4">
                            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                                Cerramientos, Puertas y Vallados
                            </h1>
                            <p class="text-xl text-white/90">
                                Soluciones de alta calidad para proteger y embellecer su propiedad
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    class="px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white">
                                    Solicitar Presupuesto
                                </button>
                                <button
                                    class="px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10">
                                    Ver Proyectos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="py-16 bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nuestros Servicios</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ofrecemos soluciones completas para todo tipo de cerramientos y vallados
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(service, index) in services" :key="index"
                            class="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                            <ServiceCard :title="service.title" :description="service.description"
                                :image="service.image" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Showcase -->
            <section class="py-16">
                <div class="container">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Proyectos Destacados
                            </h2>
                            <p class="text-lg text-gray-600 max-w-2xl">Descubra algunos de nuestros trabajos más
                                recientes</p>
                        </div>
                        <button class="mt-4 md:mt-0 flex items-center px-4 py-2 border rounded-md hover:bg-gray-50">
                            Ver todos los proyectos
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="ml-2 h-4 w-4">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="project in projects" :key="project" class="group relative overflow-hidden rounded-lg">
                            <ProjectCard :image="project.image"
                                :title="`Proyecto ${project.title}`"
                                :description="`Projecte ${project.description}`" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section class="py-16 bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Lo Que Dicen Nuestros
                            Clientes</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(testimonial, index) in testimonials" :key="index"
                            class="bg-white p-6 rounded-lg shadow">
                            <TestimonialCard :name="testimonial.name" :description="testimonial.text"
                                :location="testimonial.location" :stars="5" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="bg-orange-500 py-16">
                <div class="container">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div class="mb-6 md:mb-0 md:mr-8">
                            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                                ¿Listo para mejorar su propiedad?
                            </h2>
                            <p class="text-white/90 text-lg max-w-2xl">
                                Contáctenos hoy mismo para obtener un presupuesto sin compromiso
                            </p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button
                                class="px-6 py-3 text-base font-medium rounded-md bg-white text-orange-500 hover:bg-gray-100">
                                Solicitar Presupuesto
                            </button>
                            <button
                                class="px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10">
                                Llamar Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img src="/placeholder.svg?height=40&width=150" alt="Vallados Vera Logo"
                            class="h-10 w-auto mb-4" />
                        <p class="text-gray-400 mt-4">
                            Más de 15 años de experiencia en cerramientos, vallados y puertas automáticas.
                        </p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-4">Servicios</h3>
                        <ul class="space-y-2">
                            <li v-for="(service, index) in footerServices" :key="index">
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    {{ service }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-4">Enlaces</h3>
                        <ul class="space-y-2">
                            <li v-for="(link, index) in footerLinks" :key="index">
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-4">Contacto</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-5 w-5 text-orange-500 mr-2 mt-0.5">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span class="text-gray-400">Calle Ejemplo 123, Málaga, España</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-5 w-5 text-orange-500 mr-2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <a href="tel:+34600000000" class="text-gray-400 hover:text-white transition-colors">
                                    +34 600 000 000
                                </a>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-5 w-5 text-orange-500 mr-2">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <a href="mailto:info@valladosvera.com"
                                    class="text-gray-400 hover:text-white transition-colors">
                                    info@valladosvera.com
                                </a>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-5 w-5 text-orange-500 mr-2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span class="text-gray-400">Lun-Vie: 9:00 - 18:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © {{ new Date().getFullYear() }} Vallados Vera. Todos los derechos reservados.
                    </p>
                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <span class="sr-only">Facebook</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <span class="sr-only">Instagram</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ImageModalComponent from '~/components/ImageModalComponent.vue';

const mobileMenuOpen = ref(false);
const modal = useModal();

const title2 = "Sobre Nosotros";
const text2 = "Somos especialistas en la fabricación e instalación de vallados, cerramientos y puertas metálicas de alta calidad. " +
    "Nos destacamos por nuestra atención al detalle y nuestro compromiso con la excelencia. Cada proyecto, desde un simple vallado residencial hasta complejos cerramientos industriales, recibe la misma dedicación y profesionalidad. Utilizamos materiales de primera calidad y técnicas avanzadas de soldadura y acabado para garantizar productos duraderos y estéticamente atractivos." +
    "La seguridad y satisfacción de nuestros clientes son nuestra máxima prioridad. Por ello, ofrecemos un servicio integral que incluye asesoramiento técnico, diseño personalizado, fabricación e instalación profesional.";

const title1 = "Servicios";
const text1 = "Seas particular o empresa, adaptamos tu proyecto para que pueda satisfacer tus necesidades";

const openModal = (id) => {
    console.log("Apeerto modal con id: ", id);
    modal.open(ImageModalComponent, { id });
}

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const services = ref([
    {
        title: "Vallados Metálicos",
        description: "Vallados de alta seguridad para todo tipo de propiedades",
        image: "/vallado_sarria.webp?height=400&width=600",
    },
    {
        title: "Puertas Automáticas",
        description: "Puertas con sistemas de automatización de última generación",
        image: "/puerta.webp",
    },
    {
        title: "Cerramientos",
        description: "Soluciones personalizadas para cerramientos de parcelas y jardines",
        image: "/sobre_nosotros.webp?height=400&width=600",
    },
]);

const projects = ref([{
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "/placeholder.svg?height=400&width=600",
},
{
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "/placeholder.svg?height=400&width=600",
},
{
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "/placeholder.svg?height=400&width=600",
},
{
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
    image: "/placeholder.svg?height=400&width=600",
},
{
    title: "Proyecto 5",
    description: "Descripción del proyecto 5",
    image: "/placeholder.svg?height=400&width=600",
},
{
    title: "Proyecto 6",
    description: "Descripción del proyecto 6",
    image: "/placeholder.svg?height=400&width=600",
},
]);

const testimonials = ref([
    {
        name: "María G.",
        location: "Marbella",
        text: "Excelente trabajo y profesionalidad. El vallado quedó perfecto y en el tiempo acordado.",
    },
    {
        name: "Antonio R.",
        location: "Estepona",
        text: "Muy satisfecho con la puerta automática. Funciona perfectamente y el acabado es de gran calidad.",
    },
    {
        name: "Laura M.",
        location: "Málaga",
        text: "Recomiendo totalmente sus servicios. Atentos, profesionales y con precios muy competitivos.",
    },
]);

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
.container {
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 640px) {
    .container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .container {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
</style>
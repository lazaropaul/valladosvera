<template>
    <div class="flex min-h-screen flex-col">
        <!-- Header/Navigation -->

        <main class="flex-1">
            <!-- Hero Section -->
            <section class="relative" id="home">
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
                                Solicita tu presupuesto personalizado <span class="bg-orange-500 p-1 rounded ">gratuito</span> y sin compromiso.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    class="px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white"
                                    @click="scrollTo('contact')">
                                    Solicitar Presupuesto
                                </button>
                                <button
                                    class="px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10"
                                    @click="scrollTo('call')">
                                    Contactar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section id="services" class="py-16 bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nuestros Servicios</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ofrecemos soluciones completas para todo tipo de cerramientos y vallados
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div v-for="(service, index) in services" :key="index"
                            class="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                            <ServiceCard :title="service.title" :description="service.description"
                                :image="service.image" @open-modal="openModal(index)" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Showcase -->
            <section id="projects" class="py-16">
                <div class="container">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Proyectos Destacados
                            </h2>
                            <p class="text-lg text-gray-600 max-w-2xl">Descubra algunos de nuestros trabajos más
                                recientes</p>
                        </div>
                        <NuxtLink to="/proyectos" class="mt-4 md:mt-0 flex items-center px-4 py-2 border rounded-md hover:bg-gray-50">
                            Ver todos los proyectos
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="ml-2 h-4 w-4">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="project in projects" :key="project"
                            class="group relative overflow-hidden rounded-lg">
                            <ProjectCard :image="project.image" :title="`${project.title}`"
                                :description="`${project.description}`" @open-modal="openModal(project.image)" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section id="testimonials" class="py-16 bg-gray-50">
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
                            class="bg-white p-8 rounded-lg shadow">
                            <TestimonialCard :name="testimonial.name" :description="testimonial.text"
                                :location="testimonial.location" :stars="5" />
                        </div>
                    </div>
                </div>
            </section>


            <!-- Contact Form -->
            <section id="contact" class="py-16">
                <div class="container">
                    <ContactForm />
                </div>
            </section>

            <!-- CTA Section -->
            <section id="call" class="bg-orange-500 py-16">
                <div class="container">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div class="mb-6 md:mb-0 md:mr-8">
                            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                                Prefieres otros metodos de contacto?
                            </h2>
                            <p class="text-white/90 text-lg max-w-2xl">
                                Estaremos encantados de atenderte a través de WhatsApp o por teléfono.
                            </p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/34627065738?text=Hola!%20Estoy%20interesado/a%20en%20obtener%20un%20presupuesto">
                                <button
                                    class="px-6 py-3 text-base font-medium rounded-md bg-white text-orange-500 hover:bg-gray-100">
                                    WhatsApp
                                </button>
                            </a>
                            <a href="tel:34627065738">
                                <button
                                class="px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10">
                                    Llamar
                                </button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImageModalComponent from '~/components/ImageModalComponent.vue';

const mobileMenuOpen = ref(false);
const modal = useModal();

const title2 = "Sobre Nosotros";
const text2 = "Somos especialistas en la fabricación e instalación de vallados, cerramientos y puertas metálicas de alta calidad. " +
    "Nos destacamos por nuestra atención al detalle y nuestro compromiso con la excelencia. Cada proyecto, desde un simple vallado residencial hasta complejos cerramientos industriales, recibe la misma dedicación y profesionalidad. Utilizamos materiales de primera calidad y técnicas avanzadas de soldadura y acabado para garantizar productos duraderos y estéticamente atractivos." +
    "La seguridad y satisfacción de nuestros clientes son nuestra máxima prioridad. Por ello, ofrecemos un servicio integral que incluye asesoramiento técnico, diseño personalizado, fabricación e instalación profesional.";

const openModal = (image) => {
    console.log("Abierto modal con imagen: ", image);
    modal.open(ImageModalComponent, {
        image: image,
        alt: "Imagen del proyecto"
    });
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
    {
        title: "Vallados de PVC",
        description: "Soluciones modernas, estéticas y duraderas",
        image: "/main5.jpeg",
    },
]);

const projects = ref([{
    title: "Cerramiento personalizado",
    description: "Con soldadura de alta calidad y materiales resistentes",
    image: "/contacto.webp",
},
{
    title: "Vallado ganadero",
    description: "Con resistencia a la corrosión y durabilidad",
    image: "/IMG_2466.webp",
},
{
    title: "Vallado domestico",
    description: "Con diseño moderno y poco invasivo visualmente",
    image: "/IMG_2404.webp",
},
{
    title: "Cerramiento para patio",
    description: "Estructura metálica soldada con acero galvanizado",
    image: "/trabajo_metalurgico.webp",
},
{
    title: "Vallado de PVC",
    description: "Con diseño moderno y resistente",
    image: "/main5.jpeg",
},
{
    title: "Vallado para parcela",
    description: "Instalado en pendiente y con diseño personalizado",
    image: "/main7.jpeg",
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

const footerServices = [
    "Vallados Metálicos",
    "Puertas Automáticas",
    "Cerramientos",
    "Mantenimiento",
];

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
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

@media (min-width: 640px) {
    .container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .container {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}
</style>
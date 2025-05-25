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
                                Solicita tu presupuesto personalizado <span
                                    class="bg-orange-500 p-1 rounded ">gratuito</span> y sin compromiso.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 pt-4">
                                <NuxtLink to="/#contact"
                                    class="px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white">
                                    Solicitar Presupuesto
                                </NuxtLink>
                                <NuxtLink
                                    class="px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10">
                                    Contactar
                                </NuxtLink>
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
                        <!-- <NuxtLink to="/proyectos"
                            class="mt-4 md:mt-0 flex items-center px-4 py-2 border rounded-md hover:bg-gray-50">
                            Ver todos los proyectos
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="ml-2 h-4 w-4">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </NuxtLink> -->
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="proyecto in proyectos" :key="proyecto"
                            class="group relative overflow-hidden rounded-lg">
                            <ProjectCard :image="proyecto.imagen" :title="`${proyecto.titulo}`"
                                :description="`${proyecto.descripcionCorta}`" @click="verDetalles(proyecto.id)" />
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
                            <a
                                href="https://wa.me/34627065738?text=Hola!%20Estoy%20interesado/a%20en%20obtener%20un%20presupuesto">
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

            <!-- Project modals -->
            <ProjectDetailsModal v-if="proyectoSeleccionado" :proyectoSeleccionado="proyectoSeleccionado"
                :categorias="getCategoriaName(proyectoSeleccionado.categoriaId)" @cerrar="cerrarModal"
                @ampliar-imagen="ampliarImagen" @click.self="cerrarModal" />

            <div v-if="imagenAmpliada"
                class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                @click.self="cerrarImagenAmpliada">
                <button @click="cerrarImagenAmpliada"
                    class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                    <XIcon class="h-6 w-6 text-gray-700" />
                </button>
                <img :src="imagenAmpliada" alt="Imagen ampliada" class="max-w-full max-h-[90vh] object-contain" />
            </div>

        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ImageModalComponent from '~/components/ImageModalComponent.vue';

const mobileMenuOpen = ref(false);
const modal = useModal();

//Estados
const categoriaActiva = ref('todos')
const proyectoSeleccionado = ref(null)
const imagenAmpliada = ref(null)

const openModal = (image) => {
    console.log("Abierto modal con imagen: ", image);
    modal.open(ImageModalComponent, {
        image: image,
        alt: "Imagen del proyecto"
    });
};

const services = ref([
    {
        title: "Vallados",
        description: "Vallados de alta seguridad para todo tipo de propiedades",
        image: "/vallado_sarria.webp?height=400&width=600",
    },
    {
        title: "Puertas",
        description: "Puertas simples o con sistemas de automatización de última generación",
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

const testimonials = ref([
    {
        name: "Tatiana V.",
        location: "Barcelona",
        text: "Excelente trabajo y profesionalidad. El vallado quedó perfecto y en el tiempo acordado.",
    },
    {
        name: "Ruth S.",
        location: "Tarragona",
        text: "Muy satisfecho con la puerta automática. Funciona perfectamente y el acabado es de gran calidad.",
    },
    {
        name: "Paul L.",
        location: "Barcelona",
        text: "Recomiendo totalmente sus servicios. Atentos, profesionales y con precios muy competitivos.",
    },
]);

// Categorías de proyectos
const categorias = ref([
    { id: 'todos', nombre: 'Todos los proyectos' },
    { id: 'vallados', nombre: 'Vallados' },
    { id: 'cerramientos', nombre: 'Cerramientos' },
    { id: 'puertas', nombre: 'Puertas' },
    { id: 'automatismos', nombre: 'Automatismos' }
])

// Datos de ejemplo de proyectos
const proyectos = ref([
    {
        id: 1,
        titulo: 'Vallado Perimetral Residencial',
        categoriaId: 'vallados',
        imagen: '/cerramiento_sarria/4.JPEG',
        galeria: [
            '/cerramiento_sarria/4.JPEG',
            '/cerramiento_sarria/3.JPEG',
            '/cerramiento_sarria/2.JPEG',
            '/cerramiento_sarria/1.JPEG'
        ],
        ubicacion: 'Barcelona',
        descripcionCorta: 'Instalación de vallado perimetral de malla metálica con postes de acero galvanizado.',
        descripcionCompleta: 'Proyecto completo de vallado perimetral para una vivienda. Se instaló un vallado de malla metálica con postes de acero galvanizado, proporcionando seguridad y delimitación clara de la propiedad sin sacrificar la estética del entorno. El proyecto incluyó la preparación del terreno, cimentación para los postes y acabado profesional.',
        caracteristicas: [
            'Malla metálica de alta resistencia',
            'Postes de acero galvanizado',
            'Altura de 2 metros',
            'Tratamiento anticorrosión',
            'Instalación completa en 2 días',
        ]
    },
    {
        id: 2,
        titulo: 'Cerramiento de Terraza',
        categoriaId: 'cerramientos',
        imagen: '/cerramiento_cunit/2.JPEG',
        galeria: [
            '/cerramiento_cunit/4.JPEG',
            '/cerramiento_cunit/3.JPEG',
            '/cerramiento_cunit/2.JPEG',
            '/cerramiento_cunit/1.JPEG'
        ],
        ubicacion: 'Cunit, Tarragona',
        descripcionCorta: 'Cerramiento metálico soldado para patio con estructura robusta y diseño personalizado.',
        descripcionCompleta: 'Diseño y ejecución de un cerramiento metálico para el patio de una vivienda unifamiliar. La estructura fue completamente soldada en obra, garantizando una resistencia y estabilidad superiores. El diseño se adaptó a las medidas y estilo del espacio, combinando funcionalidad y estética. Se aplicó un tratamiento anticorrosivo para asegurar su durabilidad en ambientes húmedos.',
        caracteristicas: [
            'Estructura metálica soldada a medida',
            'Tratamiento anticorrosivo de larga duración',
            'Diseño adaptado al espacio del cliente',
            'Acabado con pintura poliuretánica',
            'Alta resistencia mecánica y estructural',
            'Instalación profesional en obra'
        ]
    },
    {
        id: 3,
        titulo: 'Vallado Disimulado Residencial',
        categoriaId: 'vallados',
        imagen: '/cerramiento_cobrera/2.JPEG',
        galeria: [
            '/cerramiento_cobrera/4.JPEG',
            '/cerramiento_cobrera/3.JPEG',
            '/cerramiento_cobrera/2.JPEG',
            '/cerramiento_cobrera/1.JPEG'
        ],
        ubicacion: 'Baix Llobregat, Barcelona',
        descripcionCorta: 'Vallado disimulado para vivienda con estructura metálica oculta y acabado vegetal decorativo.',
        descripcionCompleta: 'Diseño e instalación de un sistema de vallado disimulado en una vivienda unifamiliar. El proyecto integra un cerramiento de seguridad con un diseño estético que se mimetiza con el entorno ajardinado. Se emplearon materiales compuestos para ofrecer privacidad y protección sin afectar la estética del jardín. La estructura metálica permanece oculta, reforzando la seguridad de forma discreta.',
        caracteristicas: [
            'Integración estética con el entorno',
            'Sistema de anclaje antivandálico',
            'Instalación rápida y limpia',
            'Bajo mantenimiento'
        ]
    },
    {
        id: 4,
        titulo: 'Vallado ganadero',
        categoriaId: 'vallados',
        imagen: '/cerramiento_santcu/1.JPEG',
        galeria: [
            '/cerramiento_santcu/1.JPEG',
            '/cerramiento_santcu/2.JPEG',
            '/cerramiento_santcu/3.JPEG'
        ],
        ubicacion: 'Sant Cugat del Vallès, Barcelona',
        descripcionCorta: 'Vallado ganadero instalado en tierra para delimitar terreno y proteger animales.',
        descripcionCompleta: 'Instalación de un vallado ganadero en una finca rural, destinado a la delimitación de terreno y contención segura de animales. El cerramiento fue anclado directamente en tierra mediante postes de madera y malla ganadera de alta resistencia. Se diseñó para soportar condiciones climáticas adversas y el empuje del ganado, garantizando durabilidad y seguridad.',
        caracteristicas: [
            'Postes de madera clavados en tierra',
            'Malla ganadera de alta resistencia',
            'Diseño resistente al empuje animal',
            'Instalación rápida y adaptable al terreno',
            'Protección contra la corrosión',
            'Ideal para animales'
        ]
    },
    {
        id: 5,
        titulo: 'Vallado PVC',
        categoriaId: 'vallados',
        imagen: '/cerramiento_pvc/4.JPEG',
        galeria: [
            '/cerramiento_pvc/4.JPEG',
            '/cerramiento_pvc/3.JPEG',
            '/cerramiento_pvc/2.JPEG',
            '/cerramiento_pvc/1.JPEG'
        ],
        ubicacion: 'Cunit, Tarragona',
        descripcionCorta: 'Vallado de PVC decorativo y funcional para cerramiento perimetral de vivienda.',
        descripcionCompleta: 'Suministro e instalación de un vallado de PVC en el perímetro de un domicilio en Tarragona. El cerramiento combina estética y funcionalidad, ofreciendo privacidad y delimitación del espacio sin necesidad de mantenimiento. El material, resistente a la intemperie y a los rayos UV, mantiene su color y acabado con el paso del tiempo. Su diseño modular permite una instalación limpia y rápida.',
        caracteristicas: [
            'Paneles de PVC de alta resistencia',
            'Acabado en blanco con protección UV',
            'Estructura ligera y duradera',
            'Instalación rápida y sin obra compleja',
            'Libre de mantenimiento y fácil limpieza',
        ]
    },
    {
        id: 6,
        titulo: 'Puertas de emergencia y acceso',
        categoriaId: 'puertas',
        imagen: '/puertas_santboi/3.JPEG',
        galeria: [
            '/puertas_santboi/1.JPEG',
            '/puertas_santboi/2.JPEG',
            '/puertas_santboi/3.JPEG',
            '/puertas_santboi/4.JPEG'
        ],
         ubicacion: 'Sant Boi de Llobregat, Barcelona',
        descripcionCorta: 'Instalación de puertas de emergencia y acceso con sistemas de seguridad certificados.',
        descripcionCompleta: 'Proyecto de instalación de puertas de emergencia y acceso. Las puertas fueron fabricadas en acero galvanizado con sistema antipánico conforme a normativa europea. Se instalaron mecanismos de cierre automático y barras antipánico. El proyecto garantiza evacuación segura en caso de emergencia y control eficiente de entradas restringidas.',
        caracteristicas: [
            'Puertas de acero galvanizado con tratamiento ignífugo',
            'Sistemas de cierre automático y barra antipánico',
            'Certificación CE según normativa EN 1125',
            'Instalación rápida sin afectar la operatividad del edificio',
        ]
    }
])

const filtrarPorCategoria = (categoriaId) => {
    categoriaActiva.value = categoriaId
}

const getCategoriaName = (categoriaId) => {
    const categoria = categorias.value.find(cat => cat.id === categoriaId)
    return categoria ? categoria.nombre : ''
}

const verDetalles = (proyectoId) => {
    proyectoSeleccionado.value = proyectos.value.find(p => p.id === proyectoId)
    // Scroll to top para evitar problemas en móviles
    window.scrollTo(0, 0)
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden'
    console.log('Proyecto seleccionado:', proyectoSeleccionado.value)
}

const cerrarModal = () => {
    document.body.style.overflow = 'auto'
    proyectoSeleccionado.value = null
    // Restaurar scroll del body
    console.log('Modal cerrado')
}

const ampliarImagen = (imagen) => {
    imagenAmpliada.value = imagen
}

const cerrarImagenAmpliada = () => {
    imagenAmpliada.value = null
}

const proyectosFiltrados = computed(() => {
    if (categoriaActiva.value === 'todos') {
        return proyectos.value
    }
    return proyectos.value.filter(proyecto => proyecto.categoriaId === categoriaActiva.value)
})

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
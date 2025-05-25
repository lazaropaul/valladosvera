<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-gray-100">
      <div class="container mx-auto px-4 md:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Proyectos Destacados</h1>
          <p class="text-lg md:text-xl text-gray-700 mb-8">
            Descubre nuestros trabajos más relevantes en instalación de cerramientos y vallados
          </p>
        </div>
      </div>
    </section>

    <!-- Filtros de proyectos -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            v-for="categoria in categorias" 
            :key="categoria.id"
            @click="filtrarPorCategoria(categoria.id)"
            :class="[
              'px-4 py-2 rounded-md transition-colors duration-200',
              categoriaActiva === categoria.id 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            ]"
          >
            {{ categoria.nombre }}
          </button>
        </div>
      </div>
    </section>

    <!-- Lista de proyectos -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="proyecto in proyectosFiltrados" 
            :key="proyecto.id"
            class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div class="relative pb-[60%] overflow-hidden">
              <img 
                :src="proyecto.imagen" 
                :alt="proyecto.titulo" 
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-900">{{ proyecto.titulo }}</h3>
                <span class="inline-block px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600">
                  {{ getCategoriaName(proyecto.categoriaId) }}
                </span>
              </div>
              <p class="text-gray-700 mb-4">{{ proyecto.descripcionCorta }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ proyecto.ubicacion }}</span>
                <button 
                  @click="verDetalles(proyecto.id)"
                  class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  Ver detalles
                  <ChevronRightIcon class="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de detalles del proyecto -->
    <ProjectDetailsModal 
      v-if="proyectoSeleccionado" 
      :proyectoSeleccionado="proyectoSeleccionado" 
      :categorias="getCategoriaName(proyectoSeleccionado.categoriaId)"
      @cerrar="cerrarModal"
      @ampliar-imagen="ampliarImagen"
      @click.self="cerrarModal"

    />

    <!-- Modal de imagen ampliada -->
    <div 
      v-if="imagenAmpliada" 
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click.self="cerrarImagenAmpliada"
    >
      <button 
        @click="cerrarImagenAmpliada" 
        class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <XIcon class="h-6 w-6 text-gray-700" />
      </button>
      <img 
        :src="imagenAmpliada" 
        alt="Imagen ampliada" 
        class="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
//import { ChevronRightIcon, XIcon, CheckIcon } from 'lucide-vue-next'

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
    imagen: '/placeholder.svg?height=400&width=600',
    galeria: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    ubicacion: 'Urbanización Las Lomas, Madrid',
    descripcionCorta: 'Instalación de vallado perimetral de malla metálica con postes de acero galvanizado.',
    descripcionCompleta: 'Proyecto completo de vallado perimetral para una vivienda unifamiliar en la Urbanización Las Lomas. Se instaló un vallado de malla metálica con postes de acero galvanizado, proporcionando seguridad y delimitación clara de la propiedad sin sacrificar la estética del entorno. El proyecto incluyó la preparación del terreno, cimentación para los postes y acabado profesional.',
    caracteristicas: [
      'Malla metálica de alta resistencia',
      'Postes de acero galvanizado',
      'Altura de 2 metros',
      'Tratamiento anticorrosión',
      'Instalación completa en 5 días',
      'Garantía de 10 años'
    ]
  },
  {
    id: 2,
    titulo: 'Cerramiento de Terraza',
    categoriaId: 'cerramientos',
    imagen: '/placeholder.svg?height=400&width=600',
    galeria: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    ubicacion: 'Ático en Centro Comercial, Valencia',
    descripcionCorta: 'Cerramiento de terraza con cristal templado y perfiles de aluminio para local comercial.',
    descripcionCompleta: 'Cerramiento completo de terraza para un local comercial en un centro comercial de Valencia. Se utilizó cristal templado de 10mm con perfiles de aluminio en color negro mate, creando un espacio elegante y funcional que permite el aprovechamiento de la terraza durante todo el año. El diseño incluye puertas correderas de gran formato para maximizar la apertura en días de buen tiempo.',
    caracteristicas: [
      'Cristal templado de 10mm',
      'Perfiles de aluminio negro mate',
      'Sistema de puertas correderas',
      'Sellado hermético',
      'Protección UV',
      'Aislamiento térmico y acústico'
    ]
  },
  {
    id: 3,
    titulo: 'Puerta Automática Industrial',
    categoriaId: 'puertas',
    imagen: '/placeholder.svg?height=400&width=600',
    galeria: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    ubicacion: 'Polígono Industrial El Olivar, Sevilla',
    descripcionCorta: 'Instalación de puerta corredera automática para acceso a nave industrial.',
    descripcionCompleta: 'Diseño e instalación de una puerta corredera automática para el acceso principal a una nave industrial en el Polígono El Olivar. La puerta, fabricada en acero galvanizado con refuerzos estructurales, cuenta con un sistema de automatización de alta resistencia para uso intensivo. Se implementó un sistema de control remoto y sensores de seguridad para cumplir con todas las normativas vigentes.',
    caracteristicas: [
      'Estructura de acero galvanizado',
      'Motor industrial para uso intensivo',
      'Control remoto y teclado numérico',
      'Sensores de seguridad',
      'Batería de respaldo',
      'Mantenimiento incluido primer año'
    ]
  },
  {
    id: 4,
    titulo: 'Automatización de Portón Existente',
    categoriaId: 'automatismos',
    imagen: '/placeholder.svg?height=400&width=600',
    galeria: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    ubicacion: 'Chalet en Sierra Nevada, Granada',
    descripcionCorta: 'Instalación de sistema de automatización para portón de entrada existente.',
    descripcionCompleta: 'Proyecto de automatización de un portón de entrada existente en un chalet de Sierra Nevada. Se instaló un sistema de motorización adaptado a las condiciones climáticas extremas de la zona, con capacidad para funcionar correctamente incluso con nieve y hielo. El sistema incluye calefacción en componentes críticos y está fabricado con materiales resistentes a la corrosión y bajas temperaturas.',
    caracteristicas: [
      'Motor subterráneo de alto par',
      'Sistema calefactado para clima extremo',
      'Control por smartphone',
      'Sensores anti-aplastamiento',
      'Apertura manual en caso de corte eléctrico',
      'Instalación no invasiva'
    ]
  },
  {
    id: 5,
    titulo: 'Vallado Deportivo',
    categoriaId: 'vallados',
    imagen: '/placeholder.svg?height=400&width=600',
    galeria: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    ubicacion: 'Complejo Deportivo Municipal, Barcelona',
    descripcionCorta: 'Vallado perimetral para pistas de pádel y tenis con malla electrosoldada.',
    descripcionCompleta: 'Instalación completa de vallado perimetral para las pistas de pádel y tenis de un complejo deportivo municipal en Barcelona. Se utilizó malla electrosoldada de alta resistencia con postes reforzados, diseñados específicamente para resistir impactos de pelotas y uso intensivo. El acabado incluye tratamiento anticorrosión y pintura en color verde para integrarse con el entorno.',
    caracteristicas: [
      'Malla electrosoldada reforzada',
      'Altura de 4 metros',
      'Postes con refuerzo interior',
      'Tratamiento anticorrosión',
      'Pintura en polvo termoendurecida',
      'Puertas de acceso con cierre de seguridad'
    ]
  },
  {
    id: 6,
    titulo: 'Cerramiento de Piscina',
    categoriaId: 'cerramientos',
    imagen: '/placeholder.svg?height=400&width=600',
    galeria: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    ubicacion: 'Hotel Playa Azul, Málaga',
    descripcionCorta: 'Cerramiento telescópico para piscina de hotel con estructura de aluminio y policarbonato.',
    descripcionCompleta: 'Diseño e instalación de un cerramiento telescópico para la piscina de un hotel en la costa de Málaga. La estructura, fabricada en aluminio con paneles de policarbonato transparente, permite el uso de la piscina durante todo el año independientemente de las condiciones climáticas. El sistema telescópico facilita la apertura parcial o total del espacio en los meses de verano.',
    caracteristicas: [
      'Estructura de aluminio anodizado',
      'Paneles de policarbonato con protección UV',
      'Sistema telescópico sobre raíles',
      'Puertas de acceso con cierre hermético',
      'Ventilación regulable',
      'Resistencia a vientos de hasta 120 km/h'
    ]
  }
])

// Estado
const categoriaActiva = ref('todos')
const proyectoSeleccionado = ref(null)
const imagenAmpliada = ref(null)

// Métodos
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
  //window.scrollTo(0, 0)
  
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

const solicitarPresupuesto = () => {
  // Aquí podrías redirigir al formulario de contacto o abrir un modal específico
  alert('Redirigiendo al formulario de presupuesto...')
}

// Computed properties
const proyectosFiltrados = computed(() => {
  if (categoriaActiva.value === 'todos') {
    return proyectos.value
  }
  return proyectos.value.filter(proyecto => proyecto.categoriaId === categoriaActiva.value)
})
</script>
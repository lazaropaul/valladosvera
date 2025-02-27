<script setup>
import ImageModalComponent from '~/components/ImageModalComponent.vue';


const modal = useModal();

const title2 = "Sobre Nosotros";
const text2 = "Somos especialistas en la fabricación e instalación de vallados, cerramientos y puertas metálicas de alta calidad. " +
              "Nos destacamos por nuestra atención al detalle y nuestro compromiso con la excelencia. Cada proyecto, desde un simple vallado residencial hasta complejos cerramientos industriales, recibe la misma dedicación y profesionalidad. Utilizamos materiales de primera calidad y técnicas avanzadas de soldadura y acabado para garantizar productos duraderos y estéticamente atractivos." +
              "La seguridad y satisfacción de nuestros clientes son nuestra máxima prioridad. Por ello, ofrecemos un servicio integral que incluye asesoramiento técnico, diseño personalizado, fabricación e instalación profesional.";

const title1 = "Servicios";
const text1 = "Seas particular o empresa, adaptamos tu proyecto para que pueda satisfacer tus necesidades";

const openModal = (id) => {
    console.log("Apeerto modal con id: ", id);
    modal.open(ImageModalComponent, {id});
}

</script>

<template>
    <NavBar />

    <main>
        <MainHeader />

        <div class="md:flex md:flex-col gap-10"> <!-- 2 primers banners -->
            <InfoBannerLeft :imagePosition="false" :title="title2" :text="text2" />
            <hr class="h-[1px] mx-20 border-gray-400 mt-10"/>
            <InfoBannerMiddle :image-position="true" :title="title1" :text="text1" />
        </div>

        <section>
            <div class="flex-col bg-orange-500 justify-center md:rounded-md md:mx-20 md:mt-0 md:h-auto md:pb-16 md:mb-20">
                <div class="flex md:justify-center">
                    <div class="w-2/4 p-10 md:my-5">
                        <h2 class="text-6xl font-bold text-center text-white">Últimos trabajos</h2>
                        <!-- <p class="text-center">Conoce todos nuestros servicio</p> -->
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
    </footer>

</template>
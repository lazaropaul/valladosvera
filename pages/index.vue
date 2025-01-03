<script setup>

const title2 = "Diseño y Fabricación a Medida";
const text2 = "Ofrecemos una amplia variedad de vallados y " +
              "cerramientos metálicos diseñados para garantizar " + 
              "la seguridad, durabilidad y estética de cualquier espacio." +
              "Con materiales de alta calidad y un enfoque en la personalización, " +
              "creamos soluciones adaptadas a tus necesidades, ya sea para " +
              "uso residencial, comercial o industrial. Confía en nuestros " +
              "expertos para transformar tus ideas en estructuras sólidas " + 
              "que perduran en el tiempo.";

const title1 = "Servicios";
const text1 = "Seas particular o empresa, adaptamos tu proyecto para que pueda satisfacer tus necesidades";

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
                        <h2 class="text-6xl font-bold text-center text-white">Nuestros Servicios</h2>
                        <!-- <p class="text-center">Conoce todos nuestros servicio</p> -->
                    </div>
                </div>
                <div class="flex justify-center mt-6 md:h-[50vh]">
                    <div class="flex-col justify-between w-full px-10">
                        <ul class="justify-between md:flex md:w-full md:justify-around">
                            <li class="md:p-5">
                                <CardWithButton title="Instalación de estructuras, puertas y vallados" text="Instalación personalizada de vallados y estructuras metalicas"/>
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

    </main>

    <footer>
        <Footer />
    </footer>

</template>
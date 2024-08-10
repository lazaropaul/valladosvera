<script setup>

const title2 = "Pide tu presupuesto";
const text2 = "Con nuestro servicio de solicitud de presupuesto, te ofrecemos la oportunidad de obtener un presupuesto adaptado a tus necesidades específicas. Nuestro equipo de expertos se encargará de realizar un estudio detallado, brindarte asesoramiento especializado y planificar cada detalle de tu proyecto";

</script>

<template>
    <NavBar />

    <main class="">
        <MainHeader />

        <InfoBanner :imagePosition="false" :title="title2" :text="text2" />

        <section>
            <div class="flex-col bg-orange-500 justify-center md:rounded-md md:mx-20 md:h-[50vh] md:mt-0">
                <div class="flex md:justify-center">
                    <div class="w-2/4 p-10 md:my-5">
                        <h2 class="text-6xl font-bold text-center text-white">Nuestros Servicios</h2>
                        <!-- <p class="text-center">Conoce todos nuestros servicio</p> -->
                    </div>
                </div>
                <div class="flex justify-center mt-6 md:h-[50vh]">
                    <div class="flex-col justify-center w-5/6">
                        <ul class="justify-between md:flex">
                            <li>
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg">
                                    <img class="w-full object-cover h-[25vh]" src="/main4.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Instalación de estructuras, puertas y vallados</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4">
                                        <span>Saber más</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg">
                                    <img class="w-full object-cover h-[25vh]" src="/main5.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Mantenimiento y reparación</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4">
                                        <span>Saber más</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg">
                                    <img class="w-full object-cover h-[25vh]" src="/main6.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Servicio de "manitas"</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4">
                                        <span>Saber más</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg ">
                                    <img class="w-full object-cover h-[25vh]" src="/main7.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Limpieza de parcelas</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4">
                                        <span>Saber más</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </main>

</template>
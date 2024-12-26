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

        <InfoBannerLeft :imagePosition="false" :title="title2" :text="text2" />
        <InfoBannerMiddle :image-position="true" :title="title1" :text="text1" />

        <section>
            <div class="flex-col bg-orange-500 justify-center md:rounded-md md:mx-20 md:h-[50vh] md:mt-0 md:h-auto md:pb-16 md:mb-20">
                <div class="flex md:justify-center">
                    <div class="w-2/4 p-10 md:my-5">
                        <h2 class="text-6xl font-bold text-center text-white">Nuestros Servicios</h2>
                        <!-- <p class="text-center">Conoce todos nuestros servicio</p> -->
                    </div>
                </div>
                <div class="flex justify-center mt-6 md:h-[50vh] md:px-10">
                    <div class="flex-col justify-center w-5/6">
                        <ul class="justify-between md:flex md:w-full md:justify-around">
                            <li class="md:p-5">
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg">
                                    <img class="w-full object-cover h-[25vh]" src="/main4.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Instalación de estructuras, puertas y vallados</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4 flex justify-end">
                                        <Button buttonText="Saber más" class="bg-orange-500 rounded-md text-white font-bold w-full" />
                                    </div>
                                </div>
                            </li>
                            <li class="md:p-5">
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg">
                                    <img class="w-full object-cover h-[25vh]" src="/main5.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Mantenimiento y reparación</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4 flex justify-end">
                                        <Button buttonText="Saber más" class="bg-orange-500 rounded-md text-white font-bold w-full" />
                                    </div>
                                </div>
                            </li>
                            <li class="md:p-5">
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg">
                                    <img class="w-full object-cover h-[25vh]" src="/main6.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Servicio de "manitas"</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4 flex justify-end">
                                        <Button buttonText="Saber más" class="bg-orange-500 rounded-md text-white font-bold w-full" />
                                    </div>
                                </div>
                            </li>
                            <li class="md:p-5">
                                <div class="max-w-sm mb-5 overflow-hidden bg-white rounded shadow-lg ">
                                    <img class="w-full object-cover h-[25vh]" src="/main7.jpeg" alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="mb-2 text-xl font-bold">Limpieza de parcelas</div>
                                        <p class="text-base text-gray-700">Instalación personalizada de vallados y
                                            estructuras metalicas</p>
                                    </div>
                                    <div class="px-6 py-4 flex justify-end">
                                        <Button buttonText="Saber más" class="bg-orange-500 rounded-md text-white font-bold w-full" />
                                    </div>
                                </div>
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
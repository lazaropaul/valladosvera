<script setup>

    const menuToggle = ref(false);

    const onToggleMenu = (e) => {
        console.log(e);
        menuToggle.value = !menuToggle.value;
        const menu = document.querySelector('.nav-links');
        menu.classList.toggle('top-[10%]');
    }
</script>

<template>
    <nav class="flex justify-between items-center w-[92%] h-[12vh] mx-auto">
            <div>
                <NuxtImg class="w-32 cursor-pointer" src="/logo3.png" alt="..." />
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6 w-50">
                <NuxtLink to="/contacto" class="hover:text-gray-500">
                    <Button buttonText="Contactar" class="bg-orange-500 text-white hover:bg-orange-600" />
                </NuxtLink>
                <NuxtImg src="/menu-outline.svg" @click="onToggleMenu(this)" name="menu" class="cursor-pointer md:hidden h-14" />
            </div>
        </nav>
</template>
<template>
    <div class="flex justify-between flex-col gap-8 p-10 bg-[#272727]">
        <div class="flex flex-col">
            <img class="w-32 cursor-pointer" src="/logo1.png" />
        </div>
        <div class="flex flex-col gap-3">
            <h3 class="text-white underline decoration-4 text-md font-bold">Contacto</h3>
            <div class="flex flex-col gap-2 text-white"> <!-- Poner iconos de manera que se vea que son enlaces -->
                <p class="text-2xl">+34 <span class="font-bold">627 065 738</span></p> <!-- Poner aqui un call to -->
                <p>info@valladosvera.com</p> <!-- Poner aqui un mail to -->
                <p>Whatsapp</p> <!-- Poner aqui un enlace directo a whats app to -->
            </div>
        </div>

        <div class="flex flex-col gap-3 h-auto">
            <h3 class="text-white underline decoration-4 text-md font-bold">Servicios</h3>
            <div class="flex flex-col justify-between gap-2 text-white leading-tight">
                <NuxtLink to="/about" >Instalación de estructuras, puertas y vallados</NuxtLink>
                <NuxtLink to="/about">Mantenimiento y reparación</NuxtLink>
                <NuxtLink to="/about">Limpieza de parcelas</NuxtLink>
                <NuxtLink to="/about">Servicio de soldadura</NuxtLink>
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <h3 class="text-white underline decoration-4 text-md font-bold">¿Te ayudamos?</h3>
            <div class="flex flex-col gap-2 text-white">
                <NuxtLink to="/about">¿Quienes somos?</NuxtLink>
                <NuxtLink to="/about">Trabaja con nosotros</NuxtLink>
                <NuxtLink to="/about">Trabajos realizados</NuxtLink>
            </div>
        </div>
    </div>

    <hr>

    <div class="flex justify-between gap-4 p-4 bg-[#272727]">
        <p class="text-white">© 2024 Vallados Vera</p>
        <p class="text-white">Made by <NuxtLink to="https://github.com/lazaropaul" class="underline">@lazaropaul</NuxtLink></p>
    </div>

</template>
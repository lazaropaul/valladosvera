<script setup lang="ts">
//https://ui.nuxt.com/components/form

import { z } from 'zod'
import type { Form, FormSubmitEvent } from '#ui/types'
import axios from 'axios'

const toast = useToast()

/* No queria pero al final he acabado usando TypeScript porque
la validacion de formularios se me hace más facil */

const schema = z.object({
  name: z.string().regex(/^[a-zA-Z ]+$/, 'Introduce un nombre válido'),
  phone: z.string().min(9, 'El telefono ha de tener como minimo 9 numeros'), //TODO: Validar telefono
  email: z.string().email('Email no válido'),
  city: z.string().min(3, 'La ciudad ha de tener como minimo 3 caracteres'),
  clientType: z.string().min(1, 'Selecciona un tipo de cliente'),
  message: z.string().max(200, 'El mensaje puede contener como máximo 200 caracteres').optional(),
})

//Esquema es el tipo de datos que se espera recibir
type Schema = z.output<typeof schema>

const clientTypes = ['Particular', 'Empresa', 'Profesional' ,'Administración pública', 'Otro']

//Guarda los datos del formulario mientras se modifican
const state = reactive({
  name: undefined,
  bussines: undefined,
  phone: undefined,
  email: undefined,
  city: undefined,
  clientType: undefined,
  message: undefined
})

const isMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  //Borramos todos los datos introducidos en el formulario
  Object.assign(state, {
      name: undefined,
      bussines: undefined,
      phone: undefined,
      email: undefined,
      city: undefined,
      clientType: undefined,
      message: undefined
    });

  axios.post('/api/contact', event.data)
    .then(() => {
      toast.add({
        title: 'Formulario enviado correctamente',
        //message: 'Nos pondremos en contacto contigo lo antes posible',
        //type: 'success'
      })
    })
    .catch(() => {
      alert('Error al enviar el formulario')
    })

}
</script>

<template>

<div class="md:px-20 md:flex gap-10 md:h-svh py-10">

  <div class="p-5 flex flex-col gap-5">
    <div class="flex flex-col gap-3">
      <h2 class="text-5xl font-bold">Contacta con nosotros!</h2>
      <p class="text-lg">Rellena el formulario y nos pondremos en contacto contigo lo antes posible.</p>
    </div>

    <img v-if="isMobile()" src="/public/contacto.webp" class="md:w-2/4 h-full object-cover md:rounded-md"/>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Nombre" name="name" size="xl">
        <UInput v-model="state.name" autocapitalize="on" size="md"/>
      </UFormGroup>

      <UFormGroup label="Empresa" name="bussines" size="xl">
        <UInput v-model="state.bussines" autocapitalize="on" size="md"/>
      </UFormGroup>

      <UFormGroup label="Telefono" name="phone" size="xl">
        <UInput v-model="state.phone" type="tel" size="md"/>
      </UFormGroup>

      <UFormGroup label="Email" name="email" size="xl">
        <UInput v-model="state.email" type="email" size="md"/>
      </UFormGroup>

      <UFormGroup label="Población" name="city" size="xl">
        <UInput v-model="state.city" autocapitalize="on" size="md"/>
      </UFormGroup>

      <UFormGroup label="Tipo cliente" name="clientType" size="xl">
        <USelect v-model="state.clientType" :options="clientTypes" size="md"/>
      </UFormGroup>

      <UFormGroup label="Mensaje" name="message" size="xl">
        <UTextarea v-model="state.message" placeholder="Puedes explicar-nos aqui tus necesidades" optional size="md"/>
      </UFormGroup>

      <UCheckbox label="Acepto la politica de privacidad" help="Haciendo clic en esta casilla estas aceptando nuestra politica de privacidad" required/>

      <UButton type="submit" block class="w-full font-bold text-md"> <!-- Centrar texto boton -->
        Enviar
      </UButton>
    </UForm>
  </div>

  <img v-if="!isMobile()" src="/public/contacto.webp" class="md:w-2/4 h-full object-cover md:rounded-md"/>

</div>

</template>
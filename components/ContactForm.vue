<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

/* No queria pero al final he acabado usando TypeScript porque
la validacion de formularios se me hace más facil */

const schema = z.object({
  name: z.string().email('Invalid email'),
  phone: z.string().min(9, 'Must be at least 9 characters'),
  email: z.string().email('Invalid email'),
  city: z.string().min(3, 'Must be at least 3 characters'),
  message: z.string().min(10, 'Must be at least 10 characters')
})

//Esquema es el tipo de datos que se espera recibir
type Schema = z.output<typeof schema>

//Guarda los datos del formulario mientras se modifican
const state = reactive({
  name: undefined,
  phone: undefined,
  email: undefined,
  city: undefined,
  message: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>

  <div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Nombre" name="name">
        <UInput v-model="state.name" autocapitalize="on"/>
      </UFormGroup>

      <UFormGroup label="Telefono" name="phone">
        <UInput v-model="state.phone" type="tel" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.phone" type="tel" />
      </UFormGroup>

      <UFormGroup label="Telefono" name="phone">
        <UInput v-model="state.phone" type="tel" />
      </UFormGroup>

      <UFormGroup label="Telefono" name="phone">
        <UInput v-model="state.phone" type="tel" />
      </UFormGroup>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>


</template>
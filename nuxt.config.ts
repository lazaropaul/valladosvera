// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", 'nuxt-nodemailer'],
  colorMode: { //Forzar el modo light
    preference: 'light'
  }
})


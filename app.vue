<template>
  <head>
    <title>Vallados Vera</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <div class="p-0">
    <NuxtLayout>
      <UContainer class="!px-0 !mx-0 !max-w-full !min-w-full">
        <NuxtPage />
      </UContainer>
    </NuxtLayout>
    <UModals />
    <UNotifications />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<template>
  <div class="app">
    <UContainer class="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UContainer>
  </div>
</template>

<style scoped>
.app {
  @apply bg-neutral-50;
  .container{
    @apply bg-white border-x border-gray-200 px-24;
  }
}
</style>

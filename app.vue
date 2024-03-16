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
  @apply bg-white dark:bg-black;
  .container{
    @apply bg-white dark:bg-zinc-900 border-x border-gray-100 dark:border-zinc-700 px-24 shadow-lg;
  }
}
</style>

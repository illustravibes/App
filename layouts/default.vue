<template>
  <div class="container">
    <div class="layout-sheet">
      <AppHeader />
      <slot />
      <SpeedInsights />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
<style scoped>
.container {
  @apply mx-auto;

  .layout-sheet {
    @apply mx-auto bg-white dark:bg-zinc-900 border-x border-gray-100 dark:border-zinc-800 px-24;
  }
}
</style>

<template>
  <AppHeader />
  <slot />
  <SpeedInsights/>
  <AppFooter />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
<style scoped></style>

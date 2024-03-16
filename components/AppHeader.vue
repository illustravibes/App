<template>
  <div class="app-header">
    <SectionsAvatar v-if="isHome" class="flex"/>
    <SectionsNavigation class="flex justify-end md:justify-center"/>
    <SectionsDarkMode  class="flex justify-end"/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = route.path === '/'
</script>
<style scoped>

.app-header {
  @apply flex justify-between items-center pt-10;
}
</style>

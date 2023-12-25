<template>
  <div class="app-header">
    <SectionsNavigation class="col-start-2 col-span-1"/>
    <SectionsDarkMode  class="col-start-3 col-span-1"/>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>

.app-header {
  @apply grid grid-cols-3 gap-4 pt-10 justify-items-end;
}
</style>

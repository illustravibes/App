<template>
  <div class="footer">
    <div class="navigation">
      <NuxtLink
        v-for="(item, index) in menu"
        class="text-sm hover:text-blue-700"
        :keys="index"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
    <div>
      <p class="text-sm">© 2023 Illustravibes Studio. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const menu = [
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Articles',
    to: '/articles',
  },
  {
    label: 'Designs',
    to: '/designs',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Uses',
    to: '/uses',
  },
];
</script>

<style scoped>
.footer {
  @apply flex justify-between pb-16 pt-10 border-t border-gray-200;
  .navigation {
    @apply flex gap-8;
  }
}
</style>

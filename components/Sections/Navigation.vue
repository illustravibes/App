<template>
  <div class="navigation">
    <NuxtLink
      v-for="(nav, index) in navs"
      class="text-sm hover:text-blue-700"
      :keys="index"
      :to="nav.to"
      >
      {{
        nav.label
      }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const navs = [
  {
    Home: "About",
    to: "/about",
  },
  {
    label: "Articles",
    to: "/articles",
  },
  {
    label: "Designs",
    to: "/designs",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Uses",
    to: "/uses",
  },
];
</script>

<style scoped>
.navigation {
  @apply flex w-fit px-6 py-2 gap-4 border rounded-full shadow bg-white dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700;
}</style>

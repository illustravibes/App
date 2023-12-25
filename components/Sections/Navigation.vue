<template>
  <div class="navigation">
    <NuxtLink
      v-for="(nav, index) in navs"
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
    label: "About",
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
  @apply flex w-fit px-4 py-1 gap-4 border rounded-2xl;
}</style>

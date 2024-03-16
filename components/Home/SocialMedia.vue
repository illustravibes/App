<template>
  <div class="social-media">
    <div class="icon" v-for="(item, index) in socialMedias" :key="index">
      <a :href="item.url" target="_blank">
        <UIcon :name="item.icon" dynamic />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const socialMedias = [
  {
    icon: 'i-simple-icons-x',
    url: 'https://x.com/illustravibes',
  },

  {
    icon: 'i-simple-icons-instagram',
    url: 'https://instagram.com/illustravibes',
  },

  {
    icon: 'i-simple-icons-github',
    url: 'https://github.com/illustravibes',
  },
];
</script>

<style scoped>
.social-media {
  @apply flex gap-8;
  .icon {
    @apply hover:size-5;
  }
}
</style>

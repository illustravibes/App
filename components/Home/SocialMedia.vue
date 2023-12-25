<template>
  <div class="social-media">
    <UButton
      v-for="(socialMedia, index) in socialMedias"
      :key="index"
      :icon="socialMedia.icon"
      :to="socialMedia.link"
      color="white"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts">
const socialMedias = [
  {
    icon: 'i-heroicons-sun',
    link: 'http://twitter.com/illustravibes',
  },

  {
    icon: 'i-heroicons-sun',
    link: 'http://instagram.com/illustravibes',
  },

  {
    icon: 'i-heroicons-sun',
    link: 'https://github.com/illustravibes',
  },
];
</script>

<style scoped>
.social-media {
  @apply flex gap-4;
}
</style>

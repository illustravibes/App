<template>
  <div class="company-card">
    <div class="flex items-center gap-4">
      <div class="avatar">
        <UAvatar :src="logo" :alt="alt" />
      </div>
      <div class="flex flex-col">
        <p class="text-sm">{{ name }}</p>
        <p class="text-xs">{{ job }}</p>
      </div>
    </div>

    <div class="flex items-end">
      <p class="text-xs">{{ period }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  logo: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  job: {
    type: String,
    default: "",
  },
  period: {
    type: String,
    default: "",
  },
});
</script>
<style scoped>
.company-card {
  @apply flex justify-between gap-4;
  .avatar {
    @apply relative flex flex-none items-center justify-center shadow-md bg-white border border-zinc-200 w-10 h-10 rounded-full;
  }
}
</style>

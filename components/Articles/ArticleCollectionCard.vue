<template>
  <div class="article-collection-card">
    <div class="date">
      <p>{{ date }}</p>
    </div>

    <div class="title">
      <p>{{ title }}</p>
    </div>

    <div class="summary">
      <p>{{ summary }}</p>
    </div>

    <div class="detail">
      <p>
        Read Article
        <UIcon
          name="i-heroicons-chevron-right-20-solid"
        />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

defineProps({
  date: {
    type: String,
    default: 'December 25, 2023',
  },
  title: {
    type: String,
    default: 'Introducing Animaginary: High performance web animations',
  },
  summary: {
    type: String,
    default: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  },
  detail: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.article-collection-card {
  width: 560px;
  height: 230px;

  @apply flex flex-col gap-2 border rounded-2xl hover:bg-slate-200 p-4;

  .date{
    @apply text-sm font-light;
  }

  .title {
    @apply text-base font-bold;
  }
  .summary {
    @apply text-sm font-light;
  }
  .detail {
    @apply text-sm text-green-700 pt-8;
  }
}
</style>

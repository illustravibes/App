<template>
  <div class="index">
    <HomeMainContent />
    <HomePortfolio />
    <div class="articles">
      <ArticlesArticleCollectionCard
        v-for="(article, index) in articles"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    date: 'Sept 28, 2023',
    title: 'Crafting a design system for a multiplanetary future',
    summary:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  {
    date: 'Sept 28, 2023',
    title: 'Crafting a design system for a multiplanetary future',
    summary:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  {
    date: 'Sept 28, 2023',
    title: 'Crafting a design system for a multiplanetary future',
    summary:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  {
    date: 'Sept 28, 2023',
    title: 'Crafting a design system for a multiplanetary future',
    summary:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
];
</script>

<style scoped>
.index {
  .articles {
    @apply flex flex-col gap-4 pt-8;
  }
}
</style>

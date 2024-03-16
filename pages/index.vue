<template>
  <div class="index">
    <HomeMainContent />
    <HomePortfolio />
    <div class="bottom-content">
      <div class="articles">
        <ArticlesArticleCard
          v-for="(article, index) in articles"
          :key="index"
          :date="article.date"
          :title="article.title"
          :summary="article.summary"
        />
      </div>
      <div class="flex flex-col gap-8">
        <HomeSubscribe />
        <HomeWorks />
      </div>
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
];
</script>

<style scoped>
.index {
  @apply pb-20;
  .bottom-content {
    @apply flex justify-center flex-row gap-24 pt-8;
    .articles {
    @apply flex flex-col gap-8;
  } 
  }
}
</style>

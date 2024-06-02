<template>
  <div class="portfolio">
    <NuxtImg
      class="image"
      :class="getRotate(index)"
      v-for="(image, index) in limit"
      :key="index"
      :src="image.url"
      :alt="image.alt"
    />
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    url: "https://ucarecdn.com/371039b2-d7bf-41ed-9469-47731e0c79a6/",
    alt: "design2",
  },
  {
    url: "https://ucarecdn.com/4f85081f-7280-4e49-bd8c-ac313175c1ab/",
    alt: "design3",
  },
  {
    url: "https://ucarecdn.com/667d1ef1-1a68-4e27-9d52-9effb12e2499/",
    alt: "design4",
  },
  {
    url: "https://ucarecdn.com/fa95f4a7-27ea-4152-b67e-dbc5f86cebba/",
    alt: "design5",
  },
  {
    url: "https://ucarecdn.com/dedb7986-cb67-4681-87fd-912baf75942c/",
    alt: "design1",
  },
];

const limit = computed(() => {
  return images.slice(0, 5);
});

function getRotate(index: number) {
  return index % 2 === 0 ? "rotate-2" : "-rotate-2";
}
</script>

<style scoepd>
.portfolio {
  @apply flex justify-center gap-5 py-4 sm:gap-8;

  .image {
    @apply w-44 relative sm:w-72 rounded-xl sm:rounded-2xl aspect-[9/10] flex-none overflow-hidden bg-zinc-100 dark:bg-zinc-800;
  }
}
</style>

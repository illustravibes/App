<template>
  <div class="work">
    <div class="flex items-center gap-4">
      <UIcon name="i-heroicons-briefcase-solid" dynamic />
      <p class="text-base">Work</p>
    </div>
    <div class="flex flex-col gap-4">
      <HomeCompanyCard
        v-for="(item, index) in works"
        :key="index"
        :name="item.name"
        :logo="item.logo"
        :alt="item.name"
        :job="item.job"
        :period="item.period"
      />
    </div>
    <div>
      <UButton block color="black">
        Download CV <UIcon name="i-heroicons-arrow-down-16-solid"
      /></UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const works = [
  {
    logo: "https://media.licdn.com/dms/image/C560BAQHvV8_TdJDFqQ/company-logo_200_200/0/1630665303057?e=2147483647&v=beta&t=v5fckphF0nqyihp3WdC46zgK7Lkry0J2UwQUWb0HNU0",
    name: "Vortex",
    job: "Software Engineer",
    period: "2022 - Present",
  },
];
</script>
<style scoped>
.work {
  @apply flex flex-col gap-6 max-w-md border border-gray-200 rounded-2xl p-6;
}
</style>

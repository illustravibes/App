<template>
  <div class="main-content">
    <UAvatar
      src="https://ucarecdn.com/2c6aac4f-91a8-4bb4-a4a4-c479eb17ce4c/IMG_20230823_092817_347.jpg"
      alt="avatar"
      size="2xl"
    />

    <div class="h1">
      <p>
        Software developer, designer, and illustration enthusiast.
      </p>
    </div>
    <div class="h3">
      <p>
        I'm Sye, a software engineer, logo designer, and illustrator enthusiast
        based in Temanggung City. As the founder and CEO of Illustravibes
        Studio, I am passionate about creating digital solutions that enable
        individuals to explore space on their own terms.
      </p>
    </div>

    <HomeSocialMedia />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.main-content {
  @apply static flex flex-wrap gap-4 pt-8 max-w-3xl;

  .h1 {
    @apply text-5xl font-bold;
  }
  .h3 {
    @apply text-lg font-light;
  }
}
</style>

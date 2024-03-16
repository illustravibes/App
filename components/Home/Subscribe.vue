<template>
  <div class="subscribe">
    <div class="flex items-center gap-4">
      <UIcon name="i-heroicons-envelope-solid" />
      <p class="text-sm">Stay Up to Date!</p>
    </div>
    <div>
      <p class="text-xs max-w-80">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
    </div>
    <div class="pt-4">
      <UForm
        class="flex flex-row gap-4"
        :validate="validate"
        :state="state"
        @submit="onSubmit"
      >
        <UFormGroup class="shrink w-80">
          <UInput placeholder="Email Address..."/>
        </UFormGroup>
        <UFormGroup>
          <UButton type="submit" color="black"> Join </UButton>
        </UFormGroup>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  email: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>
<style scoped>
.subscribe {
  @apply flex flex-col gap-4 max-w-md border border-gray-200 rounded-2xl p-8;
}
</style>

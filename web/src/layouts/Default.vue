<template>
  <div class="layout flex flex-col relative min-h-screen">
    <app-header />
    <div class="app-slot container mb-8">
      <slot />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
.container {
  @apply relative mx-auto w-full;
}
</style>

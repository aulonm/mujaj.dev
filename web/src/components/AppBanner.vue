<template>
  <section class="dev-banner-wrapper relative w-full py-4 mb-8 grid gap-8 items-center mx-auto">
    <div class="text-left">
      <p class="font-semibold text-xl leading-snug m-0 mb-2">
        {{ subheading }}
      </p>
      <h1 class="font-black text-5xl leading-none mb-2">{{ heading }}</h1>
      <slot />
    </div>
  </section>
</template>

<script>

export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
@screen md {
  .dev-banner-wrapper {
    grid-template-columns: 55% 1fr;
  }
}
</style>

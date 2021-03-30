<template>
  <Layout>
    <h1 class="dev-section-heading">About</h1>

    <p class="mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet leo ut magna sagittis iaculis. Sed sed
      ipsum volutpat, congue tortor a, eleifend dui. Aliquam fringilla viverra facilisis. Maecenas in risus libero.
      Pellentesque vel lorem pretium arcu tempus iaculis. Integer tristique arcu eu magna rhoncus, non laoreet sem
      elementum. Donec leo ante, volutpat eu eleifend id, vulputate sit amet lorem. Nunc tempor sem non diam gravida
      mattis. Nullam nec dui in arcu ultrices placerat vitae nec tellus. Sed lacinia justo tincidunt orci interdum, sit
      amet fermentum odio tristique.
    </p>

    <h2 class="dev-section-subheading">Work Experience</h2>

    <h2 class="dev-section-subheading">Education</h2>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
  },
};
</script>

<style scoped>
.dev-section-subheading {
  @apply text-xl font-bold leading-none mb-4;
}
</style>

<template>
  <div>
    <img v-for="image in images" :key="image.asset.id" :src="image.asset.url" />
  </div>
</template>

<script>
export default {
  name: 'Images',

  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped></style>

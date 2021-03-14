<template>
  <div>
    <g-image v-if="hasLocalImage" :class="imageClasses" :src="mainImage.asset.localFile" />
    <img v-else-if="remoteSanityImage" :class="imageClasses" :src="remoteSanityImage" />
    <AppImagePlaceholder v-else-if="placeholder" class="w-full h-full absolute" />
  </div>
</template>

<static-query>
  {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
  }
</static-query>

<script>
import AppImagePlaceholder from '@/components/AppImagePlaceholder.vue';

export default {
  components: {
    AppImagePlaceholder,
  },

  props: {
    mainImage: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    imageClasses: {
      type: String,
      required: true,
    },
    useLocalImage: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    remoteSanityImage() {
      return this.mainImage && this.mainImage.asset.url
        ? this.$urlForImage(this.mainImage.asset.url, this.$static.metadata.sanityOptions)
            .width(this.width)
            .auto('format')
            .quality(this.quality)
            .url()
        : null;
    },

    hasLocalImage() {
      return this.useLocalImage && this.mainImage && this.mainImage.asset.localFile;
    },
  },
};
</script>

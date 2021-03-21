<template>
  <portable-text
    v-if="hasBlocks"
    :blocks="blocks"
    :serializers="serializers"
    :project-id="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<static-query>
  {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }

    localImages: allSanityImageAsset {
      edges {
        node {
          id
          localFile
          url
        }
      }
    }
  }
</static-query>

<script>
import PortableText from 'sanity-blocks-vue-component';
import CodeBlock from './CodeBlock.vue';

export default {
  components: {
    PortableText,
  },

  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    serializers: {
      types: {
        code: CodeBlock,
        image: ({ node }) => {
          const image = this.$static.localImages.edges.find(({ node: localImage }) => {
            if (localImage.id === node.asset._ref) {
              return localImage;
            }
            return false;
          });

          if (image) {
            const imageNode = image.node;

            return (
              <figure>
                <g-image src={imageNode.localFile} />
              </figure>
            );
          }

          return (
            <figure>
              <img
                src={this.$urlForImage(node, this.$static.metadata.sanityOptions).auto('format').quality(80).url()}
                alt={node.alt}
              />
            </figure>
          );
        },
      },
    },
  }),

  computed: {
    hasBlocks() {
      return this.blocks && this.blocks.length;
    },
  },
};
</script>

<style scoped>
h1 {
  @apply text-3xl leading-none;
}

h2 {
  @apply text-2xl leading-tight;
}

h3 {
  @apply text-xl leading-tight;
}

h4 {
  @apply text-lg leading-snug;
}

h5 {
  @apply text-base leading-normal;
}

h6 {
  @apply text-sm leading-normal;
}

blockquote {
  @apply border-l-4 border-primary italic pl-4 mb-8 text-lg text-gray;
}

figure {
  @apply mb-8;
}

ul {
  @apply list-disc ml-4 pb-4;
}

li {
  @apply leading-tight text-base mb-4;
}

p {
  @apply leading-relaxed text-base mb-8;
}

@screen lg {
  h1 {
    @apply text-5xl;
  }

  h2 {
    @apply text-4xl;
  }

  h3 {
    @apply text-3xl;
  }

  h4 {
    @apply text-2xl;
  }

  h5 {
    @apply text-xl;
  }

  h6,
  p {
    @apply text-lg;
  }
}
</style>

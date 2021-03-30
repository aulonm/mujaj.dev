<template>
  <div class="dev-post-card bg-card relative flex flex-col h-full" :class="{ 'is-large': isLarge }">
    <div class="relative flex flex-auto w-full">
      <g-link class="block w-full" :to="postUrl">
        <app-image
          class="dev-card-image relative flex flex-auto w-full"
          image-classes="block w-full h-full object-cover absolute"
          :main-image="post.mainImage"
          placeholder
        />
      </g-link>
    </div>
    <div class="post-card-content relative flex flex-col p-6 h-full w-full">
      <div class="post-card-meta font-semibold text-xs leading-tight mb-4">
        <span v-if="post.authors.length > 0"> By: {{ getAuthors }} /</span>
        Posted on: {{ post.publishedAt }}
      </div>
      <g-link class="post-card-link inline-flex font-medium text-base px-4 -ml-4" :to="postUrl">
        <h2 class="post-card-heading font-bold text-lg leading-tight mb-auto">
          {{ post.title }}
        </h2>
      </g-link>
    </div>
  </div>
</template>

<script>
import AppImage from '@/components/AppImage.vue';

export default {
  name: 'PostCard',

  components: {
    AppImage,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isLarge() {
      return this.index % 3 === 0;
    },

    postUrl() {
      return `/blog/${this.post.slug.current}`;
    },

    getAuthors() {
      if (this.post.authors.length > 1) {
        let authors = '';
        this.post.authors.forEach((author) => {
          if (authors.length === 0) {
            authors = author.author.name;
          } else {
            authors = `${authors} / ${author.author.name}`;
          }
        });
        return authors;
      }
      return this.post.authors[0].author.name;
    },
  },
};
</script>

<style lang="postcss" scoped>
.dev-post-card.is-large {
  @apply relative bg-secondary text-black;
}

.dev-post-card.is-large .post-card-heading {
  @apply font-bold leading-tight;
}

@screen xl {
  .dev-post-card.is-large {
    @apply grid;
    grid-template-columns: 60% 1fr;
  }

  .dev-post-card.is-large .post-card-heading {
    @apply text-2xl;
  }

  .dev-post-card.is-large .post-card-content {
    @apply justify-center;
  }
}
</style>

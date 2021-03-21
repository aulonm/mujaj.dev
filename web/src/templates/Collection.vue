<template>
  <Layout>
    <div class="aka-blog-post">
      <article>
        <header class="mb-8">
          <h1 class="font-black text-3xl leading-tight xl:text-center xl:text-5xl">
            {{ $page.collection.title }}
          </h1>
        </header>
        <app-image v-if="$page.collection.mainImage" class="blog-post-banner mb-8" :main-image="$page.post.mainImage" />

        <div class="blog-post-content container p-0">
          <div class="blog-post-meta font-semibold text-sm mb-4 text-gray">
            <span v-if="$page.collection.authors.length > 0">By: {{ getAuthors }} </span>
            Posted on: {{ $page.collection.publishedAt }}
          </div>
          <block-content :blocks="$page.collection._rawBody" />
          <post-pagination :next="$page.nextPost" :prev="$page.prevPost" />
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
  query Collection ($id: ID!, $nextID: ID!, $prevID: ID!) {

    collection: sanityPhotoCollection (id: $id) {
      title
      updatedAt(format: "MMMM D, YYYY")
      _rawBody
      imagesGallery {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }
    }

    nextPost: sanityPhotoCollection (id: $nextID) {
      slug {
        current
      }
      title
    }

    prevPost: sanityPhotoCollection (id: $prevID) {
      slug {
        current
      }
      title
    }
  }
</page-query>

<script>
import AppImage from '@/components/AppImage.vue';
import BlockContent from '@/components/BlockContent.vue';
import PostPagination from '@/components/Blog/PostPagination.vue';

export default {
  name: 'PhotoCollection',

  components: {
    AppImage,
    BlockContent,
    PostPagination,
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="css" scoped>
.blog-post-content {
  max-width: 1000px;
}
</style>

<template>
  <Layout>
    <div class="aka-blog-post">
      <article>
        <header class="mb-8">
          <h1 class="font-black text-3xl leading-tight xl:text-center xl:text-5xl">
            {{ $page.collection.title }}
          </h1>
        </header>
        <images
          v-if="$page.collection.imagesGallery.length > 0"
          class="blog-post-banner mb-8"
          :images="$page.collection.imagesGallery"
        />

        <div class="blog-post-content container p-0">
          <pagination :next="$page.nextPost" :prev="$page.prevPost" type="photo-collection" />
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
import Images from '@/components/Collection/Images.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'PhotoCollection',

  components: {
    Images,
    Pagination,
  },

  metaInfo() {
    return {
      title: this.$page.collection.title,
    };
  },

  mounted() {
    console.log(this.$page.collection);
  },
};
</script>

<style lang="css" scoped>
.blog-post-content {
  max-width: 1000px;
}
</style>

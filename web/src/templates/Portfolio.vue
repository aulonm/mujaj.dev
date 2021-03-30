<template>
  <Layout>
    <div class="dev-blog-post">
      <article>
        <header class="mb-8">
          <h1 class="font-black text-3xl leading-tight xl:text-center xl:text-5xl">
            {{ $page.portfolio.title }}
          </h1>
        </header>
        <images
          v-if="$page.portfolio.imagesGallery.length > 0"
          class="blog-post-banner mb-8"
          :images="$page.portfolio.imagesGallery"
        />

        <div class="blog-post-content container p-0">
          <pagination :next="$page.nextPost" :prev="$page.prevPost" type="portfolio" />
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
  query Portfolio ($id: ID!, $nextID: ID!, $prevID: ID!) {

    portfolio: sanityPortfolio (id: $id) {
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

    nextPost: sanityPortfolio (id: $nextID) {
      slug {
        current
      }
      title
    }

    prevPost: sanityPortfolio (id: $prevID) {
      slug {
        current
      }
      title
    }
  }
</page-query>

<script>
import Images from '@/components/Portfolio/Images.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Portfolio',

  components: {
    Images,
    Pagination,
  },

  metaInfo() {
    return {
      title: this.$page.portfolio.title,
    };
  },

  mounted() {
    console.log(this.$page.portfolio);
  },
};
</script>

<style lang="css" scoped>
.blog-post-content {
  max-width: 1000px;
}
</style>

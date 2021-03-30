<template>
  <Layout>
    <div class="dev-blog-post">
      <article>
        <header class="mb-8">
          <h1 class="font-black text-3xl leading-tight xl:text-center xl:text-5xl">
            {{ $page.post.title }}
          </h1>
        </header>
        <app-image v-if="$page.post.mainImage" class="blog-post-banner mb-8" :main-image="$page.post.mainImage" />

        <div class="blog-post-content container p-0">
          <div class="blog-post-meta font-semibold text-sm mb-4 text-gray">
            <span v-if="$page.post.authors.length > 0">By: {{ getAuthors }} </span>
            Posted on: {{ $page.post.publishedAt }}
          </div>
          <block-content :blocks="$page.post._rawBody" />
          <pagination :next="$page.nextPost" :prev="$page.prevPost" type="blog" />
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($id: ID!, $nextID: ID!, $prevID: ID!) {

    post: sanityPost (id: $id) {
      title
      authors {
        author {
          name
        }
      }
      publishedAt(format: "MMMM D, YYYY")
      _rawBody
      mainImage {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }
    }

    nextPost: sanityPost (id: $nextID) {
      slug {
        current
      }
      title
    }

    prevPost: sanityPost (id: $prevID) {
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
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Post',

  components: {
    AppImage,
    BlockContent,
    Pagination,
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },

  computed: {
    getAuthors() {
      if (this.$page.post.authors.length > 1) {
        let authors = '';
        this.$page.post.authors.forEach((author) => {
          if (authors.length === 0) {
            authors = author.author.name;
          } else {
            authors = `${authors} / ${author.author.name}`;
          }
        });
        return authors;
      }
      return this.$page.post.authors[0].author.name;
    },
  },
};
</script>

<style lang="postcss" scoped>
.blog-post-content {
  max-width: 1000px;
}
</style>

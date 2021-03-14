<template>
  <Layout>
    <h1 class="aka-section-heading">Blog</h1>
    <div class="blog-container">
      <post-list v-if="$page.posts.edges.length" :posts="$page.posts.edges" />
      <div v-else>
        <h3>Nothing here yet...</h3>
      </div>
      <pager
        aria-label="Blog pagination navigation"
        class="aka-pagination-navigation flex flex-row items-center justify-center py-4 mt-4 w-full"
        link-class="font-medium mx-2 p-2"
        :info="$page.posts.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    posts: allSanityPost(sortBy: "publishedAt" perPage: 4, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          slug {
            current
          }
          title
          publishedAt(format: "MMMM D, YYYY")
          mainImage {
            asset {
              id
              localFile(width: 660, quality: 80)
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome';
import PostList from '@/components/Blog/PostList.vue';

export default {
  components: {
    Pager,
    PostList,
  },

  metaInfo: {
    title: 'Blog',
  },
};
</script>

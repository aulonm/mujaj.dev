<template>
  <Layout>
    <h1 class="aka-section-heading">Photo Collections</h1>
    <div class="blog-container">
      <template v-if="$page.collections.edges.length" :posts="$page.collections.edges">
        <div v-for="collection in $page.collections.edges">
          <h2>{{collection.node.title}}</h2>
        </div>
      </template>
      <div v-else>
        <h3>Nothing here yet...</h3>
      </div>
      <pager
        aria-label="Blog pagination navigation"
        class="aka-pagination-navigation flex flex-row items-center justify-center py-4 mt-4 w-full"
        link-class="font-medium mx-2 p-2"
        :info="$page.collections.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    collections: allSanityPhotoCollection(sortBy: "updatedAt" perPage: 4, page: $page) @paginate {
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
          updatedAt(format: "MMMM D, YYYY")
          imagesGallery {
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

export default {
  components: {
    Pager
  },

  metaInfo: {
    title: 'Hello, world!',
  },

  mounted() {
    console.log(this.$page.collections);
  }
};
</script>

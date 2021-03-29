<template>
  <Layout>
    <div class="blog-container">
      <template v-if="$page.collections.edges.length" :posts="$page.collections.edges">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <g-link
            v-for="({ node }, index) in $page.collections.edges"
            :key="index"
            class="shadow-lg rounded p-3 flex flex-col justify-between"
            :to="`/photo-collection/${node.slug.current}`"
          >
            <div class="group relative">
              <img class="w-full md:w-100 block rounded" :src="node.imagesGallery[0].asset.url" />
            </div>
            <div class="p-5">
              <h3 class="text-md">{{ node.title }}</h3>
            </div>
          </g-link>
        </div>
      </template>
      <div v-else>
        <h3>Nothing here yet...</h3>
      </div>
      <pager
        aria-label="Blog pagination navigation"
        class="dev-pagination-navigation flex flex-row items-center justify-center py-4 mt-4 w-full"
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
    Pager,
  },

  metaInfo: {
    title: 'Hello, world!',
  },

  mounted() {
    console.log(this.$page.collections);
  },
};
</script>

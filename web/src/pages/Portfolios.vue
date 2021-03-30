<template>
  <Layout>
    <div class="blog-container">
      <template v-if="$page.portfolios.edges.length" :posts="$page.portfolios.edges">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <g-link
            v-for="({ node }, index) in $page.portfolios.edges"
            :key="index"
            class="shadow-lg rounded"
            :to="`/portfolios/${node.slug.current}`"
          >
            <div class="relative text-white uppercase">
              <img class="w-full block" :src="node.imagesGallery[0].asset.url" />
              <div class="transition duration-500 ease-in-out hover:opacity-0">
                <div class="absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span>{{ node.title }}</span>
                </div>
              </div>
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
        :info="$page.portfolios.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    portfolios: allSanityPortfolio(sortBy: "updatedAt" perPage: 4, page: $page) @paginate {
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
    console.log(this.$page.portfolios);
  },
};
</script>


<style lang="postcss">

</style>
<template>
  <Layout>
    <h1 class="dev-section-heading">Projects</h1>
    <project-list v-if="$page.projects.edges.length" :projects="$page.projects.edges" />
    <div v-else>
      <h3>Nothing here yet...</h3>
    </div>
    <pager
      aria-label="Projects pagination navigation"
      class="dev-pagination-navigation flex flex-row items-center justify-center py-4 mt-4 w-full"
      link-class="font-medium mx-2 p-2"
      :info="$page.projects.pageInfo"
    />
  </Layout>
</template>

<page-query>
query ($page: Int){
  projects: allSanityProject (sortBy: "completed", perPage: 3, page: $page) @paginate {
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
        mainImage {
          asset {
            id
            localFile(width: 1100, quality: 80)
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
import ProjectList from '@/components/Project/ProjectList.vue';

export default {
  components: {
    Pager,
    ProjectList,
  },

  metaInfo: {
    title: 'Projects',
  },
};
</script>

<template>
  <Layout>
    <app-banner heading="Mujaj dev" subheading="Welcome to:">
      <p class="p-sm">
        A blog / portofolio for my own creations within
        <span class="inline-flex border-b-4 border-primary leading-tight">development</span> and
        <span class="inline-flex border-b-4 border-primary leading-tight">photography</span>.
      </p>
    </app-banner>
    <section v-if="$page.posts.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Latests Posts</h2>
      <post-list :posts="$page.posts.edges" />
    </section>
    <section v-if="$page.projects.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Latest Project</h2>
      <project-list :projects="$page.projects.edges" />
    </section>
    <section v-if="$page.portfolios.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Latest portfolios</h2>
      <div>{{ $page.portfolios.edges[0].node.title }}</div>
    </section>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
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
        authors {
          author {
            name
          }
        }
      }
    }
  }
  projects: allSanityProject (sortBy: "completed" limit: 1) {
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
  portfolios: allSanityPortfolio (sortBy: "publishedAt" limit: 1) {
    edges {
      node {
        id
        slug {
          current
        }
        title
      }
    }
  }
}

</page-query>

<script>
import AppBanner from '@/components/AppBanner.vue';
import PostList from '@/components/Blog/PostList.vue';
import ProjectList from '@/components/Project/ProjectList.vue';

export default {
  components: {
    AppBanner,
    PostList,
    ProjectList,
  },

  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

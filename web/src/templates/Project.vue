<template>
  <Layout>
    <div class="aka-project">
      <header>
        <h1 class="font-black leading-loose text-4xl mt-16 mb-10">
          {{ $page.project.title }}
        </h1>
      </header>
      <app-image v-if="$page.project.mainImage || {}" class="project-banner" :main-image="$page.project.mainImage" />

      <div class="project-content container mt-10 px-0">
        <block-content :blocks="$page.project._rawBody" />
        <project-pagination :next="$page.next" :next-image="$page.next.mainImage" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($id: ID!, $nextID: ID!) {

    project: sanityProject (id: $id) {
      title
      _rawBody
      mainImage {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }
    }

    next: sanityProject (id: $nextID) {
      slug {
        current
      }
      title
      mainImage {
        asset {
          id
          localFile(width: 400, quality: 60)
          url
        }
      }
    }
  }
</page-query>

<script>
import AppImage from '@/components/AppImage.vue';
import BlockContent from '@/components/BlockContent.vue';
import ProjectPagination from '@/components/Project/ProjectPagination.vue';

export default {
  name: 'Project',

  components: {
    AppImage,
    BlockContent,
    ProjectPagination,
  },

  metaInfo() {
    return {
      title: this.$page.project.title,
    };
  },
};
</script>

<style lang="css" scoped>
.project-content p {
  @apply text-lg leading-relaxed px-0;
}
</style>

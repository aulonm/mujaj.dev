<template>
  <ul class="dev-projects grid gap-8 items-stretch">
    <project-card v-for="project in projects" :key="project.node.id" :project="project.node" />
  </ul>
</template>

<script>
import ProjectCard from '@/components/Project/ProjectCard.vue';

export default {
  name: 'ProjectList',

  components: {
    ProjectCard,
  },

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
@screen md {
  .dev-projects {
    grid-template-columns: 1fr 1fr;
  }

  .dev-projects li {
    grid-column: auto/span 1;
  }
}

@screen lg {
  .dev-projects li:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
</style>

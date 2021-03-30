<template>
  <ul class="dev-blog-posts grid gap-8 items-stretch">
    <li v-for="(edge, index) in posts" :key="edge.node.id">
      <post-card :index="index" :post="edge.node" />
    </li>
  </ul>
</template>

<script>
import PostCard from '@/components/Blog/PostCard.vue';

export default {
  name: 'PostList',

  components: {
    PostCard,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
@screen md {
  .dev-blog-posts {
    grid-template-columns: 1fr 1fr;
  }
  .dev-blog-posts li {
    grid-column: auto/span 1;
  }
}

@screen xl {
  .dev-blog-posts li:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
</style>

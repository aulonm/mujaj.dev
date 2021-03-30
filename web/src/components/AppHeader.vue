<template>
  <header class="flex items-center mb-6 h-20">
    <div class="container flex items-center justify-between">
      <div class="app-logo">
        <g-link to="/">
          <strong>{{ $static.metadata.siteName }}</strong>
        </g-link>
      </div>
      <nav class="ml-auto">
        <ul class="flex">
          <li v-for="item in nav" :key="'nav-item-' + item.label">
            <g-link class="font-semibold lowercase ml-6" :to="item.to">
              {{ item.label }}
            </g-link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: {
    ThemeToggle,
  },

  data: () => ({
    nav: [
      {
        label: 'about',
        to: '/about',
      },
      {
        label: 'blog',
        to: '/blog',
      },
      {
        label: 'projects',
        to: '/projects',
      },
      {
        label: 'portfolio',
        to: '/portfolios',
      },
    ],
  }),
};
</script>

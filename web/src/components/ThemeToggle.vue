<template>
  <button
    class="p-4 ml-4 -mr-4 focus:outline-none"
    :aria-label="`Current theme is ${mode}, next theme is ${nextThemeMode}`"
    @click="handleClick"
  >
    <sun-icon v-if="isDark" size="1.5x" />
    <moon-icon v-else size="1.5x" />
  </button>
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons';
// local storage key
const LS_MODE = 'aka-theme-mode';

export default {
  components: {
    SunIcon,
    MoonIcon,
  },

  data: () => ({
    mode: 'light',
  }),

  computed: {
    isDark() {
      return this.mode === 'dark';
    },

    nextThemeMode() {
      return this.isDark ? 'light' : 'dark';
    },
  },

  mounted() {
    if (this.hasInStorage()) {
      this.mode = this.getLocalThemeMode();
      this.setThemeMode();
    } else {
      this.mode = window && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      this.setThemeMode();
    }
    console.log(this.mode);
  },

  methods: {
    handleClick() {
      this.mode = this.isDark ? 'light' : 'dark';
      this.setThemeMode();
    },

    setThemeMode() {
      this.saveThemeMode(this.mode);
      document.body.setAttribute('data-theme', this.mode);
    },

    hasInStorage() {
      const mode = localStorage.getItem(LS_MODE);

      return mode !== null;
    },

    getLocalThemeMode() {
      return localStorage.getItem(LS_MODE);
    },

    saveThemeMode(mode) {
      localStorage.setItem(LS_MODE, mode);
    },
  },
};
</script>

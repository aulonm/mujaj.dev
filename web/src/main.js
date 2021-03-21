/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

import VueHighlightJS from 'vue-highlight.js';

import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

// Import main css
import 'fontsource-inter';
import 'fontsource-inter/600.css';
import 'fontsource-inter/700.css';
import 'fontsource-inter/900.css';

import '@/assets/styles/tailwind.css';
import '@/assets/styles/theme.css';
import '@/assets/styles/global.css';

import 'highlight.js/styles/darcula.css';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '@/layouts/Default.vue';

// Import image url builder
import urlForImage from './utils/urlForImage';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueHighlightJS, {
    languages: {
      css,
      javascript,
      vue
    },
  })

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage;
}

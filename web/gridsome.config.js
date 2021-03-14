// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const tailwind = require('tailwindcss');
const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteName: 'Mujaj dev',
  siteDescription: 'Just a website for Mujaj dev',

  templates: {
    SanityPost: '/:slug__current',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  },

  plugins: [
    {
      use: 'gridsome-plugin-svg',
      options: {
        goesBothWays: true,
      },
    },
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd,
      },
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        cache: false,
        typeName: 'SanityImageAsset',
        schemaType: 'Image',
        sourceField: 'url',
        targetField: 'localFile',
        targetPath: 'src/assets/sanity/images',
      },
    },
    /* {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      },
      {

      }
    } */
  ],
};

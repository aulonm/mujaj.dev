// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')

const { createPagesQuery, createPagesWithPagination } = require('./src/utils/createPages')

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })

  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(createPagesQuery)
    const allSanityPosts = data.allSanityPost.edges
    const allSanityProjects = data.allSanityProject.edges

    createPagesWithPagination({
      edges: allSanityPosts,
      component: './src/templates/Post.vue',
      path: 'blog',
      createPage,
    })
    createPagesWithPagination({
      edges: allSanityProjects,
      component: './src/templates/Project.vue',
      path: 'projects',
      createPage,
    })
  })
}

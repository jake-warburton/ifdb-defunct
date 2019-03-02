const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postTemplate = path.resolve(`./src/templates/post/index.js`)

    // In production builds, filter for only published posts.
    const allPosts = result.data.allWordpressPost.edges
    const posts =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPosts)
        : allPosts

    // Iterate over the array of posts
    _.each(posts, ({ node: post }) => {
      // Create the Gatsby page for this WordPress post
      createPage({
        path: `/post/${post.slug}/`,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })
  })
}

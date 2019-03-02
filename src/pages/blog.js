import React from 'react'
import { graphql } from 'gatsby'

import Basic from '../layouts/basic/'
import SEO from '../components/seo'
import BlogPosts from '../components/blog-posts/'

const BlogPage = ({ data }) => (
  <Basic currentPageTitle={data.wordpressPage['title']}>
    {console.log('data', data)}
    <SEO
      title={data.wordpressPage['title']}
      keywords={[`web development portfolio`, `web design services`]}
      description={data.wordpressPage['excerpt'].replace(/(<([^>]+)>)/gi, '')}
    />
    <div className="container">
      <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
        <div
          className="wordpress-content"
          dangerouslySetInnerHTML={{ __html: data.wordpressPage['content'] }}
        />
      </div>
    </div>
    <div className="container">
      <div className="px-1 px-md-2 px-lg-3 px-xl-5">
        <BlogPosts blogData={data.allWordpressPost} />
      </div>
    </div>
  </Basic>
)

export default BlogPage

export const blogPageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 49 }) {
      title
      content
      excerpt
    }
    allWordpressPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          featured_media {
            source_url
          }
          categories {
            id
            name
            taxonomy {
              id
              name
            }
          }
          tags {
            id
            name
          }
        }
      }
    }
  }
`

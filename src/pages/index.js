import React from 'react'
import { Link, graphql } from 'gatsby'

import Home from '../layouts/home/'
import SEO from '../components/seo'
import BlogPosts from '../components/blog-posts/'

const IndexPage = ({ data }) => (
  <Home currentPageTitle={data.wordpressPage['title']}>
    <SEO
      title={data.wordpressPage['title']}
      keywords={[`web development portfolio`, `web design services`]}
      description={data.wordpressPage['excerpt'].replace(/(<([^>]+)>)/gi, '')}
    />

    <div className="row">
      <div className="col">
        <div className="container">
          <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
            <div
              className="wordpress-content"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage['content'],
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5 col-xl-4 latest-blogs-holder">
        <div className="container">
          <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
            <h2 className="pb-4">Latest posts</h2>
            <BlogPosts blogData={data.allWordpressPost} />
            <div className="text-center pb-5">
              <Link to="/blog/">
                <span className="button-sleek">View all posts</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Home>
)

export default IndexPage

export const homePageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 7 }) {
      title
      content
      excerpt
    }
    allWordpressPost(limit: 3, sort: { fields: date, order: DESC }) {
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

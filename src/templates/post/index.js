import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Basic from '../../layouts/basic/'
import SEO from '../../components/seo.js'

import './style.css'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Basic>
        <SEO
          title={post.title}
          keywords={[`web development portfolio`, `web design services`]}
          description={post.excerpt.replace(/(<([^>]+)>)/gi, '')}
        />
        <div className="container">
          <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
            <Link to="/blog/">
              <span className="button-sleek">Back to all posts</span>
            </Link>
          </div>
          <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          </div>
          <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
            <div
              className="wordpress-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </Basic>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React, { Component } from 'react'
import { Link } from 'gatsby'

import './style.css'

class BlogPosts extends Component {
  render() {
    const renderedTags = ({ tags }) =>
      tags.map(tag => {
        console.log(tag)
      })

    const renderedBlogPosts = this.props.blogData.edges.map(post => (
      <Link to={'/post/' + post['node']['slug'] + '/'}>
        <div className="row">
          <div
            className="col p-0 d-flex justify-content-start align-items-end blog-post-card"
            style={{
              backgroundImage:
                `url(` + post['node']['featured_media']['source_url'] + `)`,
            }}
          >
            <div className="px-3 caption-card-holder">
              <div className="col-12 caption-card">
                <h4>{post['node']['title']}</h4>
                {() => renderedTags(post['node']['tags'])}
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))

    return <>{renderedBlogPosts}</>
  }
}

export default BlogPosts

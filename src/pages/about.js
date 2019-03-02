import React from 'react'
import { graphql } from 'gatsby'

import Basic from '../layouts/basic/'
import SEO from '../components/seo'

const AboutPage = ({ data }) => (
  <Basic currentPageTitle={data.wordpressPage['title']}>
    {console.log('data', data)}
    <SEO
      title={data.wordpressPage['title']}
      keywords={[`web development portfolio`, `web design services`]}
      description={data.wordpressPage['excerpt'].replace(/(<([^>]+)>)/gi, '')}
    />
    <div className="container pb-5">
      <div className="pt-5 px-1 px-md-2 px-lg-3 px-xl-5">
        <div
          className="wordpress-content"
          dangerouslySetInnerHTML={{ __html: data.wordpressPage['content'] }}
        />
      </div>
    </div>
  </Basic>
)

export default AboutPage

export const aboutPageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 32 }) {
      title
      content
      excerpt
    }
  }
`

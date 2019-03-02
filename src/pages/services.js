import React from 'react'
import { graphql } from 'gatsby'

import Basic from '../layouts/basic/'
import SEO from '../components/seo'
import ServicesInDetail from '../components/services-in-detail/'

const ServicesPage = ({ data }) => (
  <Basic currentPageTitle={data.wordpressPage['title']}>
    <SEO
      title={data.wordpressPage['title']}
      keywords={[`web development portfolio`, `web design services`]}
      description={data.wordpressPage['excerpt'].replace(/(<([^>]+)>)/gi, '')}
    />
    <div className="container">
      <ServicesInDetail />
    </div>
  </Basic>
)

export default ServicesPage

export const servicesPageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 165 }) {
      title
      content
      excerpt
    }
  }
`

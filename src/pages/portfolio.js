import React from 'react'
import { graphql } from 'gatsby'

import Basic from '../layouts/basic/'
import SEO from '../components/seo'

import artifactoryImg from '../images/portfolio/thumb/artifactory.jpg'
import cruise118Img from '../images/portfolio/thumb/c118.jpg'
import gwentnowImg from '../images/portfolio/thumb/gwentnow.jpg'
import jade3Img from '../images/portfolio/thumb/jade3architecture.jpg'
import riverImg from '../images/portfolio/thumb/river.jpg'
import sscImg from '../images/portfolio/thumb/ssc.jpg'
import tetrisImg from '../images/portfolio/thumb/tetris.jpg'

import '../css/portfolio/style.css'

const PortfolioPage = ({ data }) => (
  <Basic currentPageTitle={data.wordpressPage['title']}>
    <SEO
      title={data.wordpressPage['title']}
      keywords={[`websites`, `portfolio`, `web development`]}
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

    <div className="container mb-5  projectsHolder">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="row">
            <div className="col-12">
              <a href="https://www.gwentnow.com/">
                <div className="portfolio_item_holder">
                  <img
                    src={gwentnowImg}
                    className="img-fluid portfolio_screenshot"
                    alt="gwentnow screenshot"
                    title="gwentnow screenshot"
                  />
                  <div className="portfolio_overlay">
                    <span>VISIT WEBSITE</span>
                    <a href="https://bitbucket.org/JakeWarburton/gwentnow/src/default/">
                      VIEW SOURCE
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12">
              <a href="https://www.artifactory.co.uk/">
                <div className="portfolio_item_holder">
                  <img
                    src={artifactoryImg}
                    className="img-fluid portfolio_screenshot"
                    alt="artifactory screenshot"
                    title="artifactory screenshot"
                  />
                  <div className="portfolio_overlay">
                    <span>VISIT WEBSITE</span>
                    <a href="https://bitbucket.org/JakeWarburton/blinkdagger.next/src/default/">
                      VIEW SOURCE
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="row">
            <div className="col-12">
              <a href="http://www.rivervoyages.com">
                <div className="portfolio_item_holder">
                  <img
                    src={riverImg}
                    className="img-fluid portfolio_screenshot"
                    alt="rivervoyages screenshot"
                    title="rivervoyages screenshot"
                  />
                  <div className="portfolio_overlay">VISIT WEBSITE</div>
                </div>
              </a>
            </div>
            <div className="col-12">
              <a href="http://www.jade3architecture.co.uk/">
                <div className="portfolio_item_holder">
                  <img
                    src={jade3Img}
                    className="img-fluid portfolio_screenshot"
                    alt="jade3architecture screenshot"
                    title="jade3architecture screenshot"
                  />

                  <div className="portfolio_overlay">VISIT WEBSITE</div>
                </div>
              </a>
            </div>
            <div className="col-12">
              <a href="https://www.cruise118.com/">
                <div className="portfolio_item_holder">
                  <img
                    src={cruise118Img}
                    className="img-fluid portfolio_screenshot"
                    alt="cruise118 screenshot"
                    title="cruise118 screenshot"
                  />
                  <div className="portfolio_overlay">VISIT WEBSITE</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="row">
            <div className="col-12">
              <a href="https://quizzical-einstein-cfbff0.netlify.com/">
                <div className="portfolio_item_holder">
                  <img
                    src={tetrisImg}
                    className="img-fluid portfolio_screenshot"
                    alt="tetris screenshot"
                    title="tetris screenshot"
                  />

                  <div className="portfolio_overlay">
                    <span>VISIT APP</span>
                    <a href="https://bitbucket.org/JakeWarburton/tetris/src/default/">
                      VIEW SOURCE
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12">
              <a href="http://www.sixstarcruises.co.uk/">
                <div className="portfolio_item_holder">
                  <img
                    src={sscImg}
                    className="img-fluid portfolio_screenshot"
                    alt="sixstarcruises screenshot"
                    title="sixstarcruises screenshot"
                  />

                  <div className="portfolio_overlay">VISIT WEBSITE</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Basic>
)

export default PortfolioPage

export const PortfolioPageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 36 }) {
      title
      content
      excerpt
    }
  }
`

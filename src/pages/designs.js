import React from 'react'
import { graphql } from 'gatsby'

import Basic from '../layouts/basic/'
import SEO from '../components/seo'
import FullScreenImg from '../components/full-screen-img/'
import FullScreenImgStore from '../components/full-screen-img/store.js'

import diverImg from '../images/designs/thumb/diver.jpg'
import escapeImg from '../images/designs/thumb/escape.jpg'
import fashionImg from '../images/designs/thumb/fashion.jpg'
import thailandImg from '../images/designs/thumb/thailand.jpg'
import wrcImg from '../images/designs/thumb/wrc.jpg'
import yourmoveImg from '../images/designs/thumb/yourmove.jpg'
import zeldaImg from '../images/designs/thumb/zelda.jpg'
import vansImg from '../images/designs/thumb/vans.jpg'
import loungeImg from '../images/designs/thumb/lounge.jpg'
import gamehavenImg from '../images/designs/thumb/gamehaven.jpg'
import gamehaven2Img from '../images/designs/thumb/gamehaven2.jpg'
import spotifyImg from '../images/designs/thumb/spotify.jpg'

import fullDiverImg from '../images/designs/full/diver/1.jpg'
import fullEscapeImg from '../images/designs/full/escape/1.jpg'
import fullFashionImg from '../images/designs/full/fashion/1.jpg'
import fullThailandImg from '../images/designs/full/thailand/1.jpg'
import fullWrcImg from '../images/designs/full/wrc/1.jpg'
import fullYourmoveImg from '../images/designs/full/yourmove/1.jpg'
import fullZeldaImg from '../images/designs/full/zelda/1.jpg'
import fullVansImg from '../images/designs/full/vans/1.jpg'
import fullSpotify1Img from '../images/designs/full/spotify/1.jpg'
import fullSpotify2Img from '../images/designs/full/spotify/2.jpg'
import fullLoungeImg from '../images/designs/full/lounge/1.jpg'
import fullGamehavenImg from '../images/designs/full/gamehaven/1.jpg'
import fullGamehaven2Img from '../images/designs/full/gamehaven/2.jpg'

import '../css/designs/style.css'

const DesignsPage = ({ data }) => (
  <Basic currentPageTitle={data.wordpressPage['title']}>
    <SEO
      title={data.wordpressPage['title']}
      keywords={[`web design`, `portfolio`, `design`]}
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
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullWrcImg])
                }
              >
                <img
                  src={wrcImg}
                  className="img-fluid portfolio_screenshot"
                  alt="WRC screenshot"
                  title="WRC screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullGamehavenImg])
                }
              >
                <img
                  src={gamehavenImg}
                  className="img-fluid portfolio_screenshot"
                  alt="gamehaven screenshot"
                  title="gamehaven screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([
                    fullGamehaven2Img,
                  ])
                }
              >
                <img
                  src={gamehaven2Img}
                  className="img-fluid portfolio_screenshot"
                  alt="gamehaven second screenshot"
                  title="gamehaven second screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullLoungeImg])
                }
              >
                <img
                  src={loungeImg}
                  className="img-fluid portfolio_screenshot"
                  alt="The Lounge screenshot"
                  title="The Lounge screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="row">
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullFashionImg])
                }
              >
                <img
                  src={fashionImg}
                  className="img-fluid portfolio_screenshot"
                  alt="fashion screenshot"
                  title="fashion screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullEscapeImg])
                }
              >
                <img
                  src={escapeImg}
                  className="img-fluid portfolio_screenshot"
                  alt="escape screenshot"
                  title="escape screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullDiverImg])
                }
              >
                <img
                  src={diverImg}
                  className="img-fluid portfolio_screenshot"
                  alt="diver screenshot"
                  title="diver screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([
                    fullSpotify1Img,
                    fullSpotify2Img,
                  ])
                }
              >
                <img
                  src={spotifyImg}
                  className="img-fluid portfolio_screenshot"
                  alt="spotify screenshot"
                  title="spotify screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="row">
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullYourmoveImg])
                }
              >
                <img
                  src={yourmoveImg}
                  className="img-fluid portfolio_screenshot"
                  alt="Your Move screenshot"
                  title="Your Move screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullThailandImg])
                }
              >
                <img
                  src={thailandImg}
                  className="img-fluid portfolio_screenshot"
                  alt="thailand screenshot"
                  title="thailand screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullZeldaImg])
                }
              >
                <img
                  src={zeldaImg}
                  className="img-fluid portfolio_screenshot"
                  alt="zelda screenshot"
                  title="zelda screenshot"
                />
                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="portfolio_item_holder"
                onClick={() =>
                  FullScreenImgStore.ToggleShowFullScreenImg([fullVansImg])
                }
              >
                <img
                  src={vansImg}
                  className="img-fluid portfolio_screenshot"
                  alt="vans screenshot"
                  title="vans screenshot"
                />

                <div className="portfolio_overlay">VIEW FULLSCREEN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FullScreenImg />
  </Basic>
)

export default DesignsPage

export const designsPageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 46 }) {
      title
      content
      excerpt
    }
  }
`

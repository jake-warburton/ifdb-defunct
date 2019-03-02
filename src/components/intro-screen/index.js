import React from 'react'
import { MdMailOutline } from 'react-icons/md'
import ServicesOverview from '../services-overview/'

import './style.css'
import bg from '../../images/backgrounds/head-bg.jpg'
import laptop from '../../images/misc/laptop.png'

import wave from './wave.svg'

const IntroScreen = ({ children }) => (
  <>
    <div className="container-fluid px-0 d-flex flex-column intro-screen-holder">
      {children}
      <div className="intro-screen-background">
        <div className="intro-screen-top-mobile-spacer" />
        <img
          src={bg}
          className="img-fluid"
          alt="Sleekweb wave graphic background"
        />
      </div>
      <div className="container-fluid container-large">
        <div className="row mx-0">
          <div className="col d-flex flex-wrap justify-content-between header-intro-text text-center">
            <div className="mx-auto mx-md-0 mr-md-auto pb-5 text-center text-md-left">
              <h2 className="heading-title-large">
                Web design &<br /> development.
              </h2>
              <a href="mailto:jakewarburton6@gmail.com">
                <button className="btn btn-default btn-lg btn-cta-hollow mt-1 mt-lg-4">
                  <span className="px-3">email me</span>
                  <MdMailOutline size="2rem" />
                </button>
              </a>
            </div>
            <div className="mx-auto mx-md-0 intro-screen-asset-laptop-holder">
              <img
                src={laptop}
                className="img-fluid"
                alt="Laptop graphic with my spotify desktop mockup on"
                title="Laptop graphic and spotify"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid container-large mt-auto">
        <ServicesOverview />
      </div>
    </div>

    <div className="container-fluid container-large mt-auto">
      <div className="ocean">
        <div
          className="wave"
          style={{
            background: `url(` + wave + `) repeat-x`,
          }}
        />
        <div
          className="wave"
          style={{
            background: `url(` + wave + `) repeat-x`,
          }}
        />
      </div>
    </div>
  </>
)

export default IntroScreen

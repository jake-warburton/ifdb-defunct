import React from 'react'
import { Link } from 'gatsby'

import './style.css'

import imgWebsite from '../../images/misc/services-icons/website.png'
import imgSocial from '../../images/misc/services-icons/social.png'
import imgSeo from '../../images/misc/services-icons/seo.png'
import imgDomain from '../../images/misc/services-icons/domain.png'

const ServicesOverview = () => (
  <div className="row services-overview-section">
    <div className="col-12 d-flex">
      <div className="mx-auto my-5 d-flex flex-column">
        <div className="services-title-holder">
          <Link className="nav-link" to="/services/">
            <div className="mx-auto mb-2 sleek-badge badge-d-blue title-d-blue">
              Services
            </div>
          </Link>
          <span className="h3 font-heavy text-center">
            Hi, how can I help you?
          </span>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg mb-5">
      <div className="sleek-card d-flex flex-column">
        <h4 className="pt-4 title-d-green font-heavy">Custom website</h4>
        <img
          src={imgWebsite}
          className="img-fluid mt-auto"
          alt="custom-website"
          title="custom-website"
        />
        <Link className="nav-link" to="/services/#customwebsite">
          <div className="mx-auto sleek-badge badge-d-green title-d-green">
            Read more
          </div>
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg mb-5">
      <div className="sleek-card d-flex flex-column">
        <h4 className="pt-4 title-red font-heavy">Social network</h4>
        <img
          src={imgSocial}
          className="img-fluid mt-auto"
          alt="social-network"
          title="social-network"
        />
        <Link className="nav-link" to="/services/#socialnetwork">
          <div className="mx-auto sleek-badge badge-red title-red">
            Read more
          </div>
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg mb-5">
      <div className="sleek-card d-flex flex-column">
        <h4 className="pt-4 title-blue font-heavy">SEO ranking</h4>
        <img
          src={imgSeo}
          className="img-fluid mt-auto"
          alt="seo-ranking"
          title="seo-ranking"
        />
        <Link className="nav-link" to="/services/#seoranking">
          <div className="mx-auto sleek-badge badge-blue title-blue">
            Read more
          </div>
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg mb-5">
      <div className="sleek-card  d-flex flex-column">
        <h4 className="pt-4 title-green font-heavy">Hosting & domain</h4>
        <img
          src={imgDomain}
          className="img-fluid mt-auto"
          alt="hosting-and-domain"
          title="hosting-and-domain"
        />
        <Link className="nav-link" to="/services/#hostingdomain">
          <div className="mx-auto sleek-badge badge-green title-green">
            Read more
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default ServicesOverview

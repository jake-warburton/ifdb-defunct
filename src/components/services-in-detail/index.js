import React from 'react'
import { MdMailOutline } from 'react-icons/md'

import './style.css'

import imgWebsite from '../../images/misc/services-icons/website.png'
import imgSocial from '../../images/misc/services-icons/social.png'
import imgSeo from '../../images/misc/services-icons/seo.png'
import imgDomain from '../../images/misc/services-icons/domain.png'

const ServicesInDetail = () => (
  <>
    <div className="row services-overview-section">
      <div className="col-12 d-flex">
        <div className="mx-auto my-5 d-flex flex-column">
          <span className="h3 font-heavy text-center">
            Hi, how can I help you?
          </span>
        </div>
      </div>
    </div>
    <div className="row">
      <div
        id="customwebsite"
        className="col-12 col-md-5 col-lg-4 text-center mb-5"
      >
        <h4 className="pt-4 title-d-green font-heavy">Custom website</h4>
        <img
          src={imgWebsite}
          className="img-fluid mt-auto"
          alt="custom-website"
          title="custom-website"
        />
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-start">
        <p>
          A website is your key to running a successful online business. It is a
          necessity, to both gain customers, advertise your product or service,
          or make transactions.
        </p>
        <p>
          My custom site design and development will produce an optimize website
          for you and your business. With years of experience and expertise, I
          can guarantee your satisfaction with the end product.
        </p>
        <p>
          I offer web design and/or development which means I can provide
          anything from mock-ups of your site, to the finished product.
        </p>
      </div>
    </div>
    <div className="row">
      <div
        id="socialnetwork"
        className="col-12 col-md-5 col-lg-4 text-center mb-5"
      >
        <h4 className="pt-4 title-red font-heavy">Social network</h4>
        <img
          src={imgSocial}
          className="img-fluid mt-auto"
          alt="social-network"
          title="social-network"
        />
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-start">
        <p>
          An organic social network presence is very important for online
          businesses. It shows the customer that you are real and helps build
          trust in you and your product or service - working towards the final
          sale.
        </p>
        <p>
          With my expertise, I can help your social network grow larger through
          interactions, promotions and content strategy.
        </p>
      </div>
    </div>
    <div className="row">
      <div
        id="seoranking"
        className="col-12 col-md-5 col-lg-4 text-center mb-5"
      >
        <h4 className="pt-4 title-blue font-heavy">SEO ranking</h4>
        <img
          src={imgSeo}
          className="img-fluid mt-auto"
          alt="seo-ranking"
          title="seo-ranking"
        />
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-start">
        <p>
          SEO, or Search Engine Optimisation, is the process of building and
          maintaining your website in a way which search engines such as Google
          prefer.
        </p>
        <p>
          This results in your website appearing earlier in the search results
          when a term relevant to your business is searched for.
        </p>
        <p>
          Search engines can also penalise your site if it is slow, heavy on the
          user or hard to use. With my help, your site could be highly optimised
          for search engines, which means more customers.
        </p>
      </div>
    </div>
    <div className="row">
      <div
        id="hostingdomain"
        className="col-12 col-md-5 col-lg-4 text-center mb-5"
      >
        <h4 className="pt-4 title-green font-heavy">Hosting & domain</h4>
        <img
          src={imgDomain}
          className="img-fluid mt-auto"
          alt="hosting-and-domain"
          title="hosting-and-domain"
        />
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-start">
        <p>
          Hosting your own website, or purchasing and connecting your own domain
          can be confusing if you don't do it often.
        </p>
        <p>
          I offer cheap hosting solutions and can also deal with the domain for
          you,leaving you to get on with what really matters to your business.
        </p>
      </div>
    </div>
    <div className="row services-overview-section">
      <div className="col-12 d-flex">
        <div className="mx-auto my-5 d-flex flex-column text-center">
          <span className="h3 font-heavy text-center">
            If any of this sounds useful
          </span>
          <a href="mailto:jakewarburton6@gmail.com">
            <button className="btn btn-default btn-lg btn-cta-turquoise mt-1 mt-lg-4">
              <span className="px-3">email me</span>
              <MdMailOutline size="2rem" />
            </button>
          </a>
        </div>
      </div>
    </div>
  </>
)

export default ServicesInDetail

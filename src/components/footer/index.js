import React from 'react'

import SocialIcons from '../social/'
import './style.css'

const Footer = () => (
  <div className="container-fluid footer-holder">
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md d-flex">
          <div className="my-2 mx-auto mx-md-0 mr-md-auto">
            Copyright 2019 Sleekweb©
          </div>
        </div>
        <div className="col-12 col-md d-flex">
          <div className="my-2 mx-auto mx-md-0 ml-md-auto">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

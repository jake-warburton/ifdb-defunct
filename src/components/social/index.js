import React from 'react'

import './style.css'

import fb from '../../images/social/fb.png'
import tw from '../../images/social/tw.png'
import gr from '../../images/social/in.png'
import li from '../../images/social/li.png'
import em from '../../images/social/em.png'

const SocialIcons = () => (
  <div className="social-icons d-flex ">
    <div className="social_icon">
      <a href="https://www.facebook.com/sleekweb/">
        <img src={fb} alt="facebook" title="facebook" className="img-fluid" />
      </a>
    </div>
    <div className="social_icon">
      <a href="https://twitter.com/sleekwebuk">
        <img src={tw} alt="twitter" title="twitter" className="img-fluid" />
      </a>
    </div>
    <div className="social_icon">
      <a href="https://www.instagram.com/sleekweb/">
        <img src={gr} alt="instagram" title="instagram" className="img-fluid" />
      </a>
    </div>
    <div className="social_icon">
      <a href="https://www.linkedin.com/in/jake-warburton-b53725bb/">
        <img src={li} alt="linkedin" title="linkedin" className="img-fluid" />
      </a>
    </div>
    <div className="social_icon">
      <a href="mailto:jakewarburton6@gmail.com">
        <img src={em} alt="email" title="email" className="img-fluid" />
      </a>
    </div>
  </div>
)

export default SocialIcons

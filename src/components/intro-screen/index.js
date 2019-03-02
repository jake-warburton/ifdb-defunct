import React from 'react'

import './style.css'

import bgTop from '../../images/backgrounds/top1.png'
import bgBottom from '../../images/backgrounds/bottom1.png'

const IntroScreen = ({ children }) => (
  <div className="container-fluid p-0 site-background-holder">
    <div className="intro-screen-background">
      <img
        src={bgTop}
        className="img-fluid food-background food-background-top"
        alt="Food database background top"
      />
    </div>
    <div className="intro-screen-background ">
      <img
        src={bgBottom}
        className="img-fluid food-background food-background-bottom"
        alt="Food database background bottom"
      />
    </div>
    {children}
  </div>
)

export default IntroScreen

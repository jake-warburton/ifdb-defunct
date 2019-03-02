import React from 'react'
import PropTypes from 'prop-types'

import IntroScreen from '../../components/intro-screen/'
import Navbar from '../../components/navbar/'
import Footer from '../../components/footer/'

import '../../css/bootstrap.min.css'
import '../../css/style.css'
import './style.css'

const Home = ({ currentPageTitle, children }) => (
  <>
    <IntroScreen>
      <Navbar currentPageTitle={currentPageTitle} />
    </IntroScreen>
    <div className="container-fluid main-content">{children}</div>
    <Footer />
  </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home

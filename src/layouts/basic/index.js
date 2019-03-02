import React from 'react'
import PropTypes from 'prop-types'

import BasicHeader from '../../components/basic-header/'
import Navbar from '../../components/navbar/'
import Footer from '../../components/footer/'

import '../../css/bootstrap.min.css'
import '../../css/style.css'
import './style.css'

const Basic = ({ currentPageTitle, children }) => (
  <>
    <BasicHeader>
      <Navbar currentPageTitle={currentPageTitle} />
    </BasicHeader>
    <div className="container-fluid main-content">{children}</div>
    <Footer />
  </>
)

Basic.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Basic

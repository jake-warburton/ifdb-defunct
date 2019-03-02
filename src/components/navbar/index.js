import React, { Component } from 'react'
import { Link } from 'gatsby'
import Sticky from 'react-sticky-el'

import SocialIcons from '../social/'

import { IoIosArrowDropup } from 'react-icons/io'
import logo from '../../images/logos/logo-small.png'
import './style.css'

class Navbar extends Component {
  ToggleNavbarCollapse() {
    const navbar = document.getElementById('navbarNavDropdown')
    navbar.classList.toggle('navbar-sleekweb-show')
    const background = document.getElementById('navbarNavBackgroundToggler')
    background.classList.toggle('navbar-sleekweb-background-toggler-show')
  }

  render() {
    const { currentPageTitle } = this.props

    return (
      <>
        <Sticky
          topOffset={0}
          className="waitingBarTop container-fluid px-0 nav-bar"
          stickyClassName={'stickyBarTop'}
        >
          <div className="container container-large">
            <nav className="navbar navbar-expand-lg navbar-dark row m-0">
              <div className="d-block col-9 col-lg-2 col-xl-3">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                  <img
                    src={logo}
                    className="navbar-logo"
                    alt="sleekweb logo brackets"
                    title="sleekweb logo"
                  />
                  <h1 className="navbar-brand-header">SLEEKWEB</h1>
                </Link>
              </div>
              <div className="d-flex justify-content-end d-lg-none col-3">
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarNavDropdown"
                  aria-label="Toggle navbar dropdown"
                  onClick={this.ToggleNavbarCollapse}
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>

              <div className="navbar-sleekweb col-lg" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto justify-content-lg-center">
                  <li
                    className={
                      'nav-item' +
                      (currentPageTitle === 'Home' ? ' nav-item-current ' : '')
                    }
                  >
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      'nav-item' +
                      (currentPageTitle === 'Portfolio'
                        ? ' nav-item-current '
                        : '')
                    }
                  >
                    <Link className="nav-link" to="/portfolio/">
                      Portfolio
                    </Link>
                  </li>
                  <li
                    className={
                      'nav-item' +
                      (currentPageTitle === 'Designs'
                        ? ' nav-item-current '
                        : '')
                    }
                  >
                    <Link className="nav-link" to="/designs/">
                      Designs
                    </Link>
                  </li>
                  <li
                    className={
                      'nav-item' +
                      (currentPageTitle === 'Services'
                        ? ' nav-item-current '
                        : '')
                    }
                  >
                    <Link className="nav-link" to="/services/">
                      Services
                    </Link>
                  </li>
                  <li
                    className={
                      'nav-item' +
                      (currentPageTitle === 'Blog' ? ' nav-item-current ' : '')
                    }
                  >
                    <Link className="nav-link" to="/blog/">
                      Blog
                    </Link>
                  </li>
                  <li
                    className={
                      'nav-item' +
                      (currentPageTitle === 'About' ? ' nav-item-current ' : '')
                    }
                  >
                    <Link className="nav-link" to="/about/">
                      About
                    </Link>
                  </li>
                  <li className="d-lg-none">
                    <div className="nav-link d-flex justify-content-around">
                      <div className="py-3">
                        <SocialIcons />
                      </div>
                    </div>
                  </li>
                  <li className="d-lg-none">
                    <div
                      onClick={this.ToggleNavbarCollapse}
                      className="nav-link d-flex justify-content-around"
                    >
                      <div className="py-3">
                        <IoIosArrowDropup size="2em" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="d-none d-xl-flex col-xl-3">
                <div className="ml-auto">
                  <SocialIcons />
                </div>
              </div>
            </nav>
          </div>
        </Sticky>
        <div
          id="navbarNavBackgroundToggler"
          className="navbar-sleekweb-background-toggler"
          onClick={this.ToggleNavbarCollapse}
        />
      </>
    )
  }
}

export default Navbar

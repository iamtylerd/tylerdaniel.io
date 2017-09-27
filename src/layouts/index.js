import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () =>
  <div>
    <div className="menuWrapper">
      <div className="logo">
        <h1>
          <Link
          className="logo-item"
            to="/"
          >
            TD
          </Link>
        </h1>
      </div>
      <div className="menu-items">
          <Link
            className="menu-item"
            to="/about"
          >
            About
          </Link>
          <Link
            className="menu-item"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="menu-item"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="menu-item"
            to="/contact"
          >
            Contact
          </Link>
      </div>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Tyler Daniel"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

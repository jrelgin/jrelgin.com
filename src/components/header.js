import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <nav>
      <Link to="/"><span role="img" aria-label="Home">🏠</span></Link>
      <Link to="/photos/"><span role="img" aria-label="Photos">📷</span></Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

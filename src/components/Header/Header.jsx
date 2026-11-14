import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PUBLIC_FEATURES } from '../../config/publicFeatures'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigation = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <header className="header">
      <nav className="navbar">
        <button className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-icon">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <span className="menu-text">CHAMPAGNE OFFICIAL</span>
        </button>
        <ul className={`nav-list ${menuOpen ? 'nav-open' : ''}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={handleNavigation}>
              HOME
            </NavLink>
          </li>
          {PUBLIC_FEATURES.productPages && (
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={handleNavigation}>
                CHAMPAGNE PRODUCTS
              </NavLink>
            </li>
          )}
          {PUBLIC_FEATURES.aboutPage && (
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={handleNavigation}>
                ABOUT CHAMPAGNE
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={handleNavigation}>
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => (
  <header className="header">
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Champagne Products</Link></li>
        <li><Link to="/about" className="nav-link">About Us</Link></li>
        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
) 
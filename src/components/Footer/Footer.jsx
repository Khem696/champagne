import { Link } from 'react-router-dom'
import './Footer.css'
import {ICONS} from '../../utils/iconUtils'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo-container">
        <img src={ICONS.BOTTLE_ICON} alt="Champagne Bottle" className="footer-logo" />
      </div>
      <div className="footer-main">
        <div className="footer-left">
          <Link to="/" className="footer-item">Home</Link>
          <Link to="/contact" className="footer-item">Contact us</Link>
          <Link to="/about" className="footer-item">About Champagne</Link>
        </div>
        <div className="footer-center">
          <div className="footer-item footer-heading">CHAMPAGNE PRODUCTS</div>
          <Link to="/products/1" className="footer-item">Champagne Flute</Link>
          <Link to="/products/2" className="footer-item">Champagne Coupe</Link>
        </div>
        <div className="footer-right">
          <div className="footer-item footer-contact-item">
            <span>+6693 883 2828</span>
            <img src={ICONS.TEL_ICON} alt="Phone" className="footer-icon" />
          </div>
          <div className="footer-item footer-contact-item">
            <span>@Champagneofficial</span>
            <img src={ICONS.LINE_ICON} alt="Line" className="footer-icon" />
          </div>
          <div className="footer-item footer-contact-item">
            <span>medscan28shop@gmail.com</span>
            <img src={ICONS.EMAIL_ICON} alt="Email" className="footer-icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Distribute by © MedScan28</p>
    </div>
  </footer>
)

export default Footer 
import './Footer.css'

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <hr className="footer-divider" />
        <div className="footer-links">
          <div>Home</div>
          <div>Contact us</div>
          <div>etc.</div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-distribute">Distribute by</div>
        <div className="footer-logo-row">
          <span className="footer-logo" role="img" aria-label="logo">🌐</span>
          <span className="footer-brand">MedScan28</span>
        </div>
      </div>
    </div>
  </footer>
) 
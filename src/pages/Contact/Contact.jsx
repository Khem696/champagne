import './Contact.css';
import { ICONS } from '../../utils/iconUtils';

const Contact = () => (
    <div className="contact-wrapper">
        <section className="contact-hero">
            <div className="contact-hero-bg" />
        </section>
        <section className="contact-content">
            <h2 className="contact-title">CONTACT US</h2>
            <div className="contact-info">
                <div className="tel">
                    <div className="tel-icon">
                        <img src={ICONS.TEL_ICON} alt="tel" />
                    </div>
                    <h2>+6693 883 2828</h2>
                </div>
                <div className='line'>
                    <div className="line-icon">
                        <img src={ICONS.LINE_ICON} alt="line" />
                    </div>
                    <h2>@Champagneofficial</h2>
                </div>
                <div className="email">
                    <div className="email-icon">
                        <img src={ICONS.EMAIL_ICON} alt="email" />
                    </div>
                    <h2>medscan28shop@gmail.com</h2>
                </div>
                <div className="line-qr">
                    <div className="line-qr-icon">
                        <img src={ICONS.LINE_QR_ICON} alt="line-qr" />
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Contact; 
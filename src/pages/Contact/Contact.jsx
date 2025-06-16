import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './Contact.css'

export const Contact = () => (
  <div className="contact-wrapper">
    <Header />
    <main className="contact-main">
      <section className="contact-hero">
        <div className="contact-hero-bg" />
      </section>
      <section className="contact-content">
        <h2 className="contact-title">CONTACT US</h2>
        <div className="contact-info">
          <div>Line OA</div>
          <div>Facebook Page</div>
          <div>IG</div>
          <div>EMAIL</div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
)

export default Contact 
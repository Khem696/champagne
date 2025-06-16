import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './About.css'

export const About = () => (
  <div className="about-wrapper">
    <Header />
    <main className="about-main">
      <section className="about-hero">
        <div className="about-hero-bg" />
      </section>
      <section className="about-content">
        <h2 className="about-title">ABOUT CHAMPAGNE</h2>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        </p>
        <div className="about-photos">
          <div className="about-photo">EVENT<br/>PHOTO</div>
          <div className="about-photo" />
          <div className="about-photo" />
        </div>
      </section>
    </main>
    <Footer />
  </div>
)

export default About 
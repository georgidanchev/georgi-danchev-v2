import DecorativeBorder from "../components/DecorativeBorder"
import DownArrow from "../components/DownArrow"
import particleConfig from "../../assets/particlesjs-config.json"
import Particles from "react-particles-js"
import ResponsiveImage from "../components/ResponsiveImage"

const Home = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME, REACT_APP_JOB_TITLE, REACT_APP_SITE_SUBTITLE } = process.env
  return (
    <section id="home" className="section section--hero" data-scroll-section>
      <div className="section-width section-width--padding home-section">
        <h1 className="home-section__title">
          <span className="home-section__title-inner home-section__title-inner--first">
            {REACT_APP_FIRST_NAME} {REACT_APP_LAST_NAME}
          </span>
          <span className="home-section__title-spacer">|</span>
          <span className="home-section__title-inner home-section__title-inner--second">{REACT_APP_JOB_TITLE}</span>
        </h1>
        <p className="home-section__text">{REACT_APP_SITE_SUBTITLE}</p>
      </div>

      <div className="section__bg-image-wrapper home">
        <ResponsiveImage image_class="section__bg-image" code="v1629540939" public_id="hero_rzr91t" alt="Laptop sitting on a desk" />
      </div>

      <Particles params={particleConfig} />

      <DownArrow />

      <DecorativeBorder location="bottom" />
    </section>
  )
}

export default Home

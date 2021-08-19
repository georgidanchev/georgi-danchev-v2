import Particles from "react-particles-js"
import particleConfig from "../../assets/particlesjs-config.json"

const Home = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME, REACT_APP_JOB_TITLE, REACT_APP_SITE_SUBTITLE } = process.env

  return (
    <section id="home" className="section section--hero section--clipped  home-section">
      <div className="section__inner section-width__warp section-width">
        <h1 className="home-section__title">
          <span className="home-section__title-inner">
            {REACT_APP_FIRST_NAME} {REACT_APP_LAST_NAME}
          </span>
          <span className="home-section__title-spacer">|</span>
          <span className="home-section__title-inner">{REACT_APP_JOB_TITLE}</span>
        </h1>
        <p className="home-section__text">{REACT_APP_SITE_SUBTITLE}</p>
      </div>
      <Particles params={particleConfig} />
    </section>
  )
}

export default Home

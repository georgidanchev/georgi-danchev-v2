import portrait from "../../images/me.jpg"
// import "../../styles/sections/about.scss"
import SkillChart from "../components/SkillChart"

const About = () => {
  return (
    <div className="section section--about">
      <div className="about section-width">
        <div class="about__top">
          <div className="about__image-wrapper">
            <img className="about__image" src={portrait} height="500" alt="" />
          </div>
          <div className="about__container">
            <p class="about__text">
              My name is Georgi Danchev I am passionate Front End Developer who strive to make a difference! <br /> <br />
              Semantic HTML, CSS with SASS, BEM, JavaScript ES6+, VueJS, GIT, NPM, Shopify liquid, VS Code.
            </p>
            <a href="#contact" className="btn about__link">
              Contact Me
            </a>
          </div>
        </div>
        <div class="about__bottom">
          <SkillChart />
        </div>
      </div>
    </div>
  )
}

export default About

import portrait from "../../images/me.jpg"
// import "../../styles/sections/about.scss"
import SkillChart from "../components/SkillChart"

const About = () => {
  return (
    <div className="section section--about section--borders">
      <div className="about section-width">
        <div className="about__top">
          <div className="about__image-wrapper">
            <img className="about__image" src={portrait} height="500" alt="" />
          </div>
          <div className="about__container">
            <p className="about__text">
              My name is Georgi Danchev I am passionate Front End Developer who strive to make a difference! <br /> <br />
              Semantic HTML, CSS with SASS, BEM, JavaScript ES6+, VueJS, GIT, NPM, Shopify liquid, VS Code.
            </p>
            <a href="#contact" className="btn about__link">
              Contact Me
            </a>
          </div>
        </div>
        <div className="about__bottom">
          <SkillChart percentage="90"/>
          <SkillChart percentage="70"/>
          <SkillChart percentage="60"/>
          <SkillChart percentage="50"/>
          <SkillChart percentage="50"/>
          <SkillChart percentage="30"/>
        </div>
      </div>
    </div>
  )
}

export default About

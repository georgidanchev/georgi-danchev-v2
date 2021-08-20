import portrait from "../../assets/me.jpg"
import SkillChart from "../components/SkillChart"
import SectionHeader from "../components/SectionHeader"

const About = () => {
  return (
    <section id="about" className="section section--about section--borders">
      <div className="section-width mobile-padding about">
        <SectionHeader title="Hello! My name is Georgi" subtitle="" />
        <div className="about__top">
          <div className="about__image-wrapper">
            <img className="about__image" src={portrait} height="500" alt="" />
          </div>
          <div className="about__container">
            <p className="about__text">
              I think about frontend development as a way to connect people from across the globe with immersive and intuitive experiences
              on the web. I have a passion for bringing each site from concept to completion as a hands-on technical leader focused on
              functionality and usability. This is what I do best and enjoy the most.
            </p>
            <a href="#contact" className="btn about__link">
              Contact Me
            </a>
          </div>
        </div>
        <div className="about__bottom">
          <div class="about__skill-charts">
            <SkillChart percentage="90" />
            <SkillChart percentage="70" />
            <SkillChart percentage="60" />
            <SkillChart percentage="50" />
            <SkillChart percentage="50" />
            <SkillChart percentage="50" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

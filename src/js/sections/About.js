import { useRef } from "react"
import ResponsiveImage from "../components/ResponsiveImage"
import SectionHeader from "../components/SectionHeader"
import useIntersection from "../helpers/useIntersection"

const About = () => {
  const ref_about = useRef()
  useIntersection(ref_about, "about")

  return (
    <section ref={ref_about} id="about" className="section section--about">
      <div className="section-width section-width--padding about">
        <SectionHeader title="Hello! My name is Georgi" subtitle="" />
        <div className="about__top">
          <div className="about__image-wrapper">
            <ResponsiveImage image_class="about__image" code="v1629540939" public_id="me_olktte" alt="" />
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
        {/* <div className="about__bottom">
          <div className="about__skill-charts">
            <SkillChart percentage="90" />
            <SkillChart percentage="70" />
            <SkillChart percentage="60" />
            <SkillChart percentage="50" />
            <SkillChart percentage="50" />
            <SkillChart percentage="50" />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About

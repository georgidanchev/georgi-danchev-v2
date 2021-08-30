import { useRef } from "react"
import DecorativeBorder from "../components/DecorativeBorder"
import ProjectCard from "../components/ProjectCard"
import ResponsiveImage from "../components/ResponsiveImage"
import SectionHeader from "../components/SectionHeader"
import useIntersection from "../helpers/useIntersection"

const About = () => {
  const ref_projects = useRef()
  useIntersection(ref_projects, "projects")

  return (
    <section ref={ref_projects} id="projects" className="section section--projects">
      <DecorativeBorder location="top" />

      <div className="section-width section-width--padding section-width--bordered-top section-width--bordered-bottom projects">
        <SectionHeader subtitle="My portfolio" title="My recent projects" />

        <div className="projects__cards-wrapper">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <a className="btn projects__cta" href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
          See more projects
        </a>
      </div>

      <div className="section__bg-image-wrapper">
        <ResponsiveImage image_class="section__bg-image" code="v1629540939" public_id="about_cphruk" alt="" />
      </div>

      <DecorativeBorder location="bottom" />
    </section>
  )
}

export default About

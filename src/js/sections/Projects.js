import DecorativeBorder from "../components/DecorativeBorder"
import ProjectCard from "../components/ProjectCard"
import ResponsiveImage from "../components/ResponsiveImage"
import SectionHeader from "../components/SectionHeader"
import data_portfolio from "../../assets/data-portfolio.json"

const About = () => {
  let projectsList = []

  data_portfolio.forEach((project) => {
    projectsList.push(<ProjectCard key={project.id} project={project} />)
  })

  return (
    <section id="projects" className="section section--projects" data-scroll-section>
      <DecorativeBorder location="top" />

      <div className="section-width section-width--padding section-width--bordered-top section-width--bordered-bottom projects">
        <SectionHeader subtitle="My portfolio" title="My recent projects" />

        <div className="projects__cards-wrapper">{projectsList}</div>

        {/* <a className="btn projects__cta" href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
          See more projects
        </a> */}
      </div>

      <div className="section__bg-image-wrapper">
        <ResponsiveImage image_class="section__bg-image" code="v1629540939" public_id="about_cphruk" alt="" />
      </div>

      <DecorativeBorder location="bottom" />
    </section>
  )
}

export default About

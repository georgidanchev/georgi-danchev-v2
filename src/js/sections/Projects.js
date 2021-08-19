import SectionHeader from "../components/SectionHeader"
import ProjectCard from "../components/ProjectCard"

const About = () => {
  return (
    <div id="projects" className="section section--projects section--clipped">
      <div className="section-width projects">
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
    </div>
  )
}

export default About

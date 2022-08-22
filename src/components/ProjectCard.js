import ResponsiveImage from "./ResponsiveImage"

const ProjectCard = (props) => {
  const project = props.project

  return (
    <div className="project-card">
      <div className="project-card__image-wrap">
        <ResponsiveImage image_class="project-card__image" code="v1629540939" public_id="about_cphruk" alt="" />
      </div>
      <div className="project-card__content-wrap">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tags">{project.tech_stack}</p>
      </div>
      <div className="project-card__overlay">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__text">{project.text}</p>
        {project.github_url !== "" ? (
          <a href={project.github_url} className="btn btn--arrow project-card__link">
            Read More
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default ProjectCard

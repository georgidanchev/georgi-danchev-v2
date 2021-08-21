import ResponsiveImage from "./ResponsiveImage"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card__image-wrap">
        <ResponsiveImage image_class="project-card__image" code="v1629540939" public_id="about_cphruk" alt="" />
      </div>
      <div className="project-card__content-wrap">
        <h3 className="project-card__title">Website Redesign</h3>
        <p className="project-card__tags">Website, Branding, SaaS</p>
      </div>
      <div className="project-card__overlay">
        <h3 className="project-card__title">Website Redesign</h3>
        <p className="project-card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sagittis dolor, eget vulputate turpis. Aliquam est ex,
          malesuada a leo ut, laoreet volutpat risus.
        </p>
        <button href="#" className="btn btn--arrow project-card__link">
          Read More
        </button>
      </div>
    </div>
  )
}

export default ProjectCard

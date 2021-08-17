const Hero = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME, REACT_APP_JOB_TITLE, REACT_APP_SITE_SUBTITLE } = process.env
  
  return (
    <section id="section-hero" className="section section--hero section--clipped  title-section">
      <div className="section__inner section-width__warp section-width">
        <h1 className="title-section__title">
          { REACT_APP_FIRST_NAME } { REACT_APP_LAST_NAME }
          <span className="title-section__title-spacer">|</span>
          { REACT_APP_JOB_TITLE }
        </h1>
        <p className="title-section__text">{ REACT_APP_SITE_SUBTITLE }</p>
      </div>
    </section>
  )
}

export default Hero

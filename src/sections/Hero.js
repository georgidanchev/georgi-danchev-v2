import React from "react"
import "../styles/titleSection.scss"

const Hero = () => {
  return (
    <section className="section section--hero section--clipped title-section">
      <div className="section__inner section-width title-section__warp">
        <h1 className="title-section__title">Georgi Danchev  |  Front End Developer</h1>
        <p className="title-section__text">I code beautiful, simple and high quality websites</p>
      </div>
    </section>
  )
}

export default Hero

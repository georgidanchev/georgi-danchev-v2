import contactSVG from "../../images/contact.svg"

const About = () => {
  const inputChange = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("active")
    } else {
      e.target.parentNode.classList.add("active")
    }
  }

  return (
    <div id="contact" className="section section--contact contact">
      <div className="contact__container section-width">
        <div className="contact__inner-container">
          <img className="contact__image" src={contactSVG} alt="" />
          <form className="contact__form contact-form">
            <h2 className="contact-form__title">Get in Touch</h2>
            <div className="contact-form__input-group">
              <input className="contact-form__input" type="email" id="name" onChange={inputChange} />
              <label className="contact-form__label" htmlFor="name">
                Enter name
              </label>
            </div>
            <div className="contact-form__input-group">
              <input className="contact-form__input" type="email" id="email" onChange={inputChange} />
              <label className="contact-form__label" htmlFor="email">
                Enter email
              </label>
            </div>
            <div className="contact-form__input-group">
              <textarea className="contact-form__textarea" name="" id="message" cols="30" rows="10" onChange={inputChange}></textarea>
              <label className="contact-form__label" htmlFor="message">
                How can I help you?
              </label>
            </div>
            <button className="btn contact-form__btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About

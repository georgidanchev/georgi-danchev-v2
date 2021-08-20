import contactSVG from "../../assets/contact.svg"

const About = () => {
  const inputChange = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("active")
    } else {
      e.target.parentNode.classList.add("active")
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="section-width mobile-padding mobile-padding--bordered-top contact">
        <div className="contact__container">
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
    </section>
  )
}

export default About

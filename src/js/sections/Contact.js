import { useRef } from "react"
import contactSVG from "../../assets/contact.svg"
import DecorativeBorder from "../components/DecorativeBorder"
import ResponsiveImage from "../components/ResponsiveImage"
import useIntersection from "../helpers/useIntersection"

const Contact = () => {
  const ref_contact = useRef()
  useIntersection(ref_contact, "contact")

  const inputChange = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("active")
    } else {
      e.target.parentNode.classList.add("active")
    }
  }

  return (
    <section ref={ref_contact} id="contact" className="section section--contact">
      <DecorativeBorder location="top" />

      <div className="section-width section-width--padding contact">
        <div className="contact__container">
          <img className="contact__image" src={contactSVG} alt="" />
          <form className="contact__form contact-form">
            <h2 className="contact-form__title section-header__heading">Get in Touch</h2>
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

      <div className="section__bg-image-wrapper">
        <ResponsiveImage image_class="section__bg-image" code="v1629540939" public_id="contact_vfklx0" alt="" />
      </div>
    </section>
  )
}

export default Contact

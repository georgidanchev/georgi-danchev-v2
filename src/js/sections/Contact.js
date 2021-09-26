import React, { useRef } from "react"
import contactSVG from "../../assets/contact.svg"
import DecorativeBorder from "../components/DecorativeBorder"
import ResponsiveImage from "../components/ResponsiveImage"
import useIntersection from "../helpers/useIntersection"

const Contact = () => {
  const ref_contact = useRef()
  useIntersection(ref_contact, "contact")

  const submitBtn = React.createRef()
  const btnStates = {
    sending: "sending",
    sent: "sent",
    error: "error",
  }

  const toggleActive = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("active")
    } else {
      e.target.parentNode.classList.add("active")
    }
  }

  const escapeString = (string) => {
    const newString = string
      .replace(/[\\"']/g, "\\$&")
      .replace(/@/g, "%40")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")

    return newString
  }

  const resetInputFields = (e) => {
    for (const element of e.target) {
      if (element.hasAttribute("data-name")) {
        element.value = ""
      }
    }
  }

  const buildFormData = (e) => {
    let formBody = `access_token=${process.env.REACT_APP_MAIL_TOKEN}`
    for (const element of e.target) {
      if (element.hasAttribute("data-name")) {
        formBody += `&${element.dataset.name}=${escapeString(element.value)}`
      }
    }
    return formBody
  }

  const submitBtnManager = (state) => {
    switch (state) {
      case btnStates.sending:
        submitBtn.current.innerText = "Sending..."
        submitBtn.current.disabled = true
        break
      case btnStates.sent:
        submitBtn.current.innerText = "Sent!"
        break
      case btnStates.error:
        submitBtn.current.innerText = "Error"
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    submitBtnManager(btnStates.sending)

    fetch("https://postmail.invotes.com/send", {
      body: buildFormData(e),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
    })
      .then(() => {
        submitBtnManager(btnStates.sent)
        resetInputFields(e)
      })
      .catch((err) => {
        submitBtnManager(btnStates.error)
        console.error(err)
      })
  }

  return (
    <section ref={ref_contact} id="contact" className="section section--contact">
      <DecorativeBorder location="top" />

      <div className="section-width section-width--padding section-width--bordered-top contact">
        <div className="contact__container">
          <img className="contact__image" src={contactSVG} alt="" />
          <form className="contact__form contact-form" action="https://postmail.invotes.com/send" method="post" onSubmit={handleSubmit}>
            <h2 className="contact-form__title section-header__heading">Get in Touch</h2>
            <div className="contact-form__input-group">
              <input className="contact-form__input" type="text" id="subject" data-name="subject" onChange={toggleActive} />
              <label className="contact-form__label" htmlFor="subject">
                Subject
              </label>
            </div>
            <div className="contact-form__input-group">
              <input className="contact-form__input" type="text" id="name" data-name="extra_name" onChange={toggleActive} />
              <label className="contact-form__label" htmlFor="name">
                Your name
              </label>
            </div>
            <div className="contact-form__input-group">
              <input className="contact-form__input" type="email" id="email" data-name="extra_email" onChange={toggleActive} />
              <label className="contact-form__label" htmlFor="email">
                Your email
              </label>
            </div>
            <div className="contact-form__input-group">
              <textarea
                className="contact-form__textarea"
                data-name="text"
                id="message"
                cols="30"
                rows="10"
                onChange={toggleActive}
              ></textarea>
              <label className="contact-form__label" htmlFor="message">
                How can I help you?
              </label>
            </div>
            <button className="btn contact-form__btn" type="submit" ref={submitBtn}>
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

import contactSVG from "../assets/contact.svg"
import DecorativeBorder from "../components/DecorativeBorder"
import React, { useState } from "react"
import ResponsiveImage from "../components/ResponsiveImage"
// import useIntersection from "../helpers/useIntersection"

const Contact = () => {
  // const ref_contact = useRef()
  // useIntersection(ref_contact, "contact")

  const submitBtn = React.createRef()
  let [formSubmitted, isFormSubmitted] = useState(false)

  const btnStates = {
    error: "error",
    sending: "sending",
    sent: "sent",
  }

  const toggleActiveField = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("active")
    } else {
      e.target.parentNode.classList.add("active")
    }
  }

  const escapeString = (string) => {
    const newString = string
      .replace(/"/g, "&quot;")
      .replace(/[\\"']/g, "\\$&")
      .replace(/@/g, "%40")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")

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
      case btnStates.error:
        submitBtn.current.innerText = "Error"
        break
      case btnStates.sending:
        submitBtn.current.innerText = "Sending..."
        // submitBtn.current.disabled = true
        break
      case btnStates.sent:
        submitBtn.current.innerText = "Sent!"
        break
      default:
        break
    }
  }

  const submitForm = (e) => {
    submitBtnManager(btnStates.sending)
    const formDate = buildFormData(e)

    fetch("https://postmail.invotes.com/send", {
      body: formDate,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
    })
      .then(() => {
        submitBtnManager(btnStates.sent)
        resetInputFields(e)
        isFormSubmitted((formSubmitted = true))
      })
      .catch((err) => {
        submitBtnManager(btnStates.error)
        console.error(err)
      })
  }

  const validateSubmit = (e) => {
    let passedFields = 0
    let numberOfFields = 0

    const failedValidation = (input, message) => {
      const inputLabel = input.nextSibling
      const placeholderText = inputLabel.innerText
      input.classList.add("danger")

      if (message !== undefined) {
        inputLabel.innerText = message
      } else {
        inputLabel.innerText = `You missed the ${inputLabel.htmlFor} field`
      }

      setTimeout(() => {
        inputLabel.innerText = placeholderText
        input.classList.remove("danger")
      }, 5000)
    }

    const inputFormEmpty = (input) => {
      failedValidation(input)
    }

    for (const input of e.target) {
      if (input.hasAttribute("data-name")) {
        numberOfFields++
        if (input.value === "") {
          inputFormEmpty(input)
        } else {
          passedFields++
        }
      }
    }

    if (numberOfFields === passedFields) {
      submitForm(e)
    }
  }

  const formSubmit = (e) => {
    e.preventDefault()
    validateSubmit(e)
  }

  return (
    <section
      id="contact"
      className="section section--contact"
      data-scroll-section
      data-scroll
      data-scroll-repeat="true"
      data-scroll-call="contact"
      data-scroll-offset="50%,50%"
    >
      <DecorativeBorder location="top" />

      <div className="section-width section-width--padding section-width--bordered-top contact">
        <div
          className="contact__container animate__animated animate__hidden animate__delay-1ms"
          data-scroll
          data-scroll-repeat="false"
          data-scroll-class="animate__fadeIn"
        >
          <img className="contact__image" src={contactSVG} height="450" width="540" alt="" />
          <form
            className="contact__form contact-form"
            action="https://postmail.invotes.com/send"
            method="post"
            onSubmit={formSubmit}
          >
            <h2 className="contact-form__title section-header__heading">Get in Touch</h2>

            {formSubmitted === false ? (
              <React.Fragment>
                <div className="contact-form__input-group">
                  <input
                    className="contact-form__input"
                    type="text"
                    id="name"
                    data-name="subject"
                    onChange={toggleActiveField}
                  />
                  <label className="contact-form__label" htmlFor="name">
                    Your name
                  </label>
                </div>
                <div className="contact-form__input-group">
                  <input
                    className="contact-form__input"
                    type="email"
                    id="email"
                    data-name="extra_email"
                    onChange={toggleActiveField}
                  />
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
                    onChange={toggleActiveField}
                  ></textarea>
                  <label className="contact-form__label" htmlFor="message">
                    How can I help you?
                  </label>
                </div>
                <button className="btn contact-form__btn" type="submit" ref={submitBtn}>
                  Send Message
                </button>
              </React.Fragment>
            ) : (
              <p className="contact-form__success-text">Thanks for your message!</p>
            )}
          </form>
        </div>
      </div>

      <div className="section__bg-image-wrapper">
        <ResponsiveImage
          image_class="section__bg-image"
          code="v1629540939"
          public_id="contact_vfklx0"
          alt=""
          width="420"
          height="900"
        />
      </div>
    </section>
  )
}

export default Contact

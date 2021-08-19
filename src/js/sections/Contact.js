import contactSVG from "../../images/contact.svg"

const About = () => {
  return (
    <div className="section section--contact contact">
      <div className="contact__container section-width">
        <img src={contactSVG} alt="" />
        <form className="contact__form contact-form">
          <h2>Get in Touch</h2>
          <div className="input-group">
            <label for="email">Enter name</label>
            <input type="email" id="email" />
          </div>
          <div className="input-group">
            <label for="email">Enter email</label>
            <input type="email" id="email" />
          </div>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default About

import Copyright from "../components/Copyright"
import NameTitle from "../components/NameTitle"
import SocialLinks from "../components/SocialLinks"

const Footer = () => {
  return (
    <div
      className="footer animate__animated animate__hidden"
      data-scroll
      data-scroll-section
      data-scroll-repeat="false"
      data-scroll-class="animate__fadeIn"
    >
      <div class="footer__inner section-width">
        <SocialLinks />
        <NameTitle />
        <Copyright />
      </div>
    </div>
  )
}

export default Footer

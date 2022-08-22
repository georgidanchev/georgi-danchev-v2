import Copyright from "../components/Copyright"
import NameTitle from "../components/NameTitle"
import SocialLinks from "../components/SocialLinks"

const Footer = () => {
  return (
    <div
      className="footer section-width animate__animated animate__hidden"
      data-scroll
      data-scroll-section
      data-scroll-repeat="false"
      data-scroll-class="animate__fadeIn"
    >
      <SocialLinks />
      <NameTitle />
      <Copyright />
    </div>
  )
}

export default Footer

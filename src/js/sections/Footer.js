import Copyright from "../components/Copyright"
import NameTitle from "../components/NameTitle"
import SocialLinks from "../components/SocialLinks"

const Footer = () => {
  return (
    <div className="footer section-width">
      <SocialLinks />
      <NameTitle />
      <Copyright />
    </div>
  )
}

export default Footer

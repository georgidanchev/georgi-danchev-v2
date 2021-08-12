import Copyright from "../components/Copyright"
import NameTitle from "../components/NameTitle"
import SocialLinks from "../components/SocialLinks"
import "../../styles/sections/footer.scss"

const Footer = () => {
  return (
    <div className="footer section-width">
      <Copyright />
      <NameTitle />
      <SocialLinks />
    </div>
  )
}

export default Footer
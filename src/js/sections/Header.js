import SocialLinks from "../components/SocialLinks"
import NameTitle from "../components/NameTitle"
import MobileBtn from "../components/MobileBtn"
import "../../styles/sections/header.scss"

const Header = () => {
  return (
    <header className="header section-width">
      <div className="header__inner">
        <MobileBtn />
        <SocialLinks />
      </div>
      <NameTitle />
    </header>
  )
}

export default Header

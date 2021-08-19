import SocialLinks from "../components/SocialLinks"
import NameTitle from "../components/NameTitle"
import MobileBtn from "../components/MobileBtn"
import MobileNav from "../components/MobileNav"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container section-width">
        <NameTitle />
        <div className="header__inner">
          <SocialLinks />
          <MobileBtn />
        </div>
      </div>
      <MobileNav />
    </header>
  )
}

export default Header

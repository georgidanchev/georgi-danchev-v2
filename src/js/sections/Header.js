import SocialLinks from "../components/SocialLinks"
import NameTitle from "../components/NameTitle"
import MobileBtn from "../components/MobileBtn"
import MobileNav from "../components/MobileNav"

const Header = () => {
  return (
    <header className="header">
      <div class="header__container section-width">
        <NameTitle />
        <div className="header__inner">
          <SocialLinks />
          <MobileNav />
          <MobileBtn />
        </div>
      </div>
    </header>
  )
}

export default Header

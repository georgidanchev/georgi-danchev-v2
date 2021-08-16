import "../../styles/components/mobileNav.scss"

const MobileNav = () => {
  return (
    <div className="mobileNav">
      <ul className="mobileNav__list">
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#anchor-home">
            Home
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#anchor-about">
            About
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#anchor-portfolio">
            Portfolio
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#anchor-blog">
            Blog
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#anchor-contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav

const MobileNav = () => {
  return (
    <div className="mobileNav">
      <ul className="mobileNav__list">
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#home">
            Home
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#about">
            About
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#blog">
            Blog
          </a>
        </li>
        <li className="mobileNav__list-item">
          <a className="mobileNav__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav

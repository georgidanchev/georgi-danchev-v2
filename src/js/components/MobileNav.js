import { closeMenu } from "../actions/menuActions"
import { setCurrentSection } from "../actions/navActions"
import { useSelector, useDispatch } from "react-redux"

const MobileNav = () => {
  const allSections = useSelector((state) => state.navReducer.allSections)
  const currentSection = useSelector((state) => state.navReducer.sectionInView)
  const isMenuOpen = useSelector((state) => state.menuReducer.isMenuOpen)
  const dispatch = useDispatch()

  const clickHandle = (nav) => {
    dispatch(setCurrentSection(nav))
    dispatch(closeMenu())
  }

  const allNavs = allSections.map((nav) => (
    <li className="mobileNav__list-item" key={nav}>
      <a className={`mobileNav__link ${nav === currentSection ? "active" : ""}`} href={`#${nav}`} onClick={() => clickHandle(nav)}>
        {nav}
      </a>
    </li>
  ))

  return (
    <div className={isMenuOpen ? "section-width mobileNav active" : "section-width mobileNav"}>
      <ul className="mobileNav__list">{allNavs}</ul>
    </div>
  )
}

export default MobileNav

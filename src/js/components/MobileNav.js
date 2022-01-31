import { closeMenu } from "../actions/menuActions"
import { setCurrentSection } from "../actions/navActions"
import { useSelector, useDispatch } from "react-redux"

const MobileNav = () => {
  const allSections = useSelector((state) => state.navReducer.allSections)
  const currentSection = useSelector((state) => state.navReducer.sectionInView)
  const isMenuOpen = useSelector((state) => state.menuReducer.isMenuOpen)
  const dispatch = useDispatch()

  const links_refs = []
  const setRef = (ref) => links_refs.push(ref)

  const handleClick = (e, nav) => {
    e.preventDefault()
    dispatch(closeMenu())
    dispatch(setCurrentSection(nav))

    setTimeout(() => {
      links_refs[e.target.dataset.target].click()
    }, 600)
  }

  const allNavs = allSections.map((nav, index) => (
    <li className="mobileNav__list-item" key={nav}>
      <button
        data-target={`${index}`}
        className={`mobileNav__link ${nav === currentSection ? "active" : ""}`}
        onClick={(e) => handleClick(e, nav)}
      >
        {nav}
      </button>
      <a className="hidden" href={`#${nav}`} ref={setRef}>
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

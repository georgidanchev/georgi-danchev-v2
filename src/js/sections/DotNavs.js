import { useSelector, useDispatch } from "react-redux"
import { setCurrentSection } from "../actions/navActions"

const DotNavs = () => {
  const dispatch = useDispatch()
  const currentSection = useSelector((state) => state.navReducer.sectionInView)
  const allSections = useSelector((state) => state.navReducer.allSections)

  const dotNavs = allSections.map((nav) => (
    <li className="dot-navs__list-item" key={nav}>
      <a
        href={`#${nav}`}
        onClick={() => dispatch(setCurrentSection(nav))}
        className={`dot-navs__link ${nav === currentSection ? "active" : ""}`}
        data-scroll-to
      >
        <span className="dot-navs__text">{nav}</span>
      </a>
    </li>
  ))

  return (
    <nav className="dot-navs" data-scroll-section>
      <ul
        className="dot-navs__list animate__animated animate__delay-1s"
        data-scroll
        data-scroll-repeat="false"
        data-scroll-class="animate__fadeIn"
      >
        {dotNavs}
      </ul>
    </nav>
  )
}

export default DotNavs

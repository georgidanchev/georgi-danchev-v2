import { useSelector, useDispatch } from "react-redux"
import { setCurrentSection } from "../redux/navReducer"

const DotNavs = () => {
  const dispatch = useDispatch()
  const { sectionInView } = useSelector((state) => state.nav)
  const { allSections } = useSelector((state) => state.nav)

  const dotNavs = allSections.map((nav) => (
    <li className="dot-navs__list-item" key={nav}>
      <a
        href={`#${nav}`}
        onClick={() => dispatch(setCurrentSection(nav))}
        className={`dot-navs__link ${nav === sectionInView ? "active" : ""}`}
        data-scroll-to
      >
        <span className="dot-navs__text">{nav}</span>
      </a>
    </li>
  ))

  return (
    <nav className="dot-navs">
      <ul className="dot-navs__list animate__animated animate__delay-1s animate__fadeIn">
        {dotNavs}
      </ul>
    </nav>
  )
}

export default DotNavs

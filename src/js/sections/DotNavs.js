import "../../styles/components/dotNavs.scss"

const DotNavs = () => {
  return (
    <nav className="dot-navs">
      <ul className="dot-navs__list">
        <li className="dot-navs__list-item">
          <a href="#link1" className="dot-navs__link dot-navs__link--1">
            <span className="visually-hidden">home</span>
          </a>
        </li>
        <li className="dot-navs__list-item">
          <a href="#link2" className="dot-navs__link dot-navs__link--2">
            <span className="visually-hidden">about</span>
          </a>
        </li>
        <li className="dot-navs__list-item">
          <a href="#link3" className="dot-navs__link dot-navs__link--3">
            <span className="visually-hidden">contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DotNavs

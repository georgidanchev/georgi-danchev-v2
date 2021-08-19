const DotNavs = () => {
  // const allDotNavs = document.querySelectorAll(".dot-navs__link")
  // console.log(allDotNavs)

  // allDotNavs.forEach((navDot) => {
  //   navDot.addEventListener("click", () => {
  //     console.log("click")
  //     console.log(navDot)
  //     if (navDot.classList.contains("active")) {
  //       navDot.classList.remove("active")
  //     } else {
  //       navDot.classList.add("active")
  //     }
  //   })
  // })

  return (
    <nav className="dot-navs">
      <ul className="dot-navs__list">
        <li className="dot-navs__list-item">
          <a href="#home" className="dot-navs__link">
            <span className="visually-hidden">home</span>
          </a>
        </li>
        <li className="dot-navs__list-item">
          <a href="#about" className="dot-navs__link">
            <span className="visually-hidden">about</span>
          </a>
        </li>
        <li className="dot-navs__list-item">
          <a href="#projects" className="dot-navs__link">
            <span className="visually-hidden">projects</span>
          </a>
        </li>
        <li className="dot-navs__list-item">
          <a href="#blog" className="dot-navs__link">
            <span className="visually-hidden">blog</span>
          </a>
        </li>
        <li className="dot-navs__list-item">
          <a href="#contact" className="dot-navs__link">
            <span className="visually-hidden">contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DotNavs

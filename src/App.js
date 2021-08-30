import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import React, { useEffect } from "react"
import SectionAbout from "./js/sections/About"
import SectionBlog from "./js/sections/Blog"
import SectionContact from "./js/sections/Contact"
import SectionHome from "./js/sections/Home"
import SectionProjects from "./js/sections/Projects"
import SmoothScroll from "smooth-scroll"

const App = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      easing: "easeInOutQuad",
      speedAsDuration: true,
      speed: 1250,
    })
  })

  return (
    <React.Fragment>
      <Header />
      <DotNavs />
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionBlog />
      <SectionContact />
      <Footer />
    </React.Fragment>
  )
}

export default App

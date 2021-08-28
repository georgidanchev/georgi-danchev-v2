import DecorativeBorder from "./js/components/DecorativeBorder"
import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import React from "react"
import SectionAbout from "./js/sections/About"
import SectionBlog from "./js/sections/Blog"
import SectionContact from "./js/sections/Contact"
import SectionHome from "./js/sections/Home"
import SectionProjects from "./js/sections/Projects"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <DotNavs />
      <SectionHome />
      <DecorativeBorder location="bottom" />
      <SectionAbout />
      <DecorativeBorder location="top" />
      <SectionProjects />
      <DecorativeBorder location="bottom" />
      <SectionBlog />
      <DecorativeBorder location="top" />
      <SectionContact />
      <Footer />
    </React.Fragment>
  )
}

export default App

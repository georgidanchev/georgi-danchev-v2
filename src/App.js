// import SectionBlog from "./js/sections/Blog"
// import SectionProjects from "./js/sections/Projects"
import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import React, { useEffect } from "react"
import SectionAbout from "./js/sections/About"
import SectionContact from "./js/sections/Contact"
import SectionHome from "./js/sections/Home"
import SweetScroll from "sweet-scroll"

const App = () => {
  useEffect(() => {
    new SweetScroll({
      cancellable: true,
      duration: 1250,
      preventDefault: false,
      trigger: "a[href*='#']",
      updateURL: true,
    })
  })

  return (
    <React.Fragment>
      <Header />
      <DotNavs />
      <SectionHome />
      <SectionAbout />
      {/* <SectionProjects /> */}
      {/* <SectionBlog /> */}
      <SectionContact />
      <Footer />
    </React.Fragment>
  )
}

export default App

import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import React, { useEffect } from "react"
import SectionAbout from "./js/sections/About"
// import SectionBlog from "./js/sections/Blog"
import SectionContact from "./js/sections/Contact"
import SectionHome from "./js/sections/Home"
// import SectionProjects from "./js/sections/Projects"
import locomotiveScroll from "locomotive-scroll"
import { setSectionInView } from "./js/actions/navActions"
import { useDispatch } from "react-redux"

import * as firebase from "firebase/app"
import { getAnalytics } from "firebase/analytics"

var firebaseConfig = {
  apiKey: "AIzaSyB-IA_pCR9n6iRot-uq0qVscbgCn00eLAY",
  authDomain: "gdanchev-personal.firebaseapp.com",
  databaseURL: "https://gdanchev-personal.firebaseio.com",
  projectId: "gdanchev-personal",
  storageBucket: "gdanchev-personal.appspot.com",
  messagingSenderId: "865716482294",
  appId: "1:865716482294:web:d0774ec6f2e1938e03fcd7",
  measurementId: "G-P66WKNYGFR",
}

const App = () => {
  const containerRef = React.createRef()
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    getAnalytics()

    const scroll = new locomotiveScroll({
      el: containerRef.current,
      speed: 1000,
      smooth: true,
      scrollFromAnywhere: true,
      multiplier: 1,
    })

    scroll.on("call", (name) => {
      dispatch(setSectionInView(name))
    })
  })

  return (
    <React.Fragment>
      <div data-scroll-container ref={containerRef}>
        <Header />
        <DotNavs />
        <SectionHome />
        <SectionAbout />
        {/* <SectionProjects />
          <SectionBlog /> */}
        <SectionContact />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App

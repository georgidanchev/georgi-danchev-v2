// import SectionBlog from "./sections/Blog"
// import SectionProjects from "./sections/Projects"
import { getAnalytics } from "firebase/analytics"
import { setSectionInView } from "./actions/navActions"
import { useDispatch } from "react-redux"
import * as firebase from "firebase/app"
import DotNavs from "./sections/DotNavs"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import locomotiveScroll from "locomotive-scroll"
import React, { useEffect, lazy, Suspense } from "react"
import SectionHome from "./sections/Home"

const SectionAbout = lazy(() => import("./sections/About"))
const SectionContact = lazy(() => import("./sections/Contact"))

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
      speed: 3500,
      scrollFromAnywhere: true,
      multiplier: 1,
    })

    scroll.on("call", (name) => {
      console.log(name)
      dispatch(setSectionInView(name))
    })

    setTimeout(() => {
      scroll.update()
    }, 3000)
  })

  return (
    <React.Fragment>
      <div data-scroll-container ref={containerRef}>
        <Header />
        <DotNavs />
        <SectionHome />
        <Suspense fallback={<div>Loading...</div>}>
          <SectionAbout />
          {/* <SectionProjects />
          <SectionBlog /> */}
          <SectionContact />
        </Suspense>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App

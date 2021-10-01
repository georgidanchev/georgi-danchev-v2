// import SectionBlog from "./js/sections/Blog"
// import SectionProjects from "./js/sections/Projects"
import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import React, { useEffect } from "react"
import SectionAbout from "./js/sections/About"
import SectionContact from "./js/sections/Contact"
import SectionHome from "./js/sections/Home"

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
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    getAnalytics()
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

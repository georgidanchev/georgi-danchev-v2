import React from "react"
import ReactDOM from "react-dom"
import Header from "./js/sections/Header"
import Hero from "./js/sections/Hero"
import About from "./js/sections/About"
import Projects from "./js/sections/Projects"
import Blogs from "./js/sections/Blogs"
import Contact from "./js/sections/Contact"
import Footer from "./js/sections/Footer"

import "./styles/base/variables.css"
import "./styles/base/core.scss"
import "./styles/base/globals.scss"
import "./styles/layout/sections.scss"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <div className="decorative-border">
      <div class="decorative-border__inner decorative-border__inner--bottom"></div>
    </div>
    <About />
    <div className="decorative-border">
      <div class="decorative-border__inner decorative-border__inner--top"></div>
    </div>
    <Projects />
    <div className="decorative-border">
      <div class="decorative-border__inner decorative-border__inner--bottom"></div>
    </div>
    <Blogs />
    <div className="decorative-border">
      <div class="decorative-border__inner decorative-border__inner--top"></div>
    </div>
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

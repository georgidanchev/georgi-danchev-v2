import About from "./js/sections/About"
import Blogs from "./js/sections/Blogs"
import Contact from "./js/sections/Contact"
import DecorativeBorder from "./js/components/DecorativeBorder"
import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import Hero from "./js/sections/Hero"
import Projects from "./js/sections/Projects"
import React from "react"
import ReactDOM from "react-dom"
import "./styles/app.scss"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <DotNavs />
    <Hero />
    <DecorativeBorder location="bottom" />
    <About />
    <DecorativeBorder location="top" />
    <Projects />
    <DecorativeBorder location="bottom" />
    <Blogs />
    <DecorativeBorder location="top" />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import About from "./js/sections/About"
import Blog from "./js/sections/Blog"
import Contact from "./js/sections/Contact"
import DecorativeBorder from "./js/components/DecorativeBorder"
import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import Home from "./js/sections/Home"
import Projects from "./js/sections/Projects"
import React from "react"
import ReactDOM from "react-dom"
import "./styles/app.scss"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <DotNavs />
    <Home />
    <DecorativeBorder location="bottom" />
    <About />
    <DecorativeBorder location="top" />
    <Projects />
    <DecorativeBorder location="bottom" />
    <Blog />
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

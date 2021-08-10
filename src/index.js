import React from "react"
import ReactDOM from "react-dom"
import Header from "./sections/Header"
import Hero from "./sections/Hero"

import "./styles/variables.css"
import "./styles/core.scss"
import "./styles/globals.scss"
import "./styles/sections.scss"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

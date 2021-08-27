import { Provider } from "react-redux"
import About from "./js/sections/About"
import Blog from "./js/sections/Blog"
import Contact from "./js/sections/Contact"
import DecorativeBorder from "./js/components/DecorativeBorder"
import DotNavs from "./js/sections/DotNavs"
import Footer from "./js/sections/Footer"
import Header from "./js/sections/Header"
import Home from "./js/sections/Home"
import Projects from "./js/sections/Projects"
import store from "./js/store"

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App

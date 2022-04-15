import React from "react"
import "./css/App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

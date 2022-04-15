import React from "react"
import "../css/Navbar.css"

function Navbar() {
  const onHomeClick = () => {
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" })
  }

  const onAboutClick = () => {
    document.querySelector(".about").scrollIntoView({ behavior: "smooth" })
  }

  const onProjectClick = () => {
    document.querySelector(".projects").scrollIntoView({ behavior: "smooth" })
  }

  const onContactClick = () => {
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navbar">
      <button type="button" onClick={onHomeClick}>
        Home
      </button>
      <button type="button" onClick={onAboutClick}>
        About
      </button>
      <button type="button" onClick={onProjectClick}>
        Projects
      </button>
      <button type="button" onClick={onContactClick}>
        Contact
      </button>
    </nav>
  )
}

export default Navbar

import React from "react"
import "./Header.css"

function Header() {
  const onButtonClick = () => {
    document.querySelector(".about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="header">
      <h1 className="header__h1">Tommy Mapp </h1>
      <p className="header__secondary">Full Stack Web Developer</p>
      <button className="header__button" type="button" onClick={onButtonClick}>
        Get to know me
      </button>
    </header>
  )
}

export default Header

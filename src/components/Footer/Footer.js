import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  const onReturnToTopClick = () => {
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" })
  }

  const onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/tommymapp/")
  }

  const onGithubClick = () => {
    window.open("https://github.com/arkii1")
  }

  return (
    <footer className="footer">
      <button
        className="footer__button"
        type="button"
        onClick={onReturnToTopClick}
      >
        Return To Top
      </button>
      <div className="footer__links">
        <FontAwesomeIcon
          className="footer__links__linkedin"
          icon={faLinkedin}
          onClick={onLinkedInClick}
        />
        <FontAwesomeIcon
          className="footer__links__github"
          icon={faGithub}
          onClick={onGithubClick}
        />
      </div>
    </footer>
  )
}

export default Footer

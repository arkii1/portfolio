import React from "react"
import "../css/Projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

function Projects() {
  const alertNoLink = () => {
    alert("No link currently set up")
  }

  return (
    <div className="projects">
      <h2 className="projects__header">Projects</h2>
      <hr className="break" />
      <div className="projects__grid">
        <div className="projects__card">
          <div className="projects__card__img">
            <p>Screenshot</p>
          </div>
          <div className="projects__card__details">
            <h3 className="projects__card__details__name">Project Name</h3>
            <p className="projects__card__details__description">
              Here is an example description of the project.
            </p>
            <div className="projects__card__details__links">
              <FontAwesomeIcon
                className="projects__card__details__links__github"
                icon={faGithub}
                onClick={alertNoLink}
              />
              <FontAwesomeIcon
                className="projects__card__details__links__external"
                icon={faArrowUpRightFromSquare}
                onClick={alertNoLink}
              />{" "}
            </div>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card__img">
            <p>Screenshot</p>
          </div>
          <div className="projects__card__details">
            <h3 className="projects__card__details__name">Project Name</h3>
            <p className="projects__card__details__description">
              Here is an example description of the project.
            </p>
            <div className="projects__card__details__links">
              <FontAwesomeIcon
                className="projects__card__details__links__github"
                icon={faGithub}
                onClick={alertNoLink}
              />
              <FontAwesomeIcon
                className="projects__card__details__links__external"
                icon={faArrowUpRightFromSquare}
                onClick={alertNoLink}
              />{" "}
            </div>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card__img">
            <p>Screenshot</p>
          </div>
          <div className="projects__card__details">
            <h3 className="projects__card__details__name">Project Name</h3>
            <p className="projects__card__details__description">
              Here is an example description of the project.
            </p>
            <div className="projects__card__details__links">
              <FontAwesomeIcon
                className="projects__card__details__links__github"
                icon={faGithub}
                onClick={alertNoLink}
              />
              <FontAwesomeIcon
                className="projects__card__details__links__external"
                icon={faArrowUpRightFromSquare}
                onClick={alertNoLink}
              />{" "}
            </div>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card__img">
            <p>Screenshot</p>
          </div>
          <div className="projects__card__details">
            <h3 className="projects__card__details__name">Project Name</h3>
            <p className="projects__card__details__description">
              Here is an example description of the project.
            </p>
            <div className="projects__card__details__links">
              <FontAwesomeIcon
                className="projects__card__details__links__github"
                icon={faGithub}
                onClick={alertNoLink}
              />
              <FontAwesomeIcon
                className="projects__card__details__links__external"
                icon={faArrowUpRightFromSquare}
                onClick={alertNoLink}
              />{" "}
            </div>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card__img">
            <p>Screenshot</p>
          </div>
          <div className="projects__card__details">
            <h3 className="projects__card__details__name">Project Name</h3>
            <p className="projects__card__details__description">
              Here is an example description of the project.
            </p>
            <div className="projects__card__details__links">
              <FontAwesomeIcon
                className="projects__card__details__links__github"
                icon={faGithub}
                onClick={alertNoLink}
              />
              <FontAwesomeIcon
                className="projects__card__details__links__external"
                icon={faArrowUpRightFromSquare}
                onClick={alertNoLink}
              />{" "}
            </div>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card__img">
            <p>Screenshot</p>
          </div>
          <div className="projects__card__details">
            <h3 className="projects__card__details__name">Project Name</h3>
            <p className="projects__card__details__description">
              Here is an example description of the project.
            </p>
            <div className="projects__card__details__links">
              <FontAwesomeIcon
                className="projects__card__details__links__github"
                icon={faGithub}
                onClick={alertNoLink}
              />
              <FontAwesomeIcon
                className="projects__card__details__links__external"
                icon={faArrowUpRightFromSquare}
                onClick={alertNoLink}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

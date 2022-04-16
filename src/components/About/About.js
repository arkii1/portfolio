import React from "react"
import "./About.css"

import htmlLogo from "../../Assets/images/htmlLogo.svg"
import cssLogo from "../../Assets/images/cssLogo.svg"
import jsLogo from "../../Assets/images/jsLogo.svg"
import reactLogo from "../../Assets/images/reactLogo.svg"
import gitLogo from "../../Assets/images/gitLogo.svg"
import webpackLogo from "../../Assets/images/webpackLogo.svg"
import npmLogo from "../../Assets/images/npmLogo.svg"
import reduxLogo from "../../Assets/images/reduxLogo.svg"
import jestLogo from "../../Assets/images/jestLogo.svg"

function About() {
  return (
    <div className="about">
      <h2 className="about__header">About</h2>
      <hr className="break" />
      <div className="about__flex">
        <div className="about__details">
          <img
            className="about__img"
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt=""
          />
          <p>
            A Mathematics graduate with a passion for creating, technology and
            learning.
          </p>
          <p>
            During my degree in 2018, I started learning game development and
            design in my spare time using Unity and C#. This gave me all the
            traits necessary to succeed when I decided to make the switch to
            full stack web development.
          </p>
          <p>
            I&apos;m mainly interested in working with Javascript using React,
            NodeJS and Express, however I also have expeirience with C#, C++,
            Python and R.
          </p>
        </div>
        <div className="about__grid">
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={htmlLogo} alt="" />
            <span className="about__grid__item__name">HTML5</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={cssLogo} alt="" />
            <span className="about__grid__item__name">CSS3</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={jsLogo} alt="" />
            <span className="about__grid__item__name">Javascript</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={reactLogo} alt="" />
            <span className="about__grid__item__name">React</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={gitLogo} alt="" />
            <span className="about__grid__item__name">Git</span>
          </li>

          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={webpackLogo} alt="" />
            <span className="about__grid__item__name">Webpack</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={reduxLogo} alt="" />
            <span className="about__grid__item__name">Redux</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={npmLogo} alt="" />
            <span className="about__grid__item__name">npm</span>
          </li>
          <li className="about__grid__item">
            <img className="about__grid__item__icon" src={jestLogo} alt="" />
            <span className="about__grid__item__name">Jest</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default About

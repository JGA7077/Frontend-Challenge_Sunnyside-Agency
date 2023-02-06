import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/icon-arrow-down.svg'
import './Header.scss'


export default function Header() {

  const [isActive, setActive] = useState("false")

  const showMenu = () => {
    setActive(!isActive)
  }

  return (
    <header>

      <nav className="navbar">

        <img src={logo} alt="Sunnyside Logo" className="navbar__logo" />

        <ul className={isActive ? null : "navbar__menu--show"}>
        <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <button>Contact</button>
        </ul>
        <div id="icon" onClick={showMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      <h1 className="header__title">We are creatives</h1>
      <img src={arrow} alt="Arrow icon" className="header__img" />

    </header>
  )
}
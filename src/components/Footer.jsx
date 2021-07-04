import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--milk"></div>
        <div className="footer__top--orange"></div>
        <div className="footer__top--cone"></div>
        <div className="footer__top--sugar"></div>
      </div>

      <div className="footer__bottom">
        <h3>
          <a href="../index.js" className="footer__bottom__title">sunnyside</a>
        </h3>

        <nav>

          <ul className="footer__bottom__nav">
            <li className="footer__bottom__nav__item">
              <a href="index.js">About</a>
            </li>
            <li className="footer__bottom__nav__item">
            <a href="index.js">Services</a>
            </li>
            <li className="footer__bottom__nav__item">
            <a href="index.js">Projects</a>
            </li>
          </ul>
        </nav>

        <nav>

          <ul className="footer__bottom__contacts">
            <li className="footer__bottom__contacts__item">
              <a href="index.js"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li className="footer__bottom__contacts__item">
            <a href="index.js"><i class="fab fa-instagram"></i></a>
            </li>
            <li className="footer__bottom__contacts__item">
            <a href="index.js"><i class="fab fa-twitter"></i></a>
            </li>
            <li className="footer__bottom__contacts__item">
            <a href="index.js"><i class="fab fa-pinterest"></i></a>
            </li>
          </ul>
        </nav>

      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>
        Coded by <a href="https://github.com/JGA7077" rel="noreferrer" target="_blank">João Gabriel</a>
      </div>
    </div>
  )
}
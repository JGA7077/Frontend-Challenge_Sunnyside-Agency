import React from 'react'
import './Grid.scss'
import eggImage from '../assets/images/desktop/image-transform.jpg'
import cupImage from '../assets/images/desktop/image-stand-out.jpg'

export default function Grid() {
  return (
    <div className="grid">

      <div className="grid__text">
        <h2 className="grid__text__title">Transform your brand</h2>
        <p className="grid__text__paragraph">
          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.
        </p>
        <p className="grid__text__paragraph--yellow">Learn More</p>
      </div>

      <div className="grid__imageContainer">
        <img src={eggImage} alt="Egg" className="grid__imageContainer__item" />
      </div>

      <div className="grid__imageContainer">
        <img src={cupImage} alt="Cup" className="grid__imageContainer__item" />
      </div>

      <div className="grid__text">
        <h2 className="grid__text__title">Stand out to the right audience</h2>
        <p className="grid__text__paragraph">
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
        </p>
        <p className="grid__text__paragraph--pink">Learn More</p>
      </div>

      <div className="grid__textImage--cherry">
        <h2 className="grid__textImage__title">Graphic Design</h2>
        <p className="grid__textImage__paragraph">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
        </p>
      </div>

      <div className="grid__textImage--orange">
        <h2 className="grid__textImage__title">Photography</h2>
        <p className="grid__textImage__paragraph">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </p>
      </div>


    </div>
  )
}
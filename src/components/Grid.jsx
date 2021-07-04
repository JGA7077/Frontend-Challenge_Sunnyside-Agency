import React from 'react'
import './Grid.scss'

export default function Grid() {
  return (
    <div className="grid">

      <div className="grid__text grid__text--first">
        <h2 className="grid__text__title">Transform your brand</h2>
        <p className="grid__text__paragraph">
          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.
        </p>

        <a href="../index.js" className="grid__text__link grid__text__link--yellow">Learn More</a>

      </div>

      <div className="grid__eggBackground">

      </div>

      <div className="grid__cupBackground">

      </div>

      <div className="grid__text grid__text--second">
        <h2 className="grid__text__title">Stand out to the right audience</h2>
        <p className="grid__text__paragraph">
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
        </p>

        <a href="../index.js" className="grid__text__link grid__text__link--pink">Learn More</a>
        
      </div>

      <div className="grid__textImage grid__textImage__cherry">
        <h2 className="grid__textImage__title">Graphic Design</h2>
        <p className="grid__textImage__paragraph">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
        </p>
      </div>

      <div className="grid__textImage grid__textImage__orange">
        <h2 className="grid__textImage__title">Photography</h2>
        <p className="grid__textImage__paragraph">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </p>
      </div>


    </div>
  )
}
import React from 'react'
import './TestimonialsCard.scss'

export default function TestimonialsCard(props) {
  return (
    <div className="testimonials__cards__item">
      <a href="../index.js">
        <img src={props.img} alt="Emily R. - Marketing Director" className="testimonials__cards__item__pic" />
      </a>
      <p className="testimonials__cards__item__paragraph">
        {props.text}
      </p>
      <p className="testimonials__cards__item__name">
        <a href="../index.js" className="testimonials__cards__item__name__link">{props.name}</a>
      </p>
      <p className="testimonials__cards__item__occupation">
        {props.occupation}
      </p>
    </div>
  )
}
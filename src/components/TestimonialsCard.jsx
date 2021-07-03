import React from 'react'
import './TestimonialsCard.scss'

export default function TestimonialsCard(props) {
  return (
      <div className="testimonials__cards__item">
        <img src={props.img} alt="Emily R. - Marketing Director" className="testimonials__cards__item__pic" />
        <p className="testimonials__cards__item__paragraph">
          {props.text}
        </p>
        <p className="testimonials__cards__item__name">{props.name}</p>
        <p className="testimonials__cards__item__occupation">{props.occupation}</p>
      </div>
  )
}
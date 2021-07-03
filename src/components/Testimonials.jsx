import React from 'react'
import './Testimonials.scss'
import emilyPic from '../assets/images/image-emily.jpg'
import thomasPic from '../assets/images/image-thomas.jpg'
import jenniePic from '../assets/images/image-jennie.jpg'

import TestimonialsCard from './TestimonialsCard'

export default function Testimonials() {

  const emilyText = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
  const thomasText = 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
  const jennieText = 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'

  return (
    <div className="testimonials">
      <h3 className="testimonials__title">Client testimonials</h3>
      <div className="testimonials__cards">
        <TestimonialsCard img={emilyPic} text={emilyText} name="Emily  R." occupation={'Marketing Director'} />
        <TestimonialsCard img={thomasPic} text={thomasText} name="Thomas S" occupation={'Chief Operating Officer'} />
        <TestimonialsCard img={jenniePic} text={jennieText} name="Jennie F." occupation={'Business Owner'} />

      </div>

    </div>
  )
}
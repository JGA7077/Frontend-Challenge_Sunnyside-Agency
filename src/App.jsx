import React from 'react'
import './sass/main.scss'

import Header from './components/Header'
import Grid from './components/Grid'
import Testimonials from './components/Testimonials'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  <div className="App">
    <Header />
    <Grid />
    <Testimonials />
  </div>
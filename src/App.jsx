import React from 'react'
import './sass/main.scss'

import Header from './components/Header'
import Grid from './components/Grid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  <div className="App">
    <Header />
    <Grid />
    <Testimonials />
    <Footer />
  </div>
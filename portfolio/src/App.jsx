import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import About from './Components/about/about'
import Experience from './Components/experince/experience'
import Services from './Components/services/services'
import Portfolio from './Components/portfolio/portfolio'
import Testimonial from './Components/testimonial/testimonial'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footers'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </>
    
  )
}

export default App
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
// import Form from './components/form/Form'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Faq from './components/faq/Faq'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {


  return (
        <>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/*<Testimonials /> */}
        <Contact />
        <Faq />
        <Footer />
        </>
  )
}

export default app
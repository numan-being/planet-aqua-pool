import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Form from "./components/form/Form";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Brochures from "./components/brochures/Brochures";
import Faq from "./components/faq/Faq";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const app = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" component={<Header/>} />
        <Route path="/#form" component={<Form/>} />
      </Routes>
      <About />
      <Experience />
      <Brochures />
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
    </BrowserRouter>
  );
};

export default app;

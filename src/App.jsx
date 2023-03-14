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
  <Routes>
    <Route exact path="/form" element={<Form />} />
    <Route path="/" element={
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Brochures />
        <Testimonials />
        <Contact />
        <Faq />
        <Footer />
      </>
    } />
  </Routes>
</BrowserRouter>
  );
};

export default app;

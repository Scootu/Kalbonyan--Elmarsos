import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/YourCars/Home/Home";
import About from "./components/YourCars/About/About";
import Services from "./components/YourCars/Services/Services.js";
import Cars from "./components/YourCars/Cars/Cars";
import Testimonials from './components/YourCars/Testimonials/Testimonials.js';
import Gallory from "./components/YourCars/Gallory/Gallory";
import Footer from "./components/YourCars/Footer/Footer";

function App() {
  
  return (
    <Fragment>
      <Home />
      <About />
      <Services />
      <Cars />
      <Gallory />
      <Testimonials />
      <Footer />
    </Fragment>
  );
}

export default App;

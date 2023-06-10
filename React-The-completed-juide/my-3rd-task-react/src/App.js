import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/YourCars/Home/Home";
import About from "./components/YourCars/About/About";
import Services from "./components/YourCars/Services/Services.js";
import Cars from "./components/YourCars/Cars/Cars";


function App() {
  console.log(window.screenY);
  return (
    <Fragment>
      <Home />
      <About />
      <Services />

      <Cars />
    </Fragment>
  );
}

export default App;

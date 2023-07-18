import React, {  useState } from "react";
import "./App.css";
import Home from "./components/YourCars/Home/Home";
import About from "./components/YourCars/About/About";
import Services from "./components/YourCars/Services/Services.js";
import Cars from "./components/YourCars/Cars/Cars";
import Testimonials from "./components/YourCars/Testimonials/Testimonials.js";
import Gallory from "./components/YourCars/Gallory/Gallory";
import Footer from "./components/YourCars/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { CardData } from "./Context/CardData";

function App() {
  const [isClicked, setIsCLicked] = useState(false);
  const showCartSection = () => {
    setIsCLicked(!isClicked);
  };
  return (
    <CardData>
      {/*add purchase section*/}
      {isClicked && <Cart />}
      <Home onCLickIconCart={showCartSection} />
      <About />
      <Services />
      <Cars />
      <Gallory />
      <Testimonials />
      <Footer />
    </CardData>
  );
}

export default App;

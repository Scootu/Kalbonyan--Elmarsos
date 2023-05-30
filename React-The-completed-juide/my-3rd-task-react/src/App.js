import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/YourCars/Home/Home";
import About from "./components/YourCars/About/About";

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((myjson) => {
        console.log(myjson);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <Fragment>
      <Home />
      <About />
    </Fragment>
  );
}

export default App;

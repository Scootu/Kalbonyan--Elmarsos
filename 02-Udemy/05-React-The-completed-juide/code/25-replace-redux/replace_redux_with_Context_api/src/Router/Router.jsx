import React, { Fragment } from "react";
import Navigation from "../components/Nav/Navigation";
import { Outlet } from "react-router-dom";

export const Router = () => {
  return (
    <section className="router" style={{ width: "1351px" }}>
      <Navigation />
      <Outlet />
    </section>
  );
};

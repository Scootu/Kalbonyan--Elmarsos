import React, { Fragment } from "react";
import styled from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className={styled.navBar}>
        <div className={styled.navBarLogo}>
          <span>Your</span>
          <span>Car</span>
        </div>
        <ul className={styled.navBarList}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li className={styled.img}><a href='' >img 5</a></li>
          {/* we need a context api here to manipulat with data from cars section to here  */}
        </ul>
        
      </nav>
    </Fragment>
  );
};
export default NavBar;

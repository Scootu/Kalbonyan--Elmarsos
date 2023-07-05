import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import styled from "./NavBar.module.css";
// import CardDataContext from "../../../Context/CardData";

const NavBar = () => {


  const [isValid, setIsValid] = useState(false);
  const [isMobileValid, setMobileValid] = useState(false);

  const clickedMobile = () => {
    setMobileValid(!isMobileValid);
   
  }
  useEffect(() => {
    const navScroolBar = () => {
      setIsValid(window.scrollY >= 716.8);
    };

    window.addEventListener("scroll", navScroolBar);

    return () => {
      window.removeEventListener("scroll", navScroolBar);
    };
  });

  return (
    <Fragment>
      <nav className={`${styled.navBar} ${isValid ? styled.navSticky : ""} `}>
        <div className={styled.navBarLogo}>
          <span>Your</span>
          <span>Car</span>
        </div>
        <ul className={`${styled.navBarList} ${styled.navMobile} ${isMobileValid ? styled.navMobileTransilate : ''}`}>
          <li>
            <a href="https://google.com">Home</a>
          </li>
          <li>
            <a href="https://google.com">About</a>
          </li>
          <li>
            <a href="https://google.com">Services</a>
          </li>
          <li>
            <a href="https://google.com">Cars</a>
          </li>
          <li>
            <a href="https://google.com">Contact us</a>
          </li>
          <li className={styled.img}>

          </li>
         
          
          
        </ul>
        <span className={styled.indicate} onClick={clickedMobile}>slide</span>
        {/* <Purchese response={isBtnValid}/> */}
      </nav>
    </Fragment>
  );
};
export default NavBar;

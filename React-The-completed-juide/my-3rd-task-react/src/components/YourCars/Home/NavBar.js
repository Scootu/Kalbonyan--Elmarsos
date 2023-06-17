import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import styled from "./NavBar.module.css";
// import CardDataContext from "../../../Context/CardData";
import Purchese from "./Purchese/Purchese";
const NavBar = () => {
  
  const [isBtnValid, setIsBtnValid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const clickBtn = () => {
    setIsBtnValid(!isBtnValid);
    // console.log(isBtnValid);
  };

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
      <nav className={`${styled.navBar} ${isValid ? styled.navSticky : ""}`}>
        <div className={styled.navBarLogo}>
          <span>Your</span>
          <span>Car</span>
        </div>
        <ul className={styled.navBarList}>
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
            <span
              className={`${
                isBtnValid ? styled.imgClickBtn : ""
              } material-symbols-outlined`}
              onClick={clickBtn}
            >
              shopping_cart
            </span>
          </li>
        </ul> 
        <Purchese response={isBtnValid}/>
      </nav>
    </Fragment>
  );
};
export default NavBar;

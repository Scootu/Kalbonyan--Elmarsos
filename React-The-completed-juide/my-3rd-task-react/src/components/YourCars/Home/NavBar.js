import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "./NavBar.module.css";
import CardDataContext from "../../../Context/CardData";
import Purchese from "./Purchese";
const NavBar = () => {
  const ctx = useContext(CardDataContext);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const navScroolBar = () => {
      setIsValid(window.scrollY >= 716.8);
      
    };
    
    window.addEventListener("scroll", navScroolBar);
    return () => {
      window.removeEventListener('scroll',navScroolBar);
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
            <span className="material-symbols-outlined" onClick={ctx.Valid}>
              shopping_cart
            </span>
          </li>
        </ul>
      </nav>
      <Purchese />
    </Fragment>
  );
};
export default NavBar;

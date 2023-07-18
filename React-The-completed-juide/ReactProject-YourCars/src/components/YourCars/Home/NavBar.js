import React, { Fragment, useContext, useEffect, useState } from "react";
import styled from "./NavBar.module.css";
import CardDataContext from "../../../Context/CardContext";
// import CardDataContext from "../../../Context/CardData";

const NavBar = (props) => {
  const ctx = useContext(CardDataContext);
  const [isValid, setIsValid] = useState(false);
  const [isMobileValid, setMobileValid] = useState(false);
  const [isCLicked, setIsClicked] = useState(false);
  const iconClickedCart = () => {
    props.onClickIconCart();
    setIsClicked(!isCLicked);
  };
  const clickedMobile = () => {
    setMobileValid(!isMobileValid);
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
      <nav className={`${styled.navBar} ${isValid ? styled.navSticky : ""} `}>
        <div className={styled.navBarLogo}>
          <span>Your</span>
          <span>Car</span>
        </div>

        <ul
          className={`${styled.navBarList} ${
            isMobileValid ? styled.navMobileTransilate : ""
          }`}
        >
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
        </ul>
        <div className={styled.img}>
          <span
            className={`${isCLicked ? styled.imgClickBtn : ""} ${
              isValid ? styled.black : styled.white
            }  material-symbols-outlined `}
            onClick={iconClickedCart}
          >
            shopping_cart
          </span>
          <span className={`${styled.badge}`}>{ctx.totalAmount}</span>
          <span
            className={`${styled.show} ${
              isValid ? styled.black : styled.white
            } material-symbols-outlined`}
            onClick={clickedMobile}
          >
            menu
          </span>
        </div>
      </nav>
    </Fragment>
  );
};
export default NavBar;

import React, { useEffect, useState } from "react";
// import CardDataContext from "../../../Context/CardContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import CardCar from "./CardCar/CardCar";

const SlidesCard = () => {
  // const dataItems = useContext(CardDataContext);
  const [width, setWidth] = useState(3);
  // const ArrayData = useContext(CardData);
  // modify set to get

  const [dataCars, setDataCars] = useState([]);

  const getCars = async () => {
    const responce = await fetch("data.json");
    const result = await responce.json();

    const swiperCardSlide = result.cars.map((item, index) => {
     

      return (
        <SwiperSlide key={item.name}>
          <CardCar
            class={item.class}
            id={index}
            name={item.name}
            description={item.description}
            seats={item.seats}
            luggage={item.luggage}
            image={item.image}
            
          />
        </SwiperSlide>
      );
    });
    setDataCars(swiperCardSlide);
  };

  useEffect(() => {
    getCars();
  }, []);

  const slideParViewFun = () => {
    if (window.innerWidth <= 750) {
      setWidth(1);
    } else if (window.innerWidth <= 1024) {
      setWidth(2);
    } else if (window.innerWidth > 1024) {
      setWidth(3);
    }
  };
  useEffect(() => {
    // add event listener to screen resolution change
    window.addEventListener("mousemove", slideParViewFun);
    return () => {
      window.removeEventListener("mousemove", slideParViewFun);
    };
  });

  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        slidesPerView={width}
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {dataCars !== [] ? dataCars : ""}
      </Swiper>
    </>
  );
};

export default SlidesCard;

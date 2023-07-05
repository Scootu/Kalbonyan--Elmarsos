import React, { useContext, useEffect, useState } from "react";
import CardDataContext from "../../../Context/CardData";
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
  const data = useContext(CardDataContext);
  const [width, setWidth] = useState(3)
  // const ArrayData = useContext(CardData);
  // modify set to get 



  const swiperCardSlide = data.cars.map((item, index) => {

    // saveDataLocalStorage(item,index);

    return (
      <SwiperSlide key={Math.random()}>
        <CardCar
          key={item.name}
          // val ={data.onPurches()}
          ind={index}
          name={item.name}
          class={item.class}
          description={item.description}
          seats={item.seats}
          luggage={item.luggage}
          image={item.image}
        />
      </SwiperSlide>
    );
  });

  const slideParViewFun = () => {
    if (window.innerWidth <= 750) {
      setWidth(1);
    } else if (window.innerWidth <= 1024) {
      setWidth(2);
    }
    else if (window.innerWidth > 1024) {
      setWidth(3)
    }


  }
  useEffect(() => {
    // add event listener to screen resolution change 
    window.addEventListener('mousemove', slideParViewFun);
    return () => {
      window.removeEventListener('mousemove', slideParViewFun);
    }
  })
  console.log(window.innerWidth);
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
        {swiperCardSlide}
      </Swiper>
    </>
  );
};

export default SlidesCard;

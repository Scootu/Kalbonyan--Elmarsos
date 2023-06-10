import React, { useContext } from "react";
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
  // const ArrayData = useContext(CardData);
  console.log(data);
  const swiperCardSlide = data.cars.map((elem) => {
    return (
      <SwiperSlide key={Math.random()}>
        <CardCar
          name={elem.name}
          class={elem.class}
          description={elem.description}
          seats={elem.seats}
          luggage={elem.luggage}
          image={elem.image}
        />
      </SwiperSlide>
    );
  });
  console.log(swiperCardSlide);

  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        slidesPerView={3}
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

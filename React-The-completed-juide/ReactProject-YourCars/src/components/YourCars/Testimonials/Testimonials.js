import React, { useEffect ,useState } from "react";
import classes from "./Testimonials.module.css";

import Rides from "../../UI/Rides.js";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style css
import "swiper/css";
import "swiper/css/pagination";

// import required module style
import { Pagination } from "swiper";
import Client from "./Client";

const Testimonials = () => {
  const [dataCars, setDataCars] = useState([]);

  const getCars = async () => {
    const responce = await fetch("data.json");
    const result = await responce.json();
    const slideArrClient = result.testimonials.map((elem) => {
      return (
        <SwiperSlide key={Math.random()}>
          <Client
            name={elem.name}
            description={elem.description}
            location={elem.location}
            stars={elem.stars}
            image={elem.image}
          />
        </SwiperSlide>
      );
    });
    setDataCars(slideArrClient);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <section className={`${classes.main}`}>
      <div className="container">
        <Rides styled={`${classes.rides} ridesPositionMiddel`}>
          Testimonials
        </Rides>
        <span className={`${classes.subText} subTextMiddel`}>Testimonials</span>
        <div className={classes.testimonialsContent}>
          <Swiper
            pagination={true}
            slidesPerView={1}
            modules={[Pagination]}
            className={classes.mySwiper}
          >
            {dataCars !== [] ? dataCars : ""}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

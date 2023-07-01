

import React, { useContext } from 'react';
import classes from './Testimonials.module.css';
import CardDataContext from '../../../Context/CardData';
import Rides from '../../UI/Rides.js';
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper style css 
import 'swiper/css';
import 'swiper/css/pagination';

// import required module style 
import { Pagination } from 'swiper';
import Client from './Client';


const Testimonials = () => {

    const ctx = useContext(CardDataContext);
    const slideArrClient = ctx.testimonials.map((elem) => {
        return (
            <SwiperSlide>
                <Client
                    key={Math.random()}
                    name={elem.name}
                    description={elem.description}
                    location={elem.location}
                    stars={elem.stars}
                    image={elem.image}
                />
            </SwiperSlide>
        )
    })

    return (
        <section className={`${classes.main}`}>
            <div className='container'>
                <Rides styled={`${classes.rides} ridesPositionMiddel`}>Testimonials</Rides>
                <span className={`${classes.subText} subTextMiddel`}>Testimonials</span>
                <div className={classes.testimonialsContent} >
                    <Swiper
                        pagination={true}
                        slidesPerView={1}
                        modules={[Pagination]}
                        className={classes.mySwiper}
                    >
                        {slideArrClient}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}


export default Testimonials;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
const Brands = () => {
return (
    <Swiper
        slidesPerView={7}
        spaceBetween={25}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
        className="container bg-white rounded-5"
    >
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/acer.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/asus.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/dell.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/lenovo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/logitech.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/msi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/razer.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/rog.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/side-shop-ecommerce/brands/steelseries.png" alt="" />
        </SwiperSlide>
    </Swiper>
)
}

export default Brands
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Categories = () => {
return (
    <>
    <section className="container my-4">
        <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
            clickable: true,
            }}
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 25,
            },
        }}
        className="mySwiper"
        >
            <SwiperSlide className="card shadow text-center">
                <Link to="/shop">
                    <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/cpu.jpg" alt="CPU" />
                    <h5 className="py-3">CPU</h5>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/gpu.jpg" alt="GPU" />
                <h5 className="py-3">GPU</h5>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/laptop.jpg" alt="Laptop" />
                <h5 className="py-3">Laptop</h5>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/mobo.jpg" alt="MOBO" />
                <h5 className="py-3">MOBO</h5>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/monitor.jpg" alt="Monitor" />
                <h5 className="py-3">Monitor</h5>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/ram.jpg" alt="RAM" />
                <h5 className="py-3">RAM</h5>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/storage.jpg" alt="Storage" />
                <h5 className="py-3">Storage</h5>
            </SwiperSlide>
        </Swiper>
    </section>
    </>
)
}

export default Categories
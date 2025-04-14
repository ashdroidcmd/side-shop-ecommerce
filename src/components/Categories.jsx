import React from 'react';
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
        slidesPerView={3}
        spaceBetween={2}
        pagination={{
            clickable: true,
            }}
        breakpoints={{
            640: {
                slidesPerView: 4,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
        }}
        className="mySwiper"
        >
            <SwiperSlide className="card shadow text-center text-black">
                <Link to="/shop" className="text-decoration-none">
                    <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/cpu.jpg" alt="CPU" />
                    <h6 className="pb-2 text-black">CPU</h6>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/gpu.jpg" alt="GPU" />
                <h6 className="">GPU</h6>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/laptop.jpg" alt="Laptop" />
                <h6 className="pb-2">Laptop</h6>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/mobo.jpg" alt="MOBO" />
                <h6 className="pb-2">MOBO</h6>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/monitor.jpg" alt="Monitor" />
                <h6 className="pb-2">Monitor</h6>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/ram.jpg" alt="RAM" />
                <h6 className="pb-2">RAM</h6>
            </SwiperSlide>
            <SwiperSlide className="card shadow text-center">
                <img className="img-fluid rounded-2" src="/side-shop-ecommerce/categories/storage.jpg" alt="Storage" />
                <h6 className="pb-2">Storage</h6>
            </SwiperSlide>
        </Swiper>
    </section>
    </>
)
}

export default Categories
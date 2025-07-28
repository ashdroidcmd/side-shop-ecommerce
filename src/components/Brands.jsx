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
        slidesPerView={4}
        spaceBetween={25}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        breakpoints={{
            640: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 7,
                spaceBetween: 15,
            },
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
        className="container bg-white rounded-5"
    >
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/acer.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/asus.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/dell.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/lenovo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/logitech.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/msi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/razer.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/rog.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/steelseries.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/alienware.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/coolermaster.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/corsair.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/hyperx.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/sennheiser.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/wd.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="logo-slide">
            <img className="img-fluid logo-img" src="/brands/zowie.png" alt="" />
        </SwiperSlide>
    </Swiper>
)
}

export default Brands
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

const Hero = () => {
return (
    <section className="mb-3">
        <div className="container-fluid">
        <Swiper 
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/1.jpg" alt="" /></SwiperSlide>
        </Swiper>
        </div>
    </section>
)
}

export default Hero
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Hero = () => {
return (
    <section className="mb-3">
        <Swiper 
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={true} modules={[Autoplay]} className="mySwiper">
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/1.png" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/2.png" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/side-shop-ecommerce/hero/3.png" alt="" /></SwiperSlide>
        </Swiper>
    </section>
)
}

export default Hero
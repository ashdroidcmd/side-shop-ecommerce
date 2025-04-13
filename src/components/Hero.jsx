// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const Hero = () => {
return (
    <section className="mb-3">
        <div className="container-fluid">
        <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            navigation={true} pagination={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/hero/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/hero/2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/hero/3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className="hero-swiper-slide"><img className="img-fluid" src="/hero/1.jpg" alt="" /></SwiperSlide>
        </Swiper>
        </div>
    </section>
)
}

export default Hero
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const ProductsSwipers = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        const fetchProductBySlug = async () => {
        const q = query(collection(db, "products"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            setProduct(querySnapshot.docs[0].data());
        } else {
            console.log("❌ Product not found");
        }
    };
    fetchProductBySlug();
    }, [slug]);

    if (!product) return <p></p>;

return (
    <div className="col-12 col-md-6">
        <Swiper
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="productSwiper1"
        >
            {product.images && product.images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
                <img
                className="img-fluid"
                src={`${import.meta.env.BASE_URL}${encodeURI(imgSrc)}`}
                alt={`Product ${index + 1}`}
                />
            </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={8}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="productSwiper2 py-2"
        >
            {product.images && product.images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
                <img
                className="img-fluid"
                src={`${import.meta.env.BASE_URL}${encodeURI(imgSrc)}`}
                alt={`Product ${index + 1}`}
                />
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
)
}

export default ProductsSwipers
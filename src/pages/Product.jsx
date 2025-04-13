import React, { useRef, useEffect, useState } from 'react';

// Import Components
import Cards from '../components/Cards';
import ProductsAddtoCart from '../components/ProductsAddtoCart';
import ProductsSwipers from '../components/ProductsSwipers';
import ProductDescSpecs from '../components/ProductDescSpecs';

// Import Firebase
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";



const Product = () => {
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

  if (!product) return <p>Loading product...</p>;
  return (
    <>
    <section class="container">
      <div class="row py-3">
        <ProductsSwipers />
        <ProductsAddtoCart />
      </div>
    </section>

    <section class="container">
      <ProductDescSpecs />
      <Cards />
    </section>
    </>
  )
}

export default Product
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import CustomButtons from './CustomButtons';

const ProductsAddtoCart = () => {
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
    <div className="col-12 col-md-6 my-3">
        <h1 className="border-bottom border-secondary">{product.name}</h1>
            <div className="d-flex flex-row flex-wrap">
                <h6 className="me-5">Ratings: 5 Stars</h6>
                <h6 className="me-5">Sold: 325</h6>
                <h6>Stock: {product.stock}</h6>
            </div>
                <h3>&#8369;{product.price}</h3>
            <div className="d-flex flex-row flex-wrap border-bottom border-secondary pb-3">
                <CustomButtons className="btn px-4 py-2 btn-outline-dark me-2"/>
                <CustomButtons modalMessage = "Item Added to Wishlist!" buttonText='Add to Wishlist' className="btn btn-dark px-4 py-2" />
            </div>
                <small>Categories: PC Components, Processors</small>
            </div>
)
}

export default ProductsAddtoCart
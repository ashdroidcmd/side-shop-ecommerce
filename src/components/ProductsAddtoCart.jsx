import React, { useEffect, useState } from 'react';

// Import Firebase
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


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
    <div className="col-12 col-md-6">
        <h1 className="border-bottom border-secondary">{product.name}</h1>
        <div className="d-flex flex-row flex-wrap">
            <h6 className="me-5">Ratings: 5 Stars</h6>
            <h6 className="me-5">Sold: 325</h6>
            <h6>Stock: {product.stock}</h6>
        </div>
        <h3>P{product.price}</h3>
        <div className="d-flex flex-row flex-wrap border-bottom border-secondary pb-3">
            <button type="button" className="btn btn-lg btn-dark me-2">Add to Cart</button>
            <button type="button" className="btn btn-lg btn-outline-dark">Wishlist</button>
        </div>
        <div>
        <small>Categories: PC Components, Processors</small>
        </div>
        </div>
)
}

export default ProductsAddtoCart
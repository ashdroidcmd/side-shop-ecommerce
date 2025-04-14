import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const ProductDescSpecs = () => {
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
    <>
    <ul className="nav nav-tabs" id="myTab" role="tabList">
        <li className="nav-item text-black" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link text-black" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Specification</button>
        </li>
    </ul>

    <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabPanel" aria-labelledby="home-tab" tabIndex="0">
            <div className="py-3">
                <h4>Description</h4>
                {product.description && product.description.map((item, index) => (
                <p key={index}>{item}</p>
                ))}
            </div>
        </div>
        
        <div className="tab-pane fade" id="profile-tab-pane" role="tabPanel" aria-labelledby="profile-tab" tabIndex="0">
            <div className="py-3">
            <h4 className="">{product.name}</h4>
                <ul>
                    {product.specs &&
                    Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </>
)
}

export default ProductDescSpecs
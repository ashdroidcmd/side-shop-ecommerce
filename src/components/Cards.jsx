import React, { useEffect, useState } from "react";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

import CustomButtons from "./CustomButtons";

const Cards = ({ isProductPage = false, className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2 mb-2" }) => {
  // Fetch Product Data from Firebase
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
    };

    fetchData();
  }, []);

  // Limit Products if in Product Page into 6 Cards
  const displayedProducts = isProductPage ? products.slice(0, 6) : products;

  return (
    <section className="container pb-5">
      <div className={className}>
        {displayedProducts.map((product) => (
          <div key={product.id} className="col">
            <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
              <div className="card shadow">
                <img
                  src={`/side-shop-ecommerce/${product.images?.[0]}` || '/placeholder.jpg'}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-title mb-1 text-truncate">{product.name}</p>
                  <h5 className="card-text">&#8369;{product.price}</h5>
                </div>
              </div>
            </Link>
            <CustomButtons className="btn btn-dark my-2 w-100"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;

import React, { useEffect, useState } from "react";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cards = () => {
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

  return (
    <section className="container pb-5">
      <h1>Just For You</h1>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2 mb-2">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow">
                <img
                  src={product.images?.[0] || '/placeholder.jpg'}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body">
                  <p className="card-title mb-1">{product.name}</p>
                  <h5 className="card-text">P{product.price}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;

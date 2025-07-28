import { useEffect, useState } from "react";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

import CustomButtons from "./CustomButtons";

const Cards = ({
  filters = { categories: [], brands: [], price: Infinity },
  isProductPage = false,
  className = "row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2 mb-2",
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProducts(items);
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const parsedPrice = parseFloat(product.price.replace(/,/g, ""));

    const matchCategory =
      filters.categories.length === 0 ||
      filters.categories
        .map((cat) => cat.toLowerCase())
        .includes(product.category?.toLowerCase());

    const matchBrand =
      filters.brands.length === 0 || filters.brands.includes(product.brand);

    const matchPrice = !isNaN(parsedPrice) && parsedPrice <= filters.price;

    return matchCategory && matchBrand && matchPrice;
  });

  const displayedProducts = isProductPage
    ? filteredProducts.slice(0, 6)
    : filteredProducts;

  return (
    <section className="container">
      <div className={className}>
        {displayedProducts.map((product) => (
          <div key={product.id} className="col">
            <Link
              to={`/product/${product.slug}`}
              className="text-decoration-none text-dark"
            >
              <div className="card shadow">
                <img
                  src={
                    `${product.images?.[0]}`
                  }
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-title mb-1 text-truncate">
                    {product.name}
                  </p>
                  <h5 className="card-text">&#8369;{product.price}</h5>
                </div>
              </div>
            </Link>
            <CustomButtons className="btn btn-dark my-2 w-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;

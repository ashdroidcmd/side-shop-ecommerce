import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumbs";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const ShopPage = () => {
  useEffect(() => {
    document.title = "Side Shop | Shop";
  }, []);
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
    const [filters, setFilters] = useState({
        CPU: true,
        GPU: true,
        Mobo: true,
        maxPrice: 20000,
    });

    const toggleCategory = (cat) => {
        setFilters({ ...filters, [cat]: !filters[cat] });
    };

    const handlePriceChange = (e) => {
        setFilters({ ...filters, maxPrice: Number(e.target.value) });
    };

    const filtered = products.filter(
        (p) => filters[p.category] && p.price <= filters.maxPrice
    );

return (
    <div className="container py-2">
        <Breadcrumb />
        <div className="row">
        {/* Left Filters */}
        <div className="col-md-3 mb-4">
          <div className="border p-3 rounded">
            <h5>Filter by Category</h5>
            {['CPU', 'GPU', 'Mobo'].map((cat) => (
              <div className="form-check" key={cat}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={cat}
                  checked={filters[cat]}
                  onChange={() => toggleCategory(cat)}
                />
                <label className="form-check-label" htmlFor={cat}>
                  {cat}
                </label>
              </div>
            ))}

            <hr />
            <h6>Max Price: ₱{filters.maxPrice.toLocaleString()}</h6>
            <input
              type="range"
              min="1000"
              max="20000"
              step="1000"
              className="form-range"
              value={filters.maxPrice}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        {/* Right Products */}
        <div className="col-md-9">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 mb-2">
                  {products.map((product) => (
                    <div key={product.id} className="col">
                      <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
                        <div className="card h-100 shadow">
                          <img
                            src={`/side-shop-ecommerce/${product.images?.[0]}` || '/placeholder.jpg'}
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
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

import React, { useState } from 'react';

const products = [
    { id: 1, name: 'Ryzen 5 5600X', category: 'CPU', price: 7999, image: '/categories/cpu.jpg' },
    { id: 2, name: 'RTX 3060', category: 'GPU', price: 15999, image: '/categories/gpu.jpg' },
    { id: 3, name: 'ASUS B550 Motherboard', category: 'Mobo', price: 4999, image: '/categories/mobo.jpg' },
];

const ShopPage = () => {
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
    <div className="container py-4">
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
          <div className="row g-4">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <div className="col-12 col-sm-6 col-md-4" key={p.id}>
                  <div className="card h-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="card-img-top"
                      style={{ height: '180px', objectFit: 'contain' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text mb-3">₱{p.price.toLocaleString()}</p>
                      <button className="btn btn-dark mt-auto">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col">
                <p>No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

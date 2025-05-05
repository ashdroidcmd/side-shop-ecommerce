import React from 'react';

const ShopFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => {
      const current = new Set(prev[type]);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, [type]: Array.from(current) };
    });
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, price: Number(e.target.value) }));
  };

  const handleReset = () => {
    setFilters({ categories: [], brands: [], price: 20000 });
  };

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="border p-4 rounded shadow bg-white">
        <h5 className="mb-3">Filter by Category</h5>

        <div className="mb-3">
          <strong className="text-muted d-block mb-2">PC Components</strong>
          {["GPU", "Motherboard", "CPU", "PSU", "Storage", "RAM"].map((cat) => (
            <div className="form-check mb-2" key={cat}>
              <input
                className="form-check-input"
                type="checkbox"
                id={cat}
                checked={filters.categories.includes(cat)}
                onChange={() => handleCheckboxChange("categories", cat)}
              />
              <label className="form-check-label" htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <strong className="text-muted d-block mb-2">Peripherals</strong>
          {["Mouse", "Keyboard", "Laptop"].map((item) => (
            <div className="form-check mb-2" key={item}>
              <input
                className="form-check-input"
                type="checkbox"
                id={item}
                checked={filters.categories.includes(item)}
                onChange={() => handleCheckboxChange("categories", item)}
              />
              <label className="form-check-label" htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>

        <h5 className="mt-4 mb-3">Filter by Brand</h5>
        {["ASUS", "MSI", "Razer", "Lian Li", "AMD", "Intel", "Cougar", "Kingston", "Samsung"].map((brand) => (
          <div className="form-check mb-2" key={brand}>
            <input
              className="form-check-input"
              type="checkbox"
              id={brand}
              checked={filters.brands.includes(brand)}
              onChange={() => handleCheckboxChange("brands", brand)}
            />
            <label className="form-check-label" htmlFor={brand}>{brand}</label>
          </div>
        ))}

        <h5 className="mt-4 mb-3">Filter by Price</h5>
        <div className="d-flex justify-content-between mb-1">
          <small>₱1,000</small>
          <small className="fw-bold">₱100,000</small>
        </div>
        <input
          type="range"
          className="form-range"
          min="1000"
          max="20000"
          step="1000"
          value={filters.price}
          onChange={handlePriceChange}
        />

        <div className="d-grid mt-4">
          <button onClick={handleReset} className="btn btn-outline-secondary btn-sm">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;

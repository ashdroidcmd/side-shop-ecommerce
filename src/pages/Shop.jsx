import React, { useEffect, useState } from "react";

import Breadcrumb from "../components/Breadcrumbs";
import Cards from "../components/Cards";
import ShopFilter from "../components/ShopFilter";

const ShopPage = () => {
  useEffect(() => {
    document.title = "Side Shop | Shop";
  }, []);

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    price: 50000,
  });

  return (
    <section className="container pt-3">
      <Breadcrumb/>
      <div className="row border-top py-4">
        {/* Left Filters*/}
        <ShopFilter filters={filters} setFilters={setFilters} />

        {/* Right Products */}
        <div className="col-md-9">
          <Cards filters={filters} className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 mb-2"/>
        </div>

      </div>
    </section>
  );
};

export default ShopPage;

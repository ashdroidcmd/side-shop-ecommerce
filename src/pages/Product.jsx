import React, {useEffect} from 'react';

// Import Components
import Cards from '../components/Cards';
import ProductsAddtoCart from '../components/ProductsAddtoCart';
import ProductsSwipers from '../components/ProductsSwipers';
import ProductDescSpecs from '../components/ProductDescSpecs';
import Breadcrumb from '../components/Breadcrumbs';


const Product = () => {
  useEffect(() => {
          document.title = "Side Shop | Product";
  }, []);
  return (
    <>
    <section className="container">
      <div className="py-2">
        <Breadcrumb />
        <div className="row py-3">
          <ProductsSwipers />
          <ProductsAddtoCart />
        </div>
      </div>

      <div>
        <ProductDescSpecs />
        <h1>More Like This</h1>
        <Cards isProductPage={true}/>
      </div>
    </section>
    </>
  )
}

export default Product
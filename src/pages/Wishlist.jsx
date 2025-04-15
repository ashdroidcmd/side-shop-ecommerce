import React, {useEffect} from 'react';

import CustomButtons from '../components/CustomButtons';

const Wishlist = () => {
  useEffect(() => {
    document.title = "Side Shop | Wishlist";
}, []);
  return (
    <section className="container py-4 vh-100">
      <div className="row g-4">
        {/* Wishlist Items Section */}
        <div className="col-12">
          <h4 className="mb-3">Your Wishlist</h4>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th className="text-end">Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Wishlist Row */}
                <tr>
                  <td className="d-flex align-items-center">
                    <img
                      src="/side-shop-ecommerce/categories/cpu.jpg"
                      alt="CPU"
                      className="img-thumbnail"
                    />
                    <span className="ms-3">CPU</span>
                  </td>
                  <td className="text-end">₱3,000</td>
                  <td className="text-center">
                    <CustomButtons className="btn btn-sm btn-outline-dark me-2"/>
                    <button className="btn btn-sm btn-danger">✕</button>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <img
                      src="/side-shop-ecommerce/categories/storage.jpg"
                      alt="Storage"
                      className="img-thumbnail"
                    />
                    <span className="ms-3">Storage</span>
                  </td>
                  <td className="text-end">₱5,000</td>
                  <td className="text-center">
                    <CustomButtons className="btn btn-sm btn-outline-dark me-2"/>
                    <button className="btn btn-sm btn-danger">✕</button>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <img
                      src="/side-shop-ecommerce/categories/gpu.jpg"
                      alt="GPU"
                      className="img-thumbnail"
                    />
                    <span className="ms-3">GPU</span>
                  </td>
                  <td className="text-end">₱3,000</td>
                  <td className="text-center">
                    <CustomButtons className="btn btn-sm btn-outline-dark me-2"/>
                    <button className="btn btn-sm btn-danger">✕</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;

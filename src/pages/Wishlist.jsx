import React, {useEffect} from 'react';

import CustomButtons from '../components/CustomButtons';

const Wishlist = () => {
  useEffect(() => {
    document.title = "Side Shop | Wishlist";
}, []);
  return (
    <section className="container py-4">
      <div className="row g-4">
        {/* Wishlist Items Section */}
        <div className="col-12">
          <h4 className="mb-3">Your Wishlist</h4>
          <div className="responsive-table-wrapper">
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
                      src="/categories/cpu.jpg"
                      alt="CPU"
                      className="img-thumbnail"
                    />
                    <span className="ms-3">Ryzen 3 3200G</span>
                  </td>
                  <td className="text-end">₱6,000.00</td>
                  <td className="text-center">
                    <CustomButtons className="btn btn-sm btn-dark me-2"/>
                    <CustomButtons className="btn btn-sm btn-danger" buttonText="X" modalMessage="Removed from Wishlist"/>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <img
                      src="/categories/storage.jpg"
                      alt="Storage"
                      className="img-thumbnail"
                    />
                    <span className="ms-3">Samsung 500GB NVME M.2</span>
                  </td>
                  <td className="text-end">₱5,000.00</td>
                  <td className="text-center">
                    <CustomButtons className="btn btn-sm btn-dark me-2"/>
                    <CustomButtons className="btn btn-sm btn-danger" buttonText="X" modalMessage="Removed from Wishlist"/>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <img
                      src="/categories/gpu.jpg"
                      alt="GPU"
                      className="img-thumbnail"
                    />
                    <span className="ms-3">ASUS Nvidia RTX 3070</span>
                  </td>
                  <td className="text-end">₱41,000.00</td>
                  <td className="text-center">
                    <CustomButtons className="btn btn-sm btn-dark me-2"/>
                    <CustomButtons className="btn btn-sm btn-danger" buttonText="X" modalMessage="Removed from Wishlist"/>
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

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    useEffect(() => {
        document.title = "Side Shop | Cart";
}, []);
return (
    <section className="container py-4 vh-100">
        <div className="row g-4">
        {/* Cart Items Section */}
        <div className="col-12 col-lg-8">
            <h4 className="mb-3">Your Cart</h4>
            <div className="table-responsive">
                <table className="table align-middle">

                    <thead className="table-dark">
                        <tr>
                        <th>Product</th>
                        <th className="text-end">Price</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Subtotal</th>
                        <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {/* Static Sample Row */}
                        <tr>
                        <td className="d-flex align-items-center">
                            <img
                            src="/side-shop-ecommerce/categories/cpu.jpg"
                            alt="CPU"
                            className="img-thumbnail"                            />
                            <span className="ms-3">CPU</span>
                        </td>
                        <td className="text-end">₱3,000</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-sm btn-outline-secondary me-2">–</button>
                            <span>1</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2">+</button>
                            </div>
                        </td>
                        <td className="text-end">₱13,000</td>
                        <td>
                            <button className="btn btn-sm btn-danger">✕</button>
                        </td>
                        </tr>
                        <tr>
                        <td className="d-flex align-items-center">
                            <img
                            src="/side-shop-ecommerce/categories/storage.jpg"
                            alt="CPU"
                            className="img-thumbnail"                            />
                            <span className="ms-3">Storage</span>
                        </td>
                        <td className="text-end">₱5,000</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-sm btn-outline-secondary me-2">–</button>
                            <span>1</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2">+</button>
                            </div>
                        </td>
                        <td className="text-end">₱3,000</td>
                        <td>
                            <button className="btn btn-sm btn-danger">✕</button>
                        </td>
                        </tr>
                        <tr>
                        <td className="d-flex align-items-center">
                            <img
                            src="/side-shop-ecommerce/categories/gpu.jpg"
                            alt="CPU"
                            className="img-thumbnail"                            />
                            <span className="ms-3">CPU</span>
                        </td>
                        <td className="text-end">₱3,000</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-sm btn-outline-secondary me-2">–</button>
                            <span>1</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2">+</button>
                            </div>
                        </td>
                        <td className="text-end">₱3,000</td>
                        <td>
                            <button className="btn btn-sm btn-danger">✕</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Summary Section */}
            <div className="col-12 col-lg-4">
                <div className="border p-4 rounded shadow-sm">
                    <h5 className="mb-3">Cart Summary</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal</span>
                            <span>₱3,000</span>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                            <span>Total</span>
                            <strong>₱3,000</strong>
                        </div>
                    <Link to="/coming-soon"><button className="btn btn-dark w-100">Proceed to Checkout</button></Link>
                </div>
            </div>
        </div>
    </section>
);
};

export default Cart;

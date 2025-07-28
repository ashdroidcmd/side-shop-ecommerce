import React, {useEffect} from 'react';
import CustomButtons from '../components/CustomButtons';
import { Link } from 'react-router-dom';

const Cart = () => {
    useEffect(() => {
        document.title = "Side Shop | Cart";
}, []);
return (
    <section className="container py-4">
        <div className="row g-4">
        {/* Cart Items Section */}
        <div className="col-12 col-lg-8">
            <h4 className="mb-3">Your Cart</h4>
            <div className="responsive-table-wrapper">
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
                            src="/categories/cpu.jpg"
                            alt="CPU"
                            className="img-thumbnail"                            />
                            <span className="ms-3">Ryzen 3 3200G</span>
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
                            <CustomButtons className="btn btn-sm btn-danger" buttonText="X" modalMessage="Removed from Cart"/>
                        </td>
                        </tr>
                        <tr>
                        <td className="d-flex align-items-center">
                            <img
                            src="/categories/storage.jpg"
                            alt="CPU"
                            className="img-thumbnail"                            />
                            <span className="ms-3">Samsung 500GB NVME M.2</span>
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
                            <CustomButtons className="btn btn-sm btn-danger" buttonText="X" modalMessage="Removed from Cart"/>
                        </td>
                        </tr>
                        <tr>
                        <td className="d-flex align-items-center">
                            <img
                            src="/categories/gpu.jpg"
                            alt="CPU"
                            className="img-thumbnail"                            />
                            <span className="ms-3">ASUS Nvidia RTX 3070</span>
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
                            <CustomButtons className="btn btn-sm btn-danger" buttonText="X" modalMessage="Removed from Cart"/>
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
                    <Link to="/thank-you"><button className="btn btn-dark w-100">Proceed to Checkout</button></Link>
                </div>
            </div>
        </div>
    </section>
);
};

export default Cart;

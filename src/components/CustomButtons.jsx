import React from 'react';
import { Link } from 'react-router-dom';

const CustomButtons = ({
    className = "btn btn-dark my-2 w-100",
    modalMessage = "Item Added to Cart!",
    buttonText = "Add to Cart",
    modalId = `modal-${Math.random().toString(36).substr(2, 9)}`
}) => {
return (
    <>
      {/* Button trigger modal */}
        <button
            type="button"
            className={className}
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
        >
            {buttonText}
        </button>

      {/* Modal */}
        <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            aria-labelledby={`${modalId}-label`}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
                <div className="modal-body">
                {modalMessage}
                </div>
                <div className="modal-footer">
                
                <Link to="/cart">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
                    View Cart
                    </button>
                </Link>
                <Link to="/wishlist">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
                    View Wishlist
                    </button>
                </Link>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">X</button>
                </div>
            </div>
            </div>
        </div>
    </>
);
};

export default CustomButtons;

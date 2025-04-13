import React from 'react'

const Cart = () => {
return (
    <>
    <section className="container">
        <div className="row my-3">
            <div className="col-8">
            <div className="row border-bottom border-secondary">
            <div className="col-6 p-2 fw-bold border-bottom border-secondary">Name</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Price</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Quantity</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Subtotal</div>
            
            <div className="col-6 p-2 border-bottom border-secondary d-flex flex-row">
                <img className="img-fluid cart-image" src="/categories/cpu.jpg"/>
                <p className="my-auto mx-3">AMD Ryzen™ 5 5600G</p>
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                3,000
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                1
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                3,0000 
                <button type="button" className="col-2 btn btn-sm btn-danger mx-3" > X </button>
            </div>
            
            
            <div className="col-6 p-2 border-bottom border-secondary d-flex flex-row">
                <img className="img-fluid cart-image" src="/categories/cpu.jpg"/>
                <p className="my-auto mx-3">AMD Ryzen™ 5 5600G</p>
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">12,000</div>
            <div className="col-2 p-2 border-bottom border-secondary">1</div>
            <div className="col-2 p-2 border-bottom border-secondary">12,0000 <button type="button" className="btn btn-sm btn-danger mx-3" > X </button></div>

        </div>
            </div>
            <div className="col-4 border border-dark p-5">
                <h4>Cart Total</h4>
                <h5>Subtotal</h5>
                <h6>Total</h6>
                <button type="button" className="btn btn-lg btn-dark">Proceed to Checkout</button>
            </div>
        </div>
    </section>
    </>
)
}

export default Cart
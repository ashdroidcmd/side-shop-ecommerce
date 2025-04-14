import React, {useEffect} from 'react'

const Wishlist = () => {
    useEffect(() => {
        document.title = "Side Shop | Wishlist";
    }, []);
return (
    <section className="container">
        <div className="row my-3">
            <div className="row border-bottom border-secondary">
            <div className="col-4 p-2 fw-bold border-bottom border-secondary">Product</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Price</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Date Added</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Stock</div>
            <div className="col-2 p-2 fw-bold border-bottom border-secondary">Add to Card</div>
            
            <div className="col-4 p-2 border-bottom border-secondary d-flex flex-row">
                <img className="img-fluid cart-image" src="/categories/cpu.jpg"/>
                <p className="my-auto mx-3">AMD Ryzen™ 5 5600G</p>
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                3,000
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                March 10, 2025
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                Yes
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                <button type="button" className="btn btn-sm btn-dark mx-3" >Add to Cart</button>
                <button type="button" className="btn btn-sm btn-danger mx-3" > X </button>
            </div>
            
            
            <div className="col-4 p-2 border-bottom border-secondary d-flex flex-row">
                <img className="img-fluid cart-image" src="/categories/cpu.jpg"/>
                <p className="my-auto mx-3">AMD Ryzen™ 3 5600G</p>
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                12,000
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                March 5, 2025
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                No
            </div>
            <div className="col-2 p-2 border-bottom border-secondary">
                <button type="button" className="btn btn-sm btn-dark mx-3" >Add to Cart</button>
                <button type="button" className="btn btn-sm btn-danger mx-3" > X </button>
            </div>
            </div>
        </div>
    </section>
)
}

export default Wishlist
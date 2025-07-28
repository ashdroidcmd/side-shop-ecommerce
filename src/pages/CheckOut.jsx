import React from 'react'
import { NavLink } from 'react-router-dom'

const CheckOut = () => {
return (
    <>
    <section className="container">
        <div className="text-center my-5 py-5">
            <h1>Thank You For Your Purchase</h1>
            <h5>Please shop with us again soon!</h5>
            <NavLink className="" to="/"><img src="/logo-black.png" className="img-fluid" alt="Logo" /></NavLink>
        </div>
    </section>
    </>
)
}

export default CheckOut
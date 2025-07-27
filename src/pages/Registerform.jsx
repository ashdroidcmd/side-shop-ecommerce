import React from 'react'
import { Link } from 'react-router-dom'

const Registerform = () => {
return (
    <section className="d-flex align-items-center py-5 my-5 container">
        <div className="login-width m-auto my-5 bg-light rounded-4">
            <form className="text-center p-3 border-bottom">
                <h1 className=" mb-3 fw-normal">Register</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="username" placeholder="ash123" />
                    <label for="floatingInput">Username</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                    <label for="floatingPassword">Confirm Password</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="firstName" placeholder="John" />
                    <label for="floatingInput">First Name</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="LastName" placeholder="Doe" />
                    <label for="floatingInput">Last Name</label>
                </div>

                
                <div className="d-flex flex-column justify-content-center">
                <Link to="/">
                <button className="btn btn-dark w-25 py-2 my-3 align-self-center" type="submit">Register</button>
                </Link>
                </div>
            </form>

            <div>
                <p className="px-5 py-2 text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            </div>
        </div>
    </section>
)
}

export default Registerform
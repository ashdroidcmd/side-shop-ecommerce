import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
return (
    <>
    <section className="d-flex align-items-center py-5 my-5 container">
        <div className="login-width m-auto my-5 bg-light rounded-4">
            <form className="text-center p-3 border-bottom">
                <h1 className=" mb-3 fw-normal">Log in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
                    <label className="form-check-label" for="checkDefault">
                        Remember me
                    </label>
                </div>
                <div className="d-flex flex-column justify-content-center">
                <Link to="/coming-soon"><small>Lost Your Password?</small></Link>
                <Link to="/">
                <button className="btn btn-dark w-25 py-2 my-3 align-self-center" type="submit">Sign in</button>
                </Link>
                </div>
            </form>

            <div>
                <Link to="/register">
                <p className="py-3 text-center">Don't Have an Account Register Here!</p>
                </Link>
            </div>
        </div>
    </section>
    </>
)
}

export default LoginForm
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Categories from '../components/Categories'
import Cards from '../components/Cards'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = "Side Shop | Home";
}, []);
return (
    <>
    <Hero />
    <Brands />
    <Categories />
    <h1 className="container">Just For You</h1>
    <Cards />
    <Link to="/shop" className="d-flex text-decoration-none mb-5"><button type="button" className="btn btn-dark btn-lg px-5 mx-auto">View More</button></Link>
    </>
)
}

export default Home
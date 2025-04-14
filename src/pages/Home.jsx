import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Categories from '../components/Categories'
import Cards from '../components/Cards'
import React, { useEffect } from 'react';

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
    </>
)
}

export default Home
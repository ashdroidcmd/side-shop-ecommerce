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
    <main className="">
        <Hero />
        <Brands />
        <Categories />
        <Cards />
    </main>
    </>
)
}

export default Home
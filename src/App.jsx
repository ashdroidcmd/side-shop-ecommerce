import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
// import AddProducts from './pages/AddProducts'
import { HashRouter, Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    {/* <AddProducts /> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/product-page" element={<Product />} /> */}
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App

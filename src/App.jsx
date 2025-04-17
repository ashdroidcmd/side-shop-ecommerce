import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import ComingSoon from './pages/ComingSoon'
import ScrollToTop from './components/ScrollToTop'
import LoginForm from './pages/LoginForm'
import Registerform from './pages/Registerform'
import CheckOut from './pages/CheckOut'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <HashRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Registerform />} />
            <Route path="/thank-you" element={<CheckOut />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Route>
        </Routes>
    </HashRouter>
    </>
  )
}

export default App

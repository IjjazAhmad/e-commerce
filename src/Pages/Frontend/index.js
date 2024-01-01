import React from 'react'
import Home from './Home'
import Shop from './Shop'
import SingleProduct from '../../Components/SingleProduct'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
export default function index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

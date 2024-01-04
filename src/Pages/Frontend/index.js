import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Check from './Check'
import SingleProduct from '../../Components/SingleProduct'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import BottomBar from '../../Components/BottomBar'
export default function index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Check />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
      <BottomBar/>
      <Footer />
    </>
  )
}

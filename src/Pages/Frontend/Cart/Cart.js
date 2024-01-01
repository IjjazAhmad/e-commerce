import React from 'react'
import Topbar from '../../../Components/TopBar'
import img from '../../../Assets/images/logo.png'

export default function Cart() {
  return (
    <>

      <Topbar title="CART" />
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h3>Your Cart Items</h3>
          </div>
        </div>
        <div className="row border-bottom">
          <div class="table-responsive">
            <table class="table table-borderless">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">IMAGE</th>
      <th scope="col">NAME</th>
      <th scope="col">PRICE</th>
      <th scope="col">Quantity</th>
      <th scope="col">TOTAL</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">X</th>
      <td><img src={img} className='img-fluid' /></td>
      <td>NAMENAMENAMENAME</td>
      <td>6000000</td>
    </tr>
    <tr>
      <th scope="row">X</th>
      <td><img src={img} className='img-fluid' /></td>
      <td>NAMENAMENAMENAME</td>
      <td>6000000</td>
    </tr>
    <tr>
      <th scope="row">X</th>
      <td><img src={img} className='img-fluid' /></td>
      <td>NAMENAMENAMENAME</td>
      <td>6000000</td>
    </tr>
  </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

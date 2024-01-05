import React from 'react'
import { Link } from 'react-router-dom'
import jazz from '../../Assets/images/Pay/Jazz-cash-logo-vector.png'
import easy from '../../Assets/images/Pay/Easypaisa-logo-vector.png'
import alid from '../../Assets/images/Pay/Allied-bank-logo-vector.png'
import logo from '../../Assets/images/logo.png'


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>


      <div className="footer bg-dark py-4 mt-5">
        <footer className="mb-0 container text-white">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-5 mb-3">
              <img src={logo} className='w-25' />
              <p>The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
              <ul className="nav">
                <li className="nav-item mx-2 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon p-2 rounded-circle py-1 text-dark bg-white">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon p-2 rounded-circle py-1  text-dark bg-white">
                      <i class="fa-brands fa-twitter"></i>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon p-2 rounded-circle py-1 text-dark bg-white">
                      <i class="fa-brands fa-youtube"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 show-none">
              <h4>USFUL LINKS</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">About Us</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">FAQ</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Location</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Contact</Link></li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-3 show-none">
              <h4>CUSTOMER SERVICE</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Return Policy</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Privacy Policy</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Whole Sale</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2 mb-3 show-none">
              <h4>MY ACCOUNTS</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">My Profile</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Order Tracking</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Wishlist</Link></li>
              </ul>
            </div>

          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 mb-3">
              <h4>Contact Us</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon p-2 rounded-circle py-1 bg-white">
                      <i className="fa-solid text-dark fa-phone"></i>
                    </div>
                    <Link to="/" className="nav-link p-0 ps-2 text-white">+923267876344</Link>
                  </div>
                </li>
                <li className="nav-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon p-2 rounded-circle py-1 bg-white">
                      <i className="fa-solid text-dark fa-at"></i>
                    </div>
                    <Link to="/" className="nav-link p-0 ps-2 text-white">info@gmail.com</Link>
                  </div>
                </li>
                <li className="nav-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon p-2 rounded-circle py-1 bg-white">
                      <i className="fa-solid text-dark fa-location-dot"></i>
                    </div>
                    <Link to="/" className="nav-link p-0 ps-2 text-white">NEwhere UK Limited Austen House</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row mb-0 mx-auto px-5">
            <div className="col-12 col-md-6 col-lg-6">
              <p>&copy; {year} Fiama All rights reserved.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="d-flex align-items-center">
                <div className='bg-white mx-2 p-2 rounded-2 '>
                  <img src={jazz} />
                </div>
                <div className='bg-white mx-2 p-2 rounded-2 '>
                  <img src={easy} />
                </div>
                <div className='bg-white mx-2 p-2 rounded-2 '>
                  <img src={alid} />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

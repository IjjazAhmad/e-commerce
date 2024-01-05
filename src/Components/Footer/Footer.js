import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
     

        <div className="footer bg-dark py-3 mt-5">
          <footer className="mb-0 container text-white">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3 mb-3 show-none">
                <h4>HELP</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">About Us</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Meet The Team</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Lab Reports</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Glossary</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Help Center</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Order Status</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">CBDfx Affiliate Program</Link></li>
                </ul>
              </div>

              <div className="col-12 col-md-5 col-lg-3 mb-3 show-none">
                <h4>CUSTOMER SERVICE</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Return Policy</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Privacy Policy</Link></li>
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Terms & Conditions</Link></li>
                </ul>
              </div>

              <div className="col-12 col-md-5 col-lg-3 mb-3">
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
            <div className="row justify-content-center text-center">
              <div className="col-10 col-md-6 col-lg-6 mb-3">
                <h4>WE ACCEPT</h4>
                <span className='me-2'>
                  <i class="fa-brands fa-cc-visa fa-2xl"></i>
                </span>
                <span className='mx-2'>
                  <i class="fa-brands fa-cc-mastercard fa-2xl"></i>
                </span>
                <span className='mx-2'>
                  <i class="fa-brands fa-cc-amex fa-2xl"></i>
                </span>
              </div>
              <div className="col-10 col-md-6 col-lg-6 ">
                <p>CONTACT WITH US</p>
                <div className="d-flex justify-content-center">
                  <div className=" p-2 rounded-circle py-1 bg-white me-2">
                    <i className="fa-solid text-dark fa-phone"></i>
                  </div>
                  <div className=" p-2 rounded-circle py-1 bg-white">
                    <i className="fa-solid text-dark fa-phone"></i>
                  </div>

                </div>

              </div>
            </div>
            <hr />
            <div className="row mb-0">
              <div className="col w-100 mb-2">
                <div class="accordion w-100" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item shadow-none">
                    <h2 class="accordion-header">
                      <button class="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                        DISCLAIMER: Do not exceed the recommended daily intake. Your daily CBD intake can be supplemented by other products, so do not exceed 70mg of CBD per day.
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <p>The statements made regarding these products have not been evaluated by the Food Standards Agency or the Medicines & Healthcare products Regulatory Agency. The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. Our products are not for use by persons under the age of 18. You must be at least 18 years of age to visit this website and/or purchase CBDfx products. Do not use a CBD product if you are pregnant or may become pregnant, lactating, suffering from a medical condition(s) or taking medication(s).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row mb-0 mx-auto px-5">
              <div className="col text-center">
                <p>&copy; {year} Fiama All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
    
    </>
  )
}

import React, { useState } from 'react'
import img1 from '../../../../Assets/images/8-trolley.svg'
import img2 from '../../../../Assets/images/9-money.svg'
import img3 from '../../../../Assets/images/10-credit-card.svg'
import img4 from '../../../../Assets/images/11-gift-card.svg'
import img5 from '../../../../Assets/images/hero/7.png'
import Time from '../../../../Components/Time'
import { useCartContext } from '../../../Context/CartContext'
import { useProductContext } from '../../../Context/ProductContext'
import { Link } from 'react-router-dom'

export default function Deal() {
    const { addtoCart } = useCartContext();
    const { products } = useProductContext()
    const [amount, setAmount] = useState(1)
    const firstProductIndex1 = 0;
    const lastProductIndex1 = firstProductIndex1 + 8;
    const product = products.slice(firstProductIndex1, lastProductIndex1);
    return (
        <>
            <div className='deal'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center'>
                            <div className="div">
                                <img src={img5} className="img-fluid mx-auto" />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-7'>
                            <div className="p-3 text-dark">
                                <h1>Apple Shopping Event</h1>
                                <p>Hurry and get discounts on all Apple devices up to 20%</p>
                                <Time />
                                <button className="my-4 p-3  btn btn-danger">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='container'>
                    <h1 className="heading-1 text-start">
                        Deal<span className="text-danger"> Of </span>The Day

                    </h1>
                    <div className="row mb-5">

                        {product.map((doc, i) => {

                            return (
                                <div key={i} className="col-6 col-md-6 mb-3 col-lg-3">


                                    <div className="product-grid shadow">

                                        <div className="product-image">

                                            <div className="image">

                                                <img src={doc.image} className='img-fluid' />

                                            </div>

                                            <span className="product-discount-label">{doc.company}</span>

                                            <ul className="product-links">

                                                <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-eye'></i></Link></li>

                                                <li><Link onClick={() => addtoCart(amount, doc)}><i className='fa fa-shopping-bag'></i></Link></li>

                                                <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-heart'></i></Link></li>

                                            </ul>



                                        </div>

                                        <div className=" bg-danger">
                                            <div className='d-flex justify-content-around py-2'>
                                                <p className='m-0'>${(doc.price)}</p>
                                                <p onClick={() => addtoCart(amount, doc)} className='text-end m-0'><i className='fa fa-shopping-bag '></i></p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            <div className='pay-deal'>
                <div className='container'>
                    <div className='row bg-body-tertiary pb-0 mb-3 border'>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='deal-card'>
                                <div className='d-flex'>
                                    <img src={img1} className='img-fluid' />
                                    <p className='pt-5 fw-semibold'>Free shipping <br />
                                        <span className='fw-normal'>On all orders over $49.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='deal-card'>
                                <div className='d-flex'>
                                    <img src={img2} className='img-fluid' />
                                    <p className='pt-5 fw-semibold'>15 days returns <br />
                                        <span className='fw-normal'>Moneyback guarantee</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='deal-card'>
                                <div className='d-flex'>
                                    <img src={img3} className='img-fluid' />
                                    <p className='pt-5 fw-semibold'>Secure checkout <br />
                                        <span className='fw-normal'>Protected by Paypal</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='deal-card'>
                                <div className='d-flex'>
                                    <img src={img4} className='img-fluid' />
                                    <p className='pt-5 fw-semibold'>Offer & gift here <br />
                                        <span className='fw-normal'>On all orders over</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

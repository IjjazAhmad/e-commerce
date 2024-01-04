import React from 'react'
import img1 from '../../../../Assets/images/8-trolley.svg'
import img2 from '../../../../Assets/images/9-money.svg'
import img3 from '../../../../Assets/images/10-credit-card.svg'
import img4 from '../../../../Assets/images/11-gift-card.svg'
import img5 from '../../../../Assets/images/hero/7.png'
import Time from '../../../../Components/Time'

export default function Deal() {
    return (
        <>
            <div className='deal'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-6 col-lg-5'>
                            <div className="div">

                            <img src={img5} className="img-fluid mx-auto" />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-7'>
                            <div className="p-3 text-dark">
                                <h1>Apple Shopping Event</h1>
                                <p>Hurry and get discounts on all Apple devices up to 20%</p>
                                <Time />
                                <button className="my-4 p-3 px-3 px-md-4 px-lg-5 rounded-1 btn btn-danger">Shop Now</button>
                            </div>
                        </div>
                    </div>
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

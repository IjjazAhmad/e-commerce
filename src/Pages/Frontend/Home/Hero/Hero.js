import React from 'react'
import img from '../../../../Assets/images/hero/1.jpg'
import img1 from '../../../../Assets/images/hero/2.jpg'
import img2 from '../../../../Assets/images/hero/3.jpg'
import img4 from '../../../../Assets/images/hero/5.jpg'
import img5 from '../../../../Assets/images/hero/6.jpg'
import Time from '../../../../Components/Time'
export default function Hero() {

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div id="carouselExampleCaptions" className="carousel slide mb-3">
                                <div className="carousel-indicators mx-auto bg-white number-mian">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="bg-dark active button rounded-circle" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='bg-dark rounded-circle button' aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='bg-dark rounded-circle button' aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="3000">
                                        <img src={img2} className="w-100" alt="..." />
                                        <div className="carousel-content">
                                            <h2 className='mt-0 text-white'>Apple Shopping Event</h2>
                                            <p className='text-white'>Shop great deals on MacBook, iPad, iPhone and more.</p>
                                            <button className="p-2 px-3 rounded-1 text-white btn btn-danger">Shop Now</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={img} className="w-100" alt="..." />
                                        <div className="carousel-content">
                                            <h2 className='mt-0 text-white'>The new Google Pixel 7</h2>
                                            <p className='text-white'>Shop great deals on MacBook, iPad, iPhone and more.</p>
                                            <button className="p-2 px-3 rounded-1 text-white btn btn-danger">Shop Now</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={img1} className="w-100" alt="..." />
                                        <div className="carousel-content">
                                            <h2 className='mt-0 text-white'>Discount on all Smart appliances up to 25%</h2>
                                            <p className='text-white'>Shop great deals on MacBook, iPad, iPhone and more.</p>
                                            <button className="p-2 px-3 rounded-1 text-white btn btn-primary">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="row teimeradd mb-3">
                                <div className="col-12 p-3 text-white bg">
                                    <h3>Aurora Headset</h3>
                                    <Time />
                                    <button className="my-4 p-2 px-3 rounded-1 text-white btn btn-danger">Shop Now</button>
                                </div>
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="bg-primary d-flex rounded-3 p-3 mb-3 mt-3">
                                            <div className="col-7 text-white">
                                                <h5>New Dual Sense</h5>
                                                <p>For PlayStation 5</p>
                                                <button className="p-2 px-3 rounded-1 text-white btn btn-danger">view Details</button>
                                            </div>
                                            <div className="col-5">
                                                <img src={img4} className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="bg-warning d-flex rounded-3 p-3 mb-3 mt-3">
                                            <div className="col-7 text-white">
                                                <h5>Instant Cameras</h5>
                                                <p>Get photo paper as a gift</p>
                                                <button className="p-2 px-3 rounded-1 text-white btn btn-danger">view Details</button>
                                            </div>
                                            <div className="col-5">
                                                <img src={img5} className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

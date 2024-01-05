import React from 'react'
import image1 from '../../../../Assets/images/1.jpg'
import image2 from '../../../../Assets/images/2.jpg'
import image3 from '../../../../Assets/images/3.jpg'
import image4 from '../../../../Assets/images/4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Reviews() {
    return (
        <>
            <div className="container swiperContainer">
                <div className="row">
                    <div className="col">
                        <Swiper
                            className='py-3'
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            breakpoints={{
                                600: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="bg slide p-5 mx-2 text-center">
                                    <div className="d-flex justify-content-center mb-2">
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <h4>Boy Name</h4>
                                    <p>The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg slide p-5 mx-2 text-center">
                                    <div className="d-flex justify-content-center mb-2">
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <h4>Boy Name</h4>
                                    <p>The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg slide p-5 mx-2 text-center">
                                    <div className="d-flex justify-content-center mb-2">
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <h4>Boy Name</h4>
                                    <p>The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg slide p-5 mx-2 text-center">
                                    <div className="d-flex justify-content-center mb-2">
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <h4>Boy Name</h4>
                                    <p>The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg slide p-5 mx-2 text-center">
                                    <div className="d-flex justify-content-center mb-2">
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <h4>Boy Name</h4>
                                    <p>The efficacy of these products has not been confirmed by FSA or MHRA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <div className="testimonial">
                <div className="container">
                    <h1 className='heading-1'><span className='text-danger'>our</span> teams</h1>
                    <div className="row">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active text-center">
                                    <div className='text-center'>
                                        <img src={image1} className='rounded-circle' />
                                    </div>
                                    <h4>Name boy</h4>
                                </div>
                                <div class="carousel-item text-center">
                                    <div className='text-center'>
                                        <img src={image2} className='rounded-circle' />
                                    </div>
                                    <h4>Name boy</h4>
                                </div>
                                <div class="carousel-item text-center">
                                    <div className='text-center'>
                                        <img src={image4} className='rounded-circle' />
                                    </div>
                                    <h4>Name boy</h4>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div> */}


        </>
    )
}
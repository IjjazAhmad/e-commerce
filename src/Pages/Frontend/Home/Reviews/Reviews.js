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
                        {/* <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30"
                            slides-per-view="3">
                            <swiper-slide>Slide 1</swiper-slide>
                            <swiper-slide>Slide 2</swiper-slide>
                            <swiper-slide>Slide 3</swiper-slide>
                            <swiper-slide>Slide 4</swiper-slide>
                            <swiper-slide>Slide 5</swiper-slide>
                            <swiper-slide>Slide 6</swiper-slide>
                            <swiper-slide>Slide 7</swiper-slide>
                            <swiper-slide>Slide 8</swiper-slide>
                            <swiper-slide>Slide 9</swiper-slide>
                        </swiper-container> */}
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                         
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
import React from 'react'
import image1 from '../../../../Assets/images/1.jpg'
import image2 from '../../../../Assets/images/2.jpg'
import image3 from '../../../../Assets/images/3.jpg'
import image4 from '../../../../Assets/images/4.jpg'
export default function Team() {
    return (
        <>
            <div className="team">

                <div className="container">

                    <div className="row">

                        <h1 className='heading-1'><span className='text-danger'>our</span> teams</h1>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card shadow-sm border-0 rounded">
                                <div className="card-body p-0"><img src={image1} className="w-100 card-img-top"/>
                                    <div className="p-4">
                                        <h5 className="mb-0 text-center">RWilliam Gabriel</h5>
                                        <p className="small text-muted text-center">Team Expart</p>
                                        <ul className="social mb-0 list-inline mt-5 pb-2 border-danger border-2 w-100 border-bottom text-center">
                                        <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-facebook-f mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-twitter mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-instagram mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-pinterest-p mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm border-0 rounded">
                                <div className="card-body p-0"><img src={image2} className="w-100 card-img-top"/>
                                    <div className="p-4">
                                        <h5 className="mb-0 text-center">Kelian Anderson</h5>
                                        <p className="small text-muted text-center">Team Expart</p>
                                        <ul className="social mb-0 list-inline mt-5 pb-2 border-danger border-2 w-100 border-bottom text-center">
                                        <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-facebook-f mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-twitter mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-instagram mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-pinterest-p mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm border-0 rounded">
                                <div className="card-body p-0"><img src={image3} className="w-100 card-img-top"/>
                                    <div className="p-4">
                                        <h5 className="mb-0 text-center">James Carter</h5>
                                        <p className="small text-muted text-center">Team Expart</p>
                                        <ul className="social mb-0 list-inline mt-5 pb-2 border-danger border-2 w-100 border-bottom text-center">
                                        <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-facebook-f mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-twitter mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-instagram mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-pinterest-p mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="card shadow-sm border-0 rounded">
                                <div className="card-body p-0"><img src={image4} className="w-100 card-img-top"/>
                                    <div className="p-4">
                                        <h5 className="mb-0 text-center">Adam Joseph</h5>
                                        <p className="small text-center">Team Expart</p>
                                        <ul className="social mb-0 list-inline mt-5 pb-2 border-danger border-2 w-100 border-bottom text-center">
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-facebook-f mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-twitter mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-instagram mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                            <li className="list-inline-item m-0"><div className="social-link"><i className="fa-brands fa-pinterest-p mx-2" style={{color:"#3b3b3b"}}></i></div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
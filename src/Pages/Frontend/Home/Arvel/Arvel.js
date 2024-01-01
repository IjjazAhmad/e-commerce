import React, { useState } from 'react'

import { useProductContext } from '../../../Context/ProductContext'
import { Link } from 'react-router-dom'

export default function Arvel() {

    const [SingleDoc, setSingleDoc] = useState({})

    const { isLoading, featureproducts, products } = useProductContext()

    // const modleImg = (doc) => {

    //     setSingleDoc(doc)

    // }


    if (isLoading) {
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-1 mx-auto">
                        <div class="spinner-border my-5 " role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    const firstProductIndex = 0;
    const lastProductIndex = firstProductIndex + 5;
    const productsToRender = products.slice(firstProductIndex, lastProductIndex);
    console.log(productsToRender);

    const firstProductIndex1 = 0;
    const lastProductIndex1 = firstProductIndex1 + 8;
    const product = products.slice(firstProductIndex1, lastProductIndex1);
    console.log(productsToRender);

    const FrametNumber = (price) => {
        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price / 100)

    }

    return (

        <>

            <div className="arvel mb-5">

                <div className="container">
                    <h1 className="heading-1 text-start">
                        <span className="text-danger">Popular </span> Categories

                    </h1>

                    <div className="row mb-5">

                        {productsToRender.map((doc, i) => {

                            return (

                                <div key={i} className="col-12 col-md-4 mb-3 col-lg-2 p-2 mx-3">
                                    <Link to={`/singleproduct/${doc.id}`} className='text-decoration-none'>
                                        <div className="card shadow-sm border-0 rounded">
                                            <div className="card-body p-0"><img src={doc.image} className="w-100 card-img-top" />
                                                <div className="p-4">
                                                    <h5 className="mb-0 text-center">{doc.name}</h5>
                                                    <p className="small text-muted text-center">{doc.description.slice(0, 10)}...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })

                        }

                    </div>
                    <h1 className="heading-1 text-start">
                        The<span className="text-danger"> Best </span>Offers

                    </h1>
                    <div className="row mb-5">

                        {product.map((doc, i) => {

                            return (
                                <div key={i} className="col-12 col-md-6 mb-3 col-lg-3">
                                    <Link to={`/singleproduct/${doc.id}`} className='text-decoration-none'>

                                        <div className="product-grid ">

                                            <div className="product-image">

                                                <div className="image">

                                                    <img src={doc.image} className='img-fluid' />

                                                </div>

                                                <span className="product-discount-label">{doc.company}</span>

                                                <ul className="product-links">

                                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-eye'></i></Link></li>

                                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-shopping-bag'></i></Link></li>

                                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-heart'></i></Link></li>

                                                </ul>

                                                <a href="/" className="add-to-cart">Add to Cart</a>

                                            </div>

                                            <div className="product-content bg">

                                                <div className='d-flex pt-2'>

                                                    <h3 className="title"><a href="#">{doc.name}</a></h3>

                                                    <div className="price">{FrametNumber(doc.price)}</div>


                                                </div>

                                            </div>

                                        </div>

                                    </Link>
                                </div>
                            )
                        })}

                    </div>

                    {/* <button type="button" onClick={() => (modleImg(doc))} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        see pic
                    </button> */}
                </div>

            </div >


            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{SingleDoc.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={SingleDoc.image} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

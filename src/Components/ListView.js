import React from 'react'
import { Link } from 'react-router-dom'

export default function ListView({ products }) {

    return (
        <>
            {products.map((doc, i) => {
                return <>
                    <div className="row shadow my-3">
                        <div key={i} className='col-12 col-md-6 col-ld-4  product-grid'>
                            <span className="product-discount-label">{doc.company}</span>
                            <div className="image">
                                <img src={doc.image} className='img-fluid w-50' />
                            </div>

                        </div>
                        <div className='col-12 col-md-6 col-ld-8'>
                            <div className='product-data mt-3 pt-2'>
                                <h2>{doc.name}</h2>
                                <div className="d-flex star">
                                    <p className='text-warning me-3'> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star-half-stroke"></i> </p>
                                    <p>${(doc.price)}</p>
                                </div>
                                <p>{doc.description.slice(0, 180)}..</p>
                                <button className='btn btn-dark bth-hover p-3 py-2 mb-5'>Add To Cart</button>
                                <Link className='btn mx-2 ms-4 btn-hover bth-hover-two p-3 py-2 mb-5' to={`/singleproduct/${doc.id}`}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </>
    )
}

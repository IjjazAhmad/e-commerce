import React from 'react'
import { Link } from 'react-router-dom'

export default function ListView({ products }) {
    const FrametNumber = (price) => {
        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price / 100)

    }
    return (
        <>
            {products.map((doc, i) => {
                return <>
                    <div key={i} className='col-12 col-md-6 col-ld-4 mb-3 product-grid'>
                        <span className="product-discount-label">{doc.company}</span>
                        
                            <img src={doc.image} className='img-fluid' />
                        
                    </div>
                    <div className='col-12 col-md-6 col-ld-8 mb-3'>
                        <div className='product-data mt-3 pt-2'>
                            <h2>{doc.name}</h2>
                            <div className="d-flex star">
                                <p className='text-warning me-3'> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star-half-stroke"></i> </p>
                                <p>{FrametNumber(doc.price)}</p>
                            </div>
                            <p>{doc.description.slice(0, 180)}..</p>
                            <button className='btn btn-dark bth-hover p-3 py-2 mb-5'>Add To Cart</button>
                            <Link className='btn mx-2 ms-4 btn-hover bth-hover-two p-3 py-2 mb-5' to={`/singleproduct/${doc.id}`}>Read More</Link>
                        </div>
                    </div>
                </>
            })}
        </>
    )
}

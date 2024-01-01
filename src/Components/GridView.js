import React from 'react'
import { Link } from 'react-router-dom'


export default function GridView({ products }) {

    const FrametNumber = (price) => {
        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price / 100)

    }
    return (
        <>
            <div className='row'>

                {products.map((doc, i) => {

                    return <div key={i} className="col-12 col-md-6 mb-3 col-lg-4">

                        <div className="product-grid">

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

                            <div className="product-content">

                                <div className='d-flex pt-2'>

                                    <h3 className="title"><a href="#">{doc.name}</a></h3>

                                    <div className="price">{FrametNumber(doc.price)}</div>


                                </div>

                            </div>

                        </div>

                    </div>
                })}
            </div>
        </>
    )
}

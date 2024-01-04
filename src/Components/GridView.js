import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Pages/Context/CartContext';


export default function GridView({ products }) {
    const { addtoCart } = useCartContext();
    const [amount, setAmount] = useState(1)


    return (
        <>
            <div className='row'>

                {products.map((doc, i) => {
                    let product = doc
                    return <div key={i} className="col-12 col-md-6 mb-3 col-lg-4">

                        <div className="product-grid">

                            <div className="product-image">

                                <div className="image">

                                    <img src={doc.image} className='img-fluid' />

                                </div>

                                <span className="product-discount-label">{doc.company}</span>

                                <ul className="product-links">

                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-eye'></i></Link></li>

                                    <li><a onClick={() => addtoCart(amount, product)}><i className='fa fa-shopping-bag'></i></a></li>

                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-heart'></i></Link></li>

                                </ul>

                                <a className="add-to-cart" onClick={() => addtoCart(amount, product)}>Add to Cart</a>

                            </div>

                            <div className="product-content">

                                <div className='d-flex pt-2'>

                                    <h3 className="title"><a href="#">{doc.name}</a></h3>

                                    <div className="price">${(doc.price)}</div>


                                </div>

                            </div>

                        </div>

                    </div>
                })}
            </div>
        </>
    )
}

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
                    return <div key={i} className="col-6 col-md-4 mb-3 col-lg-3">

                        <div className="product-grid shadow">

                            <div className="product-image">

                                <div className="image">

                                    <img src={doc.image} className='img-fluid' />

                                </div>

                                <span className="product-discount-label">{doc.company}</span>

                                <ul className="product-links">

                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-eye'></i></Link></li>

                                    <li><Link onClick={() => addtoCart(amount, product)}><i className='fa fa-shopping-bag'></i></Link></li>

                                    <li><Link to={`/singleproduct/${doc.id}`}><i className='fa fa-heart'></i></Link></li>

                                </ul>

                              

                            </div>

                            <div className=" bg-danger">
                                <div className='d-flex justify-content-around py-2'>
                                    <p className='m-0'>${(doc.price)}</p>
                                    <p onClick={() => addtoCart(amount, product)} className='text-end m-0'><i className='fa fa-shopping-bag '></i></p>
                                </div>

                            </div>

                        </div>

                    </div>
                })}
            </div>
        </>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContext } from '../../Pages/Context/ProductContext'
import TopBar from '../TopBar'
import Myimg from '../Myimg'
import { CartContext } from '../../Pages/Context/CartContext'


const API = "https://api.pujakaitem.com/api/products"

export default function SingleProduct() {
  // const { addtocart } = useContext(CartContext)
  const { getSingleProducts, isSingleLoading, singleproduct } = useProductContext()
  const [singleProductName, setSingleProductName] = useState("")
  const [quantity, setquantity] = useState(1)

  const { id } = useParams()

  const {
    id: aqibid,
    name,
    company,
    description,
    price,
    reviews,
    stock,
    image,
    colors

  } = singleproduct;
  useEffect(() => {
    if (name) {
      let capitalizedName = name.replace(/\b\w/g, char => char.toUpperCase());
      setSingleProductName(capitalizedName);
    } else {
      setSingleProductName("Loading..."); // Or a placeholder
    }
  }, [name]);

  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`)
  }, [])

  const FrametNumber = (price) => {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price / 100)

  }


  const add = () => {
    const delet = quantity + 1;
    setquantity(delet)
  }
  

  return (
    <>
      <TopBar title={name} />
      <div className='single'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-md-8 col-lg-6'>
              <Myimg imgs={image} />
            </div>
            <div className='col-12 col-md-8 col-lg-6'>
              <div className='product-data'>
                <h2>{singleProductName}</h2>
                <h2></h2>
                {/* <Star stars={stars} reviews={reviews} className="text-warning" /> */}
                <div className="d-flex star">
                  <p className='text-warning me-3'> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star-half-stroke"></i> </p>
                  <p>({reviews}  Comstemer Reviews)</p>
                </div>
                <p> <span className='text-danger'>Deal of the day :</span> {FrametNumber(price)}</p>
                <p>{description}</p>
                <p>Avalilable : <span className='text-danger'>{stock > 0 ? "In Stock" : "Not Avalilable"}</span></p>
                <p>id : <span className='text-danger'>{id}</span></p>
                <p>Brands : <span className='text-danger'>{company}</span></p>
                <hr style={{ width: "90%" }} />
                {stock > 0
                  ?
                  <div className='d-flex'>
                    <button className='btn btn-dark bth-hover p-2 mx-3' onClick={() => {
                      quantity > 1 ? setquantity(quantity - 1) : setquantity(1)
                    }}>-</button>
                    <p className='mt-4 p-2'>{quantity}</p>
                    <button className='btn btn-dark bth-hover p-2 mx-3' onClick={add}>+</button>

                  </div>
                  : ""}
                <Link className='btn btn-dark bth-hover mb-5 text-decoration-none text-white' to='/cart' >Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

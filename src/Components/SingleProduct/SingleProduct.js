import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContext } from '../../Pages/Context/ProductContext'
import TopBar from '../TopBar'
import { useCartContext } from '../../Pages/Context/CartContext'
import CartAmountToggle from '../CartAmountToggle'



export default function SingleProduct() {
  const { addtoCart } = useCartContext();
  const { Product } = useProductContext()
  const [singleProductName, setSingleProductName] = useState("")
  const [singleProduct, setSingleProduct] = useState({})
  const [amount, setAmount] = useState(1)
  const { id } = useParams()




  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () => {
    amount < singleProduct.stock ? setAmount(amount + 1) : setAmount(singleProduct.stock)
  }



  useEffect(() => {
    if (singleProduct.name) {
      let capitalizedName = singleProduct.name.replace(/\b\w/g, char => char.toUpperCase());
      setSingleProductName(capitalizedName);
    } else {
      setSingleProductName("Loading..."); // Or a placeholder
    }
  }, [singleProduct.name]);

  useEffect(() => {
    let singleProduct = Product.find((product) => {
      return product.id === id
    })
    setSingleProduct(singleProduct)
  }, [id])

  // const FrametNumber = (price) => {
  //   // return Intl.NumberFormat('en-US', {
  //   //   style: 'currency',
  //   //   currency: 'USD',
  //   // }).format(price / 1000)

  // }


  return (
    <>
      <TopBar title={singleProduct.name} />
      <div className='single'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-md-8 col-lg-6'>
              <img src={singleProduct.image} className='img-fluid' alt={singleProduct.name} />
            </div>
            <div className='col-12 col-md-8 col-lg-6'>
              <div className='product-data'>
                <h2>{singleProductName}</h2>
                <h2></h2>
                {/* <Star stars={stars} reviews={reviews} className="text-warning" /> */}
                <div className="d-flex star">
                  <p className='text-warning me-3'> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star-half-stroke"></i> </p>
                  <p>({singleProduct.reviews}  Comstemer Reviews)</p>
                </div>
                <p> <span className='text-danger'>Deal of the day :</span> ${singleProduct.price}</p>
                <p>{singleProduct.description}</p>
                <p>Avalilable : <span className='text-danger'>{singleProduct.stock > 0 ? "In Stock" : "Not Avalilable"}</span></p>
                <p>id : <span className='text-danger'>{singleProduct.id}</span></p>
                <p>Brands : <span className='text-danger'>{singleProduct.company}</span></p>
                <hr style={{ width: "90%" }} />
                {singleProduct.stock > 0
                  ?
                  <CartAmountToggle
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}
                  />
                  : ""}
                <Link className='btn btn-dark bth-hover mb-5 text-decoration-none text-white' onClick={() => addtoCart(amount, singleProduct)} >Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

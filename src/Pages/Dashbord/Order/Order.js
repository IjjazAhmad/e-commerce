import React, { useEffect, useState } from 'react'
import { firestore } from '../../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Order() {
  const [orders, setorders] = useState([])

  useEffect(() => {
    fetchDoc()
  }, [])
  const fetchDoc = async () => {
    let arry = []


    const querySnapshot = await getDocs(collection(firestore, "orders"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data()
      arry.push(data)
    });
    setorders(arry)
  }
  return (
    <>
      <div className="conainer">
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th >#</th>
                  <th >NAME</th>
                  <th >ADDRESS</th>
                  <th >EMAIL</th>
                  <th >PHONE</th>
                  <th >POSTALCODE</th>
                  <th >COUNTRY</th>
                  <th >PRODUCTID</th>
                  <th >TOTALQTY</th>
                  <th >PRICE</th>
                  <th >PRODUCTNAME</th>
                  <th >TOTALPRICE</th>
                </tr>
              </thead>
              <tbody>

                {orders.map((order, i) => {
                  return (
                    <tr key={i}>

                      {/* <td className='w-25'><img src={order.to} className='cart-img' /></td> */}
                      <td>{i + 1}</td>
                      <td>{order.state.firstname + order.state.lastname}</td>
                      <td >{order.state.address}</td>
                      <td>{order.state.email}</td>
                      <td>{order.state.phone}</td>
                      <td>{order.state.postcode}</td>
                      <td>{order.state.countryname}</td>
                      {order.product.length === 1 ?
                        order.product.map((product, i) => {
                          return (
                            <>
                              <td>{product.id}</td>
                              <td>{product.amount}</td>
                              <td>{product.price}</td>
                              <td>{product.name}</td>
                            </>
                          )

                        }) :
                        <>
                          <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Orders
                            </button>
                            {order.product.map((product, i) => {
                              return (
                                <>
                                  <ul class="dropdown-menu">
                                    <li class="dropdown-item">{product.id}</li>
                                    <li class="dropdown-item">{product.amount}</li>
                                    <li class="dropdown-item">{product.price}</li>
                                    <li class="dropdown-item">{product.name}</li>
                                  </ul>
                                </>
                              )
                            })}
                          </div >
                          <td></td>
                          <td></td>
                          <td></td>
                        </>

                      }


                      <td>Rs {order.ordertotal}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}


import React, { useEffect, useState } from 'react'

import DashBordCard from '../../../Components/DasBordCard/DashBordCard'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../../config/firebase'

export default function Home() {
  const [Product, setproduct] = useState([])
  const [TotalAmount, setTotalAmount] = useState(0)
  const [orders, setorders] = useState([])

  useEffect(() => {
    fetchDocm()
  }, [])
  const fetchDocm = async () => {
    let products = []
    const querySnapshot = await getDocs(collection(firestore, "Products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data()
      products.push(data)
    });
    setproduct(products)
  }

  useEffect(() => {
    fetchDoc()
    const calculatedTotalAmount = orders.reduce((acc, order) => {
      return acc + Number(order.ordertotal);
    }, 0);
    setTotalAmount(calculatedTotalAmount)

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
  const [Users, setUsers] = useState([])
  useEffect(() => {
    fetchDocment()
  }, [])
  const fetchDocment = async () => {
    let arry = []

    const querySnapshot = await getDocs(collection(firestore, "Users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data()
      arry.push(data)
    });
    setUsers(arry)
  }
  return (
    <>
      <div className="container ps-5">
        <div className="section cat">
          <h3>Categories</h3>
          <div className="row">
            <div className="col-12 mb-2 col-md-6 col-lg-3">
              <Link to={'/dashbord/order'} className='text-decoration-none'>
                <DashBordCard title="Total Orders" totalOrder={orders.length} bg="primary" icon="chart-bar" />
              </Link>
            </div>
            <div className="col-12 mb-2 col-md-6 col-lg-3">
              <DashBordCard title="Total Products" totalOrder={Product.length} bg="info" icon="chart-area" />
            </div>
            <div className="col-12 mb-2 col-md-6 col-lg-3">
              <Link to={'/dashbord/user'} className='text-decoration-none'>
                <DashBordCard title="Total Users" totalOrder={Users.length} bg="danger" icon="users" />
              </Link>
            </div>
            <div className="col-12 mb-2 col-md-6 col-lg-3">
              <Link to={'/dashbord/user'} className='text-decoration-none'>
                <DashBordCard title="Total Amount" totalOrder={TotalAmount} bg="warning" icon="money-check-dollar" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

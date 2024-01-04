import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../../../config/firebase'
import { useState } from 'react'
import { useEffect } from 'react'

export default function User() {
  const [Users, setUsers] = useState([])
  useEffect(() => {
    fetchDoc()
  }, [])
  const fetchDoc = async () => {
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
      <div className="container">
        <div className="row">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">UID</th>
                  <th scope="col">FIRST NAME</th>
                  <th scope="col">LAST NAME</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((curelem, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{curelem.uid}</td>
                      <td>{curelem.firstname}</td>
                      <td>{curelem.lastname}</td>
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

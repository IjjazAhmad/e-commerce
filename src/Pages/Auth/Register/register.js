import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { auth } from '../../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { firestore } from '../../../config/firebase';
import img from '../../../Assets/images/5180200.png'
const initialState = { firstname: "", lastname: "", email: "", password: "", confirmpassword: "" }

export default function Register() {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)


  const [state, setstate] = useState(initialState)

  const handelChange = e => {
    e.preventDefault()

    setstate(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const handelSubmit = async () => {
    const { firstname, lastname, email, password, confirmpassword } = state
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!firstname) {
      return toast.error("Plz enter firstname", { position: "top-right" })
    }
    if (firstname.length < 3) {
      return toast.error("firstname must be 3 character", { position: "top-left" })
    }
    if (!lastname) {
      return toast.error("Plz enter lastname", { position: "top-right" })
    }
    if (lastname.length < 3) {
      return toast.error("lastname must be 3 character", { position: "top-left" })
    }
    if (!email) {
      return toast.error("Plz add email", { position: "top-right" })
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address", { position: "top-left" });
    }
    if (!password) {
      return toast.error("Plz enter password", { position: "top-right" })
    }
    if (password.length < 6) {
      return toast.error("Password must be six character", { position: "top-left" })
    }
    if (!confirmpassword) {
      return toast.error("Plz enter confirmpassword", { position: "top-right" })
    }
    if (confirmpassword != password) {
      return toast.error("No password match", { position: "top-left" })
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        adduserFun(user)

        toast.success("Create Account Success", { position: "bottom-left" })
      
      })
      .catch((error) => {
        toast.error(" Something Went Wrong Please Try Again", { position: "bottom-left" })
   
      });


  }

  const adduserFun = async(user) =>{
    const {uid, email, password} = user
    console.log("🚀 ~ file: register.js:83 ~ adduserFun ~ user:", user)
    const {firstname, lastname, confirmpassword} = state
let userdata = {firstname, lastname ,confirmpassword, uid}


userdata.dateCreated =serverTimestamp()
    console.log("🚀 ~ file: register.js:87 ~ adduserFun ~ userdata:", userdata)
    try {
      await setDoc(doc(firestore, "Users", uid), {userdata})
     
      toast.success("Add User Successfully", { position: "bottom-left" })
      dispatch({ type: "LOGIN" })
    } catch (e) {
      toast.error(" Something Went Wrong Please Try Again", { position: "bottom-left" })
     
    }
  }
  return (
    <>
      <div className="auth">
        <div className="container">
          <div className="bg mt-5 rounded-3 p-3">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5 rounded-3">
                <img src={img} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <form className="p-4">
                  <h2 className="text-center  mb-0">Sign Up</h2>
                  <div className="row my-3">
                    <div className="col-12 col-md-6 col-lg-6">
                      <label >First Name</label>
                      <input type="text" className="border-danger form-control shadow-none" name='firstname' value={state.firstname} onChange={handelChange} placeholder="First name" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <label >Last Name</label>
                      <input type="text" className="border-danger form-control shadow-none" name='lastname' value={state.lastname} onChange={handelChange} placeholder="Last name" />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <label >Email</label>
                      <input type="email" className="border-danger form-control shadow-none" name='email' value={state.email} onChange={handelChange} placeholder="Email" />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <label >Password</label>
                      <input type="password" className="border-danger form-control shadow-none" name='password' value={state.password} onChange={handelChange} placeholder="Password" />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <label >Confirm Password</label>
                      <input type="password" className="border-danger form-control shadow-none" name='confirmpassword' value={state.confirmpassword} onChange={handelChange} placeholder="Confirm Password" />
                    </div>
                  </div>
                  <div className="row my-3  mb-5 text-center">
                    <div className="col">
                      <button type="button" onClick={handelSubmit} className=" btn bg" >Create Account</button>
                      <p className="mt-4 ">Already have an account?<Link to="/auth/login" className=' '>Login</Link></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

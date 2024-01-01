import React, { useContext } from 'react'
import Logo from '../../Assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../Pages/Context/AuthContext';

export default function Header() {
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const handelLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch({ type: "LOGOUT" })
                toast.success("user logout", { position: "top-right" })
                navigate("/auth/login")
            })
            .catch(() => {
                alert(" Something Went Wrong Please Try Again")
            })
    }
    return (
        <>
            <div className="header">

                <nav className="navbar navbar-expand-lg bg-white pb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav align-item-center mt-2 mx-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                    <Link to='/' className="nav-link fw-semibold hover">HOME</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link fw-semibold hover">PAGES</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link fw-semibold hover" to="/shop">SHOP</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link fw-semibold hover">NEWS</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link fw-semibold hover">CONTACT</a>
                                </li>
                            </ul>
                            <div className="d-flex pt-2">
                                <div className="text-center align-item-center">
                                    <Link
                                        className="btn btn-danger p-2 me-3 px-3 shadow-none text-capitalize text-white"
                                        onClick={handelLogout}>
                                        Logout
                                    </Link>
                                </div>

                                <Link to='/cart' className='text-decoration-none text-dark'>
                                    <p className="outline-none border-0 bg-white mb-0" type="submit">
                                        <i className="fa-solid text-danger fa-bag-shopping fa-lg"></i>
                                        <h6 className='fw-normal'><span>You</span><span className='text-danger'>Cart</span></h6>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

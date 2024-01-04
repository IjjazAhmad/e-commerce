import React from 'react'
import Route from './Route'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.png'
export default function Sidebar() {
    return (
        <>
            <div className="mainsidebar">
                {/* // < !--Main Navigation-- > */}
                <header>
                    {/* <!-- Sidebar --> */}
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-danger">
                        <div className="position-sticky bg-danger">
                            <div className="list-group list-group-flush mx-3 mt-4 ">
                                <Link
                                    to="/dashbord/home"
                                    className="list-group-item list-group-item-action py-2 ripple bg-danger"
                                >
                                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
                                </Link>
                                <Link to="/dashbord/add" className="list-group-item list-group-item-action ripple py-2 bg-danger">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Add Product</span>
                                </Link>
                                <Link to="/dashbord/order" className="list-group-item list-group-item-action py-2 ripple bg-danger"
                                ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link>
                                <Link to="/dashbord/user" className="list-group-item list-group-item-action py-2 ripple bg-danger"
                                ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
                                <Link to="/" className="list-group-item list-group-item-action py-2 ripple bg-danger"
                                ><i className="fas fa-arrow-left fa-fw me-3"></i><span>Leave</span></Link>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Sidebar --> */}

                    {/* <!-- Navbar --> */}
                    <nav id="main-navbar" className="navbar navbar-expand-lg border-bottom navbar-light bg-white fixed-top">
                        {/* <!-- Container wrapper --> */}
                        <div className="container-fluid">
                            {/* <!-- Toggle button --> */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#sidebarMenu"
                                aria-controls="sidebarMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>

                            {/* <!-- Brand --> */}
                            <Link className="navbar-brand" to="/">
                                <img
                                    src={logo}
                                    height="25"
                                    alt="MDB Logo" />
                            </Link>
                            {/* <!-- Search form --> */}
                            <form className="d-none d-md-flex input-group w-auto my-auto">
                                <input
                                    autocomplete="off"
                                    type="search"
                                    className="form-control rounded"
                                    placeholder='Search (ctrl + "/" to focus)'
                                    style={{ minWidth: "225px" }}
                                />
                                <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
                            </form>
                        </div>
                        {/* <!-- Container wrapper --> */}
                    </nav>
                    {/* <!-- Navbar --> */}
                </header>
                {/* <!--Main Navigation-- > */}

                {/* < !--Main layout-- > */}
                <main style={{ marginTop: "58px" }}>

                    <div className="container pt-4">
                        <Route />
                    </div>
                </main>
                {/* <!--Main layout-- > */}
            </div>
        </>
    )
}

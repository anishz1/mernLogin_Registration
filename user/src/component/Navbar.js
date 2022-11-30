import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid  ">
                    <a className="navbar-brand text-white" href="/">Navbar</a>
                    
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <NavLink className="nav-link text-muted" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link text-muted" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link text-muted" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link text-muted" to="/register">Registration</NavLink>
                            </li>
                             
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
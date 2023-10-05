import React from 'react'
import {Link, NavLink} from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark py-3" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Remainder</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <NavLink className="btn btn-outline-light rounded-0" to="/">Set Remainder</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-outline-light rounded-0 mx-3" to="/check-remainder">Check Remainder</NavLink>
                            </li>  
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar

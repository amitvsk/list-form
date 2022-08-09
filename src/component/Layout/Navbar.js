import React from "react";
import { Link ,NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-outline-light" exact to="/users/add">Add user</Link>
            </div>
        </nav>
    );
};

export default Navbar;
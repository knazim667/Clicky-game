import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
            Clicky Game
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navabrNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    Click Picture Game Start !
                </li>
            </ul>
            <span className="navbar-text ml-auto">
                Score:  | Top Score:
            </span>
        </div>
    </nav>
)
export default Navbar;
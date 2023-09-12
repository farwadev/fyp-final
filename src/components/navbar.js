import React from "react";
import img from "../images/Adil saeed.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top"> {/* Added 'sticky-top' class */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={img} width="250px" alt="img"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto" align="center">
            <Link className="nav-link" aria-current="page" to="/home">
              HOME
            </Link>
            <Link className="nav-link" aria-current="page" to="/categories">
              CATEGORIES
            </Link>
            <Link className="nav-link" aria-current="page" to="/services">
              SERVICES
            </Link>
            <Link className="nav-link" to="/about">
              ABOUT US
            </Link>
          </div>
          <div className="navbar-nav ms-auto" align="center">
            <Link className="nav-link" to="/contact">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

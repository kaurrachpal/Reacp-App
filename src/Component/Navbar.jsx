import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';


const Navbar = () => {
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container">
  <Link className="navbar-brand" to="/"><img src={logo} /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
       
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;
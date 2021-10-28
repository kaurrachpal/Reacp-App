import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png"


const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widgets">
                                <img src={Logo} className="img-fluid" />
                                <p>Pleasure rationally encounter consequences that extremely painful. Nor again is there</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
                        <div className="footer-widgets">
                            <h4>Quick Link</h4>
                            <ul className="footer-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-7">
                        <div className="footer-widgets">
                            <h4>Services</h4>
                            <ul className="footer-menu">
                                <li><Link to="/">Business Plan</Link></li>
                                <li><Link to="/">Creative Strategy</Link></li>
                                <li><Link to="/">Branding</Link></li>
                                <li><Link to="/">Digital Solution</Link></li>
                                <li><Link to="/">Marketing Policy</Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                        <div className="footer-widgets">
                            <h4>Contact info</h4>
                            <ul className="footer-menu">
                            <p>245 Southern Street, Apt. 147 New York, USA</p>
                                <li><Link class="address-link" to="tel:+12354569874">+12354 569 874</Link></li>
                                <li><Link class="address-link" to="tel:+98745 612 398">+98745 612 398</Link></li><br />
                                <li><Link class="address-link" to="mailto:info@example.com">info@example.com</Link></li>
                                <li><Link class="address-link" to="www.example.com">www.example.com</Link></li>
                            </ul>
                        </div>
                        </div>



                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";



const Banner = (props) => {
    console.log(props)
    return(
        <>
        <section className="Hero_banner" id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 pt-lg-0 order-2 order-lg-1 banner_content">
                        <h1>{props.name}</h1>
                        <p className="text-muted mt-4 mb-5">{props.descrption}</p>
                        <Link href={props.visit}>{props.btname}</Link>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 pt-lg-0 order-2 order-lg-1 banner_image">
                        <img src={props.imgsrc} className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Banner;
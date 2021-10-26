import React from "react";
import Img from "../assets/img/download.png";

const Headings = (props) => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="contaner_box">
                        <h2>{props.title}</h2>
                        <p className="text-muted">{props.descrption}</p>
                        <img src={Img} className="img-fluid" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Headings;
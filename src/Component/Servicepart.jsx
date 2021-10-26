import React from "react";
import { Link } from "react-router-dom";


const Servicepart = (props) => {
    return(
        <>
        
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="card-body">
        <img src={props.imgsrc} className="card_img-top" alt="...." />
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.descrption}</p>
    <Link href="#" className="btn">Learn More </Link>
  </div>
        </div>
        </>
    )
}

export default Servicepart;
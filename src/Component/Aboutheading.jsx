import React from "react";
import { Link } from "react-router-dom";


const Headings = (props) => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contaner_box">
                        <h2>{props.title}</h2>
                        <p className="abt-descrptions text-muted">{props.descrption}</p>
                        <Link to="/">View More</Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Headings;
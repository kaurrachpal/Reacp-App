import React from "react";
import Headings from "./Headings";
 

const Newslatter = () => {
    return(
        <>
        <section className="newsLatter">
            <div className="container">
                <div className="row">
                    <div className="col-7 mx-auto pb-5">
                    <Headings 
                     title="Subscribe Newsletter & get latest update" />
                    <form className="form">
                        <input type="email" id="email" placeholder="Enter Email Here" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
       

        
        </>
    )
 }

 export default Newslatter;
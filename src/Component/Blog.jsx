import React from "react";
import Headings from "../Component/Headings";
import Post from "./Post";
import Img from "../assets/img/img.png";
import Artical from "../assets/img/artical.png"
import Artical1 from "../assets/img/artical1.png"




const Blog = () => {
    return(
        <>
        <section className="BLog_inner pt-5 pb-5">
            <div className="container">
                <Headings 
                    title="Latest Post from Blog"
                    descrption="Pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain"
                />
                <div className="row py-7 mt-3">
                <Post 
                imgsrc={Img}
                    date="25 September, 2021"
                    blogtitle="Business Development Conferrence 2021"
                />
                 <Post 
                imgsrc={Artical}
                    date="20 September, 2021"
                    blogtitle="Game Development Conferrence 2021"
                />
                <Post 
                imgsrc={Artical1}
                    date="10 September, 2021"
                    blogtitle="Apps Development Conferrence 2021"
                />
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Blog;
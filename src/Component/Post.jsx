import React from "react";


const Post = (props) => {
    return(
        <>
            
                <div className="col-lg-4 col-sm-6 mt-5">
                    <div className="blog-card">
                        <img src={props.imgsrc} className="img-fluid"/>
                        <a href="/">{props.date}</a>
                        <h3><a href="/">{props.blogtitle}</a></h3>
                    </div>
                </div>
        </>
    )
}

export default Post;
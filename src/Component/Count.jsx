import React from "react";

const Count = (props) => {
    return(
        <>
            <div className="col-md-3 col-6 mb-7">
                <div className="counter">
                    <h4>{props.counttitle}</h4>
                    <h6>{props.countinfo}</h6>
                </div>
            </div>
        </>
    )
}

export default Count;
import React from "react";
import bg from "../assets/img/bg.png";
import Banner from "../Component/Banner";
import Headings from "../Component/Headings";
import Servicepart from "../Component/Servicepart";
import Sdata from "../Component/Sdata";
import { Link } from "react-router-dom";

function cardata(val){
    return(
<Servicepart
                imgsrc={val.imgsrc}
                title={val.title}
                descrption={val.descrption}
                 />
    )
}


const Home = () => {
    return(
        <>
        <Banner 
        name="Grow Your Business Google Ads & Instagram Ads" 
        imgsrc={bg} 
        visit="/about" 
        btname="Get Started"
        descrption="Vestibulum egestas magna ut aliquet sodales nunc fermentum ligula quis tidunt vitae massa."
         />
        
        <Headings 
            title="Provide Awesome Services"
            descrption="Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum mauris sit amet arcu 
                    fringilla auctor In eleifend maximus nisi sed vulputate."
        />
        <div className="container">
        <div className="row my-4">
        {Sdata.map(cardata)}

</div>
</div>

        </>
        
    );
};

export default Home;
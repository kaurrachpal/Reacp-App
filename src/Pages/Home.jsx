import React from "react";
import bg from "../assets/img/bg.png";
import Banner from "../Component/Banner";
import Headings from "../Component/Headings";
import Servicepart from "../Component/Servicepart";
import Sdata from "../Component/Sdata";
import Aboutheading from "../Component/Aboutheading";
import media from "../assets/img/media.png";
import Blog from "../Component/Blog";
import Count from "../Component/Count";


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
<section className="About_section">
<div className="container">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <Aboutheading 
                title="People, Behind the Screen"
                descrption="Pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain

Pleasure rationally encounter consequences that are extremely painful. Nor again is there"
            />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src={media} className="img-fluid" />
        </div>
    </div>
</div>

</section>
<Blog />

<section className="countdown">
    <div className="container">
        <div className="row">
            <Count 
                counttitle="1200+"
                countinfo="Projects done"
            />
             <Count 
                counttitle="2354+"
                countinfo="Happy Clients"
            />
              <Count 
                counttitle="3299+"
                countinfo="Cup Coffee"
            />
              <Count 
                counttitle="101+"
                countinfo="Award Wins"
            />
        </div>
    </div>
</section>

        </>
        
    );
};

export default Home;
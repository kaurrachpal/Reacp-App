import React from "react";
import Banner from "../Component/Banner";
import about from "../assets/img/img2.png"

const About = () => {
    return(
        <>
        <Banner 
            name="About Our Company"
            imgsrc={about}
            visit="/contact"
            btname="Contact Now"
            descrption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        </>
    );
};

export default About;
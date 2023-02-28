import React, { useState } from "react";
import "./slider.css";
import {PHOTOS} from "./photos.js"
import { ArrowLeftOutlined, ArrowRightAltOutlined } from "@material-ui/icons";
function Slider  () {
    const [slideindex , setslideindex] = useState(1);
    const handlecilck = (direction) => { 
        if(direction === "left") {
            setslideindex (slideindex > 1 ? slideindex-1 : 5)
        }else{
            setslideindex(slideindex < 5 ? slideindex+1 : 0)
        }

     };
    return (
        <div className="slider">
            <div className="left-arrow" direction="left" onClick={() => handlecilck("left")}>
                <ArrowLeftOutlined/>
            </div>
            <div className="wrapper" slideindex = {slideindex}>
                {PHOTOS.map((item) => (
                <div className="slide" image = {item.image} >
                <div className="image-container">
                <img src =  {item.image} />
                </div>
                
                
                </div>
               )) }
                
                
            </div>
            <div className="right-arrow" direction="right" onClick={() => handlecilck("right")}>
                <ArrowRightAltOutlined/>
            </div>
        </div>
    );
}
export default Slider;
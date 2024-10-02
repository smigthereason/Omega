import React from "react";
import "../styles/Sponsor.css"
import img1 from "../assets/Clip Art Ps4 Icon.png"
import img2 from "../assets/Clip Art Ps4 Icon.png"
import img3 from "../assets/Clip Art Ps4 Icon.png"
import img4 from "../assets/Clip Art Ps4 Icon.png"

const Sponsor: React.FC = () => {
  return (
    <div className="container mx-auto mt-4 rounded-lg h-80">
   <div className="slider-component">
        <div className="slider-inner">
            <div className="slide" >
              <img src={img1} alt="img1" />
            </div>
            
            <div className="slide" >
              <img src={img2} alt="img2" />
            </div>
            
            <div className="slide" >
              <img src={img3} alt="img3" />
            </div>
            
            <div className="slide" >
              <img src={img4} alt="img4" />
            </div>
            
            <div className="slide" ></div>
            
            <div className="slide" ></div>
            
            <div className="slide" ></div>
            
            <div className="slide" ></div>
            
            
        </div>
    </div>
    </div>
  );
};

export default Sponsor;

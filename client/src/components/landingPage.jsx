import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LandingPage(){
    const [imgHover,setimgHover] = useState(false)
    const handleMouseOver = () => {
        setimgHover(true);
    };
    const handleMouseOut = () => {
        setimgHover(false);
    };
    return (
        <div className='content'>
            <div className="fixed-background-LandingPage">
            <div className="overlaye"></div>

                <div className="title">
                    <img src="../Images/F1logo.svg.png" alt="" id='title'/>
                </div>
                <div className="driversCont">
                    <Link to='/homepage' >
                        <img
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            src={imgHover?"../Images/drbig.png":"../Images/drsmall.png"} 
                            id="driversImg"
                            />
                    </Link>
                </div>
            </div>
        </div>
    )
}
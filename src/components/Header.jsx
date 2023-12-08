import React from "react";
import "../static/styles/headerStyles.css"
import emailLogo from "../static/images/emailLogo.png"
const Header = () => {
    return(
        <div className="headerDiv">
                <div className="contactMe">
                    <img src={emailLogo} alt="" />
                </div>
            <div className="textHeader">
                <div className="centerDivText">
                    <h1>MartinFitS</h1>
                    <h2>FRONTEND DEVELOPER + BACKEND DEVELOPER</h2>
                    <p>Get to know me more, swipe a little:)</p>
                    <div className="drawToDown">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
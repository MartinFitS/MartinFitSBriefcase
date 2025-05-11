import React from "react";
import '../../static/styles/irislw.css'
import image from '../../static/images/teusFondoPortafolio.png'
const Teus = () => {
    return(
        <div className="cardRight">
        <div className="imageCard"><img src={image} alt="" /></div>

        <div className="textCardRightil">
            <div className="lineTextDivRigthILW">
            </div>
            <div className="tecnologiesProjectDiv">
                <p>REACT NATIVE - FASTAPI - MONGO DB</p>
            </div>

                <h1 className="irislwtext">TEUS</h1>
                <p className="otherP">An application for the logistics company Woodward, its purpose is to create a reward system for its employees, where different prizes can be redeemed.</p>


        </div>
    </div>
    )
}

export default Teus;
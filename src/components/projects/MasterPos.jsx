import React from "react";
import image from "../../static/images/MasterPos.jpg"
import "../../static/styles/MasterPos.css"
const MasterPos = () => {
    return(
        <div className="cardRight">
        <div className="imageCard"><img src={image} alt="" /></div>

        <div className="textCardRightMp">
            <div className="lineTextDivRigthMP">
            </div>
            <div className="tecnologiesProjectDiv">
                <p className="tcpmp">ELECTRON JS - NODE JS - MONGO DB </p>
            </div>

                <h1 className="h1MP">Master POS</h1>
                <h3>D E V E L O P I N G</h3>
                <p className="otherP">Point of sale made in React JS but using electron technology to make it a desktop application, nodeJS for the backend side and MYSQL as a database.</p>

                <div className="btnsMP">
                    <a className="lbn" href="">GO TO</a>
                </div>
        </div>
    </div>
    );
}

export default MasterPos;
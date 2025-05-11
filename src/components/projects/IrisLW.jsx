import React from "react";
import '../../static/styles/irislw.css'
import image from '../../static/images/irislw.png'
const IrisLW = () => {
    return(
        <div className="cardRight">
        <div className="imageCard"><img src={image} alt="" /></div>

        <div className="textCardRightil">
            <div className="lineTextDivRigthILW">
            </div>
            <div className="tecnologiesProjectDiv">
                <p>REACT JS - NEST JS - MONGO DB - ANT DESIGN - SQL SERVER</p>
            </div>

                <h1 className="irislwtext">Iris LW</h1>
                <p className="otherP">Application developed for Woodward logistics, to be able to view requests from different companies that are clients, this application is developed as a team and my focus is more on the backend.</p>


        </div>
    </div>
    )
}

export default IrisLW;
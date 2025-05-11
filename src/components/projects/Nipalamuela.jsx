import React from "react";
import "../../static/styles/Nipalamuela.css"
import image from "../../static/images/nipalamuela.jpeg"

const Nipalamuela = () => {
    return(
        <div className="cardRight">
            <div className="imageCard"><img src={image} alt="" /></div>

            <div className="textCardRight">
                <div className="lineTextDivRigth">
                </div>
                <div className="tecnologiesProjectDiv">
                    <p>REACT JS - NODE JS - MONGO DB - FIREBASE</p>
                </div>

                    <h1>Ni Pa La Muela</h1>
                    <p className="otherP">Social network and restaurant blog in the city of Manzanillo Colima created with ReactJS, which consumes an API created by myself with NodeJS and has user authentication and route protection with Firebase.</p>

                    <div className="btnsNiPaLaMuela">
                        <a className="rbn" href="https://github.com/MartinFitS/ni-pa-la-muela" target="blank">GITHUB REPO</a>
                    </div>
            </div>
        </div>
    )
}

export default Nipalamuela;
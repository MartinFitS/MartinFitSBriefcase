import React from "react";
import image from "../../static/images/lilPaRROT.jpg"
import "../../static/styles/LilParrot.css"
const LilParrot = () => {
    return(
        <div className="cardLeft">
        <div className="textCardLeft">
            <div className="lilLine">
            </div>
            <div className="tecnologiesProjectH">
                    <p>PYTHON - PYGAME</p>
                </div>
                <h1 className="plil">Lil Parrot OdySea</h1>
                <p className="pHandH">
                Educational game with a very beautiful aesthetic. The game is about caring for the sea, it has 3 levels with different gameplay and difficulties, using python and the pygame library to develop it.                    
                </p>
                

                <div className="btns">
                    <a className="rbl" target="_blank" href="https://github.com/MartinFitS/LilParrotOdy-Sea">GITHUB REPO</a>
                </div>
        </div>
        <div className="imageCard"><img src={image} alt="" /></div>
    </div>
    )
}

export default LilParrot;
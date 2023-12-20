import React from "react";
import "../../static/styles/Harmony.css"
import image from "../../static/images/imgH.jpeg"

const Harmony = () => {
    return(
        <div className="cardLeft">
            <div className="textCardLeft">
                <div className="lineTextDiv">
                </div>
                <div className="tecnologiesProjectH">
                        <p>NODE JS - MYSQL - HANDLEBARS</p>
                    </div>
                    <h1 className="hp">Harmony & Heaven</h1>
                    <p className="pHandH">
                    Web application for an inventory and point of sale focused on a musical instrument store.

Made in NodeJS, using a crud and a MYSQL database.

It has authorization and authentication of different types of users, sales statistics.
                        
                    </p>
                    

                    <div className="btns">
                        <a className="leftButtonH" href="">GO TO</a>
                        <a className="rigthButton" target="_blank" href="https://github.com/MartinFitS/HarmonyAndHeavenm">GITHUB REPO</a>
                    </div>
            </div>
            <div className="imageCard"><img src={image} alt="" /></div>
        </div>
    )
}

export default Harmony;
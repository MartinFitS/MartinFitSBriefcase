import React from "react";
import "../../static/styles/Harmony.css"
import image from "../../static/images/spikePics.webp"

const Spike = () => {
    return(
        <div className="cardLeft">
            <div className="textCardLeft">
                <div className="lineTextDiv">
                </div>
                <div className="tecnologiesProjectH">
                        <p>React Native - NodeJS - Prisma - Postgres</p>
                    </div>
                    <h1 className="hp">Spike</h1>
                    <p className="pHandH">
                    A mobile app created as a 5th semester final project, allowing you to schedule appointments with different veterinary clinics and create a veterinary clinic dashboard to manage them.
                        
                    </p>
                    

                    <div className="btns">
                        <a className="rigthButton" target="_blank" href="https://github.com/Paco-Taco/SpikeNative">GITHUB REPO</a>
                    </div>
            </div>
            <div className="imageCard"><img src={image} alt="" /></div>
        </div>
    )
}

export default Spike;
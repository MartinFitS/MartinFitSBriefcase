import image from "../../static/images/waterFIE.png"
const WaterAppFie = () => {
    return (
        <div className="cardLeft">
            <div className="textCardLeft">
                <div className="lineTextDiv">
                </div>
                <div className="tecnologiesProjectH">
                    <p>React Native - NestJS - MongoDB - LoraWan</p>
                </div>
                <h1 className="hp">WaterFIE</h1>
                <p className="pHandH">
                    A mobile app for android created like SSC project for the university, The function of the app is to be able to 
                    view in real time the water consumption in the faculty. As well as look the informastion in graphs and detailed reports, wheter its daily or monthly

                </p>
                <div className="btns">
                    <a className="rigthButton" target="_blank" href="https://arielrosasc.github.io/landing_page_appAgua/">Go to</a>
                </div>
            </div>
            <div className="imageCard"><img src={image} alt="" /></div>
        </div>
    )
}

export default WaterAppFie;
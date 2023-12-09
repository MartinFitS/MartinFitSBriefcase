import React from "react";
import "../static/styles/MyPresentation.css"
const MyPresentation = () => {
    return(
        <div className="cardPresentation">
            <div className="cardPresentationPhotosDiv">
                <div className="imagesDiv">
                    <div className="circleImages"></div>
                </div>
            </div>
            <div className="textCard">
                <h4>ABOUT ME!</h4>
                <h2>Hi, I'm Martín</h2>
                <p>Hello, how are you?, What? Who am I?. My name is Martín Serna Díaz, I am a 4th semester student studying software engineering.</p>
                <p>I am a 19-year-old young man looking for an opportunity to make his debut in the workplace.</p>
                <p>I like to learn new technologies, I have a good level of English, in addition to being handsome, strong and with a sense of humor LOL, what more could you ask for.</p>
                <button>R E S U M E</button>
            </div>
        </div>
    );
};

export default MyPresentation;
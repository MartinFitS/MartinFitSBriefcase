import React, { useState, useEffect } from "react";
import "../static/styles/MyPresentation.css";
import resumePDF from "../static/MartinSernaDiazBriefcase.pdf";
import yo from "../static/images/MartinPhoto1.png";
import yodos from "../static/images/MartinPhoto2.png";
import yotres from "../static/images/MartinPhoto3.png";

const MyPresentation = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [yo, yodos, yotres];

  const openPDF = () => {
    window.open(resumePDF, "_blank");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="cardPresentation">
      <div className="cardPresentationPhotosDiv">
        <div className="imagesDiv">
          <img src={images[imageIndex]} alt="" />
        </div>
      </div>
      <div className="textCard">
        <h4>ABOUT ME!</h4>
        <h2>Hi, I'm Martín</h2>
        <p>
          Hello, how are you?, What? Who am I?. My name is Martín Serna Díaz, I
          am a 4th semester student studying software engineering.
        </p>
        <p>
          I am a 19-year-old young man looking for an opportunity to make his
          debut in the workplace.
        </p>
        <p>
          I like to learn new technologies, I have a good level of English, in
          addition to being handsome, strong and with a sense of humor LOL, what
          more could you ask for.
        </p>
        <button onClick={openPDF}>R E S U M E</button>
      </div>
    </div>
  );
};

export default MyPresentation;

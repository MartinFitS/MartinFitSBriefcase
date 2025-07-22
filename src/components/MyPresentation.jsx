import React, { useState, useEffect } from "react";
import "../static/styles/MyPresentation.css";
import resumePDF from "../static/cv_martinSerna_updated.pdf";
import yo from "../static/images/MartinPhoto1.png";
import yodos from "../static/images/MartinPhoto2.png";

const MyPresentation = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [yo, yodos];

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
        My name is Martín Serna, and I am a Software Engineering student at the University of Colima, currently in my seventh semester. I specialize in backend development and have a strong interest in algorithm optimization and data structures.

I enjoy tackling logical challenges and solving complex problems, which is why I regularly practice on platforms like LeetCode to sharpen my skills in competitive programming and algorithmic efficiency.

I have experience working with technologies such as Node.js, TypeScript, NestJS, as well as both relational and non-relational databases. I’ve contributed to projects where I developed RESTful APIs, applying best practices in design, security, and performance.

I am currently seeking an internship opportunity at a company that values continuous learning and technical excellence—where I can contribute my knowledge, gain real-world experience, and grow alongside passionate professionals.
        </p>

        <button onClick={openPDF}>R E S U M E</button>
      </div>
    </div>
  );
};

export default MyPresentation;

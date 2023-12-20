import React, { useState } from "react";
import "../static/styles/Contacts.css";
import Formulario from "./Formulario";

const Contacts = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(true);
    };

    return (
        <div className="divContact">
            <h1>C O N T A C T</h1>
            <h3>You Like What You See?</h3>
            <p>Send me an email, I know we can achieve great things together :D</p>
            <button className="btn_email"onClick={handleButtonClick}>SEND ME AN EMAIL</button>
            {isVisible && <Formulario setIsVisible={setIsVisible} />}
        </div>
    );
};

export default Contacts;

import React from "react";
import htmlLogo from "../static/images/002-html-5.png";
import cssLogo from "../static/images/003-css-3.png";
import jsLogo from "../static/images/001-js.png";
import reactLogo from "../static/images/reactLogo.png"
import nodeLogo from "../static/images/nodeJsLogo.png"
import pythonLogo from "../static/images/pythonLogo.png";
import mongoDbLogo from "../static/images/mongoDbLogo.png";
import mysqlLogo from "../static/images/mysqlLogo.png";
import firebaseLogo from "../static/images/firebaseLogo.png"
import "../static/stylesTecnologies.css"
const Tecnologies = () => {
    return(
        <div className="skillsSection">
            <h1>T E C N O L O G I E S</h1>
            <div className="imagesTecnologies">
                <ul>
                    <li><img src={htmlLogo} alt="" /><p>HTML 5</p></li>
                    <li><img src={cssLogo} alt="" /><p>CSS 3</p></li>
                    <li><img src={jsLogo} alt="" /><p>JavaScript</p></li>
                    <li><img src={reactLogo} alt="" /><p>React JS</p></li>
                    <li><img src={nodeLogo} alt="" /><p>Node JS</p></li>
                    <li><img src={pythonLogo} alt="" /><p>Python</p></li>
                    <li><img src={mongoDbLogo} alt="" /><p>MongoDB</p></li>
                    <li><img src={mysqlLogo} alt="" /><p>Mysql</p></li>
                    <li><img src={firebaseLogo} alt="" /><p>FireBase</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Tecnologies;
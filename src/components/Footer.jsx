import React from "react";
import "../static/styles/Footer.css"
import githubLogo from "../static/images/image (2).png"
import linkedinLogo from "../static/images/image (3).png"
import igLogo from "../static/images/image (4).png"
const Footer = () => {
    return(
        <div className="footerDiv">
            <div className="developedText">
                <p>Developed by @MartinFitS</p>
                <p>Inspired by @codeTurkie design</p>
            </div>
            <div className="socialMedia">
                <ul className="socialMediaUl">
                    <li><a href="https://github.com/MartinFitS" target="blank"><img src={githubLogo} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/mart%C3%ADn-serna-807000228/" target="blank"><img src={linkedinLogo} alt="" /></a></li>
                    <li><a href="https://www.instagram.com/mserna10/" target="blank"><img src={igLogo} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
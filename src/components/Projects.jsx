import React from "react";
import Harmony from "./projects/Harmony";
import Nipalamuela from "./projects/Nipalamuela";
import LilParrot from "./projects/LilParrot";
import MasterPos from "./projects/MasterPos";
import IrisLW from "./projects/IrisLW";
import "../static/styles/Projects.css"
const Projects = () => {
    return(
        <div className="projectsSection">
            <div className="projectTitle">
                <h3>P R O J E C T S</h3>
                <h4>20 years existing, 3 years programming!</h4>
            </div>

            <div className="galleryProjects">
                <IrisLW/>
                <MasterPos/>
                <Harmony/>
                <Nipalamuela/>
                <LilParrot/>
            </div>
        </div>
    )
}

export default Projects;
import React from "react";
import Harmony from "./projects/Harmony";
import Nipalamuela from "./projects/Nipalamuela";
import LilParrot from "./projects/LilParrot";
import Spike from "./projects/Spike"
import IrisLW from "./projects/IrisLW";
import Teus from "./projects/Teus";
import "../static/styles/Projects.css"
const Projects = () => {
    return(
        <div className="projectsSection">
            <div className="projectTitle">
                <h3>P R O J E C T S</h3>
                <h4>21 years existing, 5 years programming!</h4>
            </div>

            <div className="galleryProjects">
                <Teus/>
                <Spike/>
                <IrisLW/>
                <Harmony/>
                <Nipalamuela/>
                <LilParrot/>
            </div>
        </div>
    )
}

export default Projects;
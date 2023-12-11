import React from "react";
import Harmony from "./projects/Harmony";
import Nipalamuela from "./projects/Nipalamuela";
import LilParrot from "./projects/LilParrot";
import "../static/styles/Projects.css"
const Projects = () => {
    return(
        <div className="projectsSection">
            <div className="projectTitle">
                <h3>P R O J E C T S</h3>
                <h4>19 years existing, 2 years programming!</h4>
            </div>

            <div className="galleryProjects">
                <Harmony/>
                <Nipalamuela/>
                <LilParrot/>
            </div>
        </div>
    )
}

export default Projects;
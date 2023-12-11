import React from "react";
import Header from "../components/Header"
import MyPresentation from "../components/MyPresentation";
import Tecnologies from "../components/Tecnologies";
import Projects from "../components/Projects";
const IndexPage = () => {
    return(
        <React.Fragment>
            <Header/>
            <MyPresentation/>
            <Tecnologies/>
            <Projects/>
        </React.Fragment>
    )
}

export default IndexPage;
import React from "react";
import Header from "../components/Header"
import MyPresentation from "../components/MyPresentation";
import Tecnologies from "../components/Tecnologies";
const IndexPage = () => {
    return(
        <React.Fragment>
            <Header/>
            <MyPresentation/>
            <Tecnologies/>
        </React.Fragment>
    )
}

export default IndexPage;
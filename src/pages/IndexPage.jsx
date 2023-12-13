import React from "react";
import Header from "../components/Header"
import MyPresentation from "../components/MyPresentation";
import Tecnologies from "../components/Tecnologies";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const IndexPage = () => {
    return(
        <React.Fragment>
            <Header/>
            <MyPresentation/>
            <Tecnologies/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </React.Fragment>
    )
}

export default IndexPage;
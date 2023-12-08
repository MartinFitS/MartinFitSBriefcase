import {BrowserRouter,Routes,Route} from "react-router-dom";
import IndexPage from "../pages/IndexPage.jsx"
export function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/MartinFitSBriefcase" element={<IndexPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
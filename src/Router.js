import React from "react";
import Home from "./components/Home";
import { Nav } from "./components/nav";
import App from "./components/product.js";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function RouterFunction() {
    
    return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/app" element={<App/>}/>
            </Routes>
            <Footer/>
     
        </Router>
    )
}
export default RouterFunction;
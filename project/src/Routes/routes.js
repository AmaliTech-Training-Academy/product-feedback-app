import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";


function ProductApp(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </>

    );


}

export default ProductApp
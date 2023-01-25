import React, { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeedbackDetails from "../Pages/FeedbackDetails/FeedbackDetails";


function ProductApp(){
    const [item, setItem] = useState({})
    return(
        <>
            <Routes>
                <Route path='/' element={<Home setItem={setItem}/>} />
                <Route path='/feedback-details' element={<FeedbackDetails item={item}/>} />
            </Routes>
      {/* <Feedback /> */}
        </>

    );


}

export default ProductApp
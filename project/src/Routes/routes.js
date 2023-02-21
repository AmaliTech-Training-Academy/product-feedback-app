import React, { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeedbackDetails from "../Pages/FeedbackDetails/FeedbackDetails";
import Feedback from "../Pages/Feedback/Feedback";
import EditFeedback from "../Pages/Edit Feedback/EditFeedback";
import Plan from '../Pages/roadmap/roadmap'
import MobileNav from '../Components/Header/Mobile nav/MobileNav'


function ProductApp(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/suggestion" element={<Home/>}/>
            <Route path="/feedback-detail/:id" element={<FeedbackDetails />}/>
            <Route path="/new-feedback" element={<Feedback />}/>
            <Route path="/edit-feedback/:id" element={<EditFeedback />}/>
            <Route path="/roadmap" element={<Plan />}/>
        </Routes>
        </>
    );
}

export default ProductApp
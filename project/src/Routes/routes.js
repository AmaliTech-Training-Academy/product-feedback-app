import React, { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeedbackDetails from "../Pages/FeedbackDetails/FeedbackDetails";
import Feedback from "../Pages/Feedback/Feedback";
import EditFeedback from "../Pages/Edit Feedback/EditFeedback";
import SuggestionHome from "../Pages/Home/SuggestionHome";
import FeedbackDetails from "../Pages/Home/FeedbackDetails/FeedbackDetails";
import Plan from "../Pages/roadmap/roadmap";


function ProductApp(){
    const [item, setItem] = useState({})
    return(
        <>
        <Routes>
            <Route path="/" element={<Home setItem={setItem}/>}/>
            <Route path="/suggestion" element={<SuggestionHome/>}/>
            <Route path="/feedback-detail" element={<FeedbackDetails item={item}/>}/>
            <Route path="/new-feedback" element={<Feedback/>}/>
            <Route path="/edit-feedback" element={<EditFeedback/>}/>
            <Route path="/roadmap" element={<Plan/>}/>
        </Routes>
        </>
    );


}

export default ProductApp
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "../Pages/Feedback/Feedback";
import Home from "../Pages/Home/Home";
import EditFeedback from "../Pages/Edit Feedback/EditFeedback";
import SuggestionHome from "../Pages/Home/SuggestionHome";
import FeedbackDetails from "../Pages/Home/FeedbackDetails/FeedbackDetails";
import { RoadMap } from "../Components/Sidebar/SidebarStyles";


function ProductApp(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/suggestion" element={<SuggestionHome/>}/>
            <Route path="/feedback-detail" element={<FeedbackDetails/>}/>
            <Route path="/new-feedback" element={<Feedback/>}/>
            <Route path="/edit-feedback" element={<EditFeedback/>}/>
            <Route path="/roadmap" element={<RoadMap/>}/>
        </Routes>
        </>
    );


}

export default ProductApp
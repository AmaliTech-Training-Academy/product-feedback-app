import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeedbackDetails from "../Pages/FeedbackDetails/FeedbackDetails";
import Feedback from "../Pages/Feedback/Feedback";
import EditFeedback from "../Pages/Edit Feedback/EditFeedback";
import SuggestionHome from "../Pages/Home/SuggestionHome";
import { RoadMap } from "../Components/Sidebar/SidebarStyles";
// import MobileNav from '../Components/Header/Mobile nav/MobileNav'


function ProductApp(){
    return(
        <>
        <Routes>
            <Route path="/" element={
                <>
                    <MobileNav />
                    <Home />
                </>
            }/>
            <Route path="/suggestion" element={<SuggestionHome/>}/>
            <Route path="/feedback-detail/:id" element={<FeedbackDetails/>}/>
            <Route path="/new-feedback" element={<Feedback/>}/>
            <Route path="/edit-feedback" element={<EditFeedback/>}/>
            <Route path="/roadmap" element={<Plan />}/>
        </Routes>
        </>
    );
}

export default ProductApp
import React, { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeedbackDetails from "../Pages/FeedbackDetails/FeedbackDetails";
import Feedback from "../Pages/Feedback/Feedback";
import EditFeedback from "../Pages/Edit Feedback/EditFeedback";
import Plan from '../Pages/roadmap/roadmap'
import MobileNav from '../Components/Header/Mobile nav/MobileNav'


function ProductApp(){
    const [id, setId] = useState('')
    const [roadId,setRoadId] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    return(
        <>
        <Routes>
            <Route path="/" element={
                <>
                    <MobileNav setSelectedCategory={setSelectedCategory}/>
                    <Home selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </>
            }/>
            <Route path="/suggestion" element={<Home/>}/>
            <Route path="/feedback-detail/:id" element={<FeedbackDetails setId={setId}/>}/>
            <Route path="/new-feedback" element={<Feedback />}/>
            <Route path="/edit-feedback" element={<EditFeedback id={id}/>}/>
            <Route path="/roadmap" element={<Plan setRoad={setRoadId} />}/>
        </Routes>
        </>
    );
}

export default ProductApp
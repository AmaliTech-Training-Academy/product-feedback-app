import React, { useState } from 'react';
import { Routes, Route } from 'react-router'
import './App.css';
// import Home from './Pages/Home/Home'; 
import SuggestionHome from './Pages/Home/SuggestionHome';
import Feedback from './Pages/Feedback/Feedback'
import MobileNav from './Components/Header/Mobile nav/MobileNav';

function App() {
  const [item, setItem] = useState(null)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setItem={setItem}/>} />
        <Route path='/feedback-details' element={<FeedbackDetails item={item}/>} />
      </Routes>
      <Feedback />
    </div>
  );
}

export default App;

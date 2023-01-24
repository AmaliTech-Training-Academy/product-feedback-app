import React, { useState } from 'react';
import { Routes, Route } from 'react-router'
import './App.css';
import Feedback from './Pages/Feedback/Feedback';
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';
import Home from './Pages/Home/Home'

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

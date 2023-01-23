import React from 'react';
import './App.css';
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';
// import Feedback from './Pages/Feedback/Feedback'
import Home from './Pages/Home/Home'


function App() {
  return (
    <div className="App">
      {/* <Feedback />
      <Feedback type='Edit' /> */}
      <FeedbackDetails/>
      <Home />
    </div>
  );
}

export default App;

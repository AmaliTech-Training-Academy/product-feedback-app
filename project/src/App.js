import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';
// import Feedback from './Pages/Feedback/Feedback'
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';

function App() {
  return (
    <div className="App">
      {/* <Feedback /> */}
      <Header />
      {/* <Feedback />
      <Feedback type='Edit' /> */}
      <FeedbackDetails/>
      <FeedbackDetails/>

      
      
    </div>
  );
}

export default App;

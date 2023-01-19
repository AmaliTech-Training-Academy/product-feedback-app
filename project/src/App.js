import React from 'react';
import './App.css';
import EditFeedback from './Pages/Edit Feedback/EditFeedback';
import Header from './Components/Header/Header';
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';
// import Feedback from './Pages/Feedback/Feedback'
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';

function App() {
  return (
    <div className="App">
      <EditFeedback />
      {/* <Feedback />
      <Feedback type='Edit' /> */}
      <FeedbackDetails/>
      <FeedbackDetails/>

      
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import MobileNav from './Components/Header/Mobile nav/MobileNav';
// import EditFeedback from './Pages/Edit Feedback/EditFeedback';
import Feedback from './Pages/Feedback/Feedback';
import EditFeedback from './Pages/Edit Feedback/EditFeedback';
import Header from './Components/Header/Header';
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';
// import Feedback from './Pages/Feedback/Feedback'
import FeedbackDetails from './Pages/Home/FeedbackDetails/FeedbackDetails';
import EditFeedback from './Pages/Edit Feedback/EditFeedback';
import MobileNav from './Components/Header/Mobile nav/MobileNav';
// import EditFeedback from './Pages/Edit Feedback/EditFeedback';
import Feedback from './Pages/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      {/* <EditFeedback /> */}
      {/* <MobileNav /> */}
      <Feedback />
      <EditFeedback />
      {/* <Feedback />
      <Feedback type='Edit' /> */}
      <FeedbackDetails/>
      <FeedbackDetails/>

      
      
      <EditFeedback />
      {/* <EditFeedback /> */}
      {/* <MobileNav /> */}
      <Feedback />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import MobileNav from './Components/Header/Mobile nav/MobileNav';
// import EditFeedback from './Pages/Edit Feedback/EditFeedback';
import Feedback from './Pages/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      {/* <EditFeedback /> */}
      {/* <MobileNav /> */}
      <Feedback />
    </div>
  );
}

export default App;

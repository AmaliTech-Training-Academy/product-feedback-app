import React from 'react';
import './App.css';

import Home from './Pages/Home/Home'; 
import SuggestionHome from './Pages/Home/SuggestionHome';
// import Feedback from './Pages/Feedback/Feedback'
import Feedback from './Pages/Feedback/Feedback'

function App() {
  return (
    <div className="App">
      {/* <Feedback /> */}
      {/* <Home />  */}
      <SuggestionHome />
      <Home /> 
      {/* <SuggestionHome /> */}

      <Feedback />
      <Feedback type='Edit' />
    </div>
  );
}

export default App;

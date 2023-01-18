import React from 'react';
import './App.css';
import Feedback from './Pages/Feedback/Feedback'

function App() {
  return (
    <div className="App">
      <Feedback />
      <Feedback type='Edit' />
    </div>
  );
}

export default App;

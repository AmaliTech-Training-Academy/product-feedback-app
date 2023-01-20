import React from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Suggestions from '../../Components/Suggestions/Suggestions'


function SuggestionHome() {
  return (
    <div className='main-page'>
      <Sidebar /> 
      <div>
        <Header />
        <Suggestions />
      </div>
   </div>
  )
}

export default SuggestionHome
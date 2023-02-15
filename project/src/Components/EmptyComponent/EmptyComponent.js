import React from 'react'
import './EmptyComponentStyles.css'
import { Link } from 'react-router-dom'


function EmptyComponent() {
  return (
    <div className='empty-page'>
      <div className='empty-page-component'>
        <img src='./assets/suggestions/illustration-empty.svg' alt=''/>
        <div className='text-container'>
          <span className='h1'>There is no feedback yet.</span>
          <span className='body-1'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</span>
          <Link to='/new-feedback'> 
            <button className='button-1-default empty-feed'>+ Add Feedback</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyComponent
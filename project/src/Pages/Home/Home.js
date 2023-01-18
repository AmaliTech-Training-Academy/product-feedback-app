import React from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Home() {
  return (
    <div className='main-page'>
      <Sidebar /> 
      {/* <section className='sidebar'></section> */}
      <div>
        <Header />
        {/* <header className='header'></header> */}
        <div className='empty-page'>
          <div className='empty-page-component'>
            <img src='./assets/suggestions/illustration-empty.svg'/>
            <div className='text-container'>
              <span className='h1'>There is no feedback yet.</span>
              <span className='body-1'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</span>
              <button className='button-1-default empty'>+ Add Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
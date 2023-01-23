import React from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'

function Home() {
  return (
    <div className='main-page'>
      <Sidebar /> 
      <div>
        <Header />
        <EmptyComponent />
      </div>
    </div>
  )
}

export default Home
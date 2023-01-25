import React, { useEffect, useState } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'



function Suggestions() {
  return (
  <SuggestionContainer >
    <div className="suggestion-board">
      <div className="right-components">
        <div className="top-arrow">
          <img src="./assets/shared/icon-arrow-up.svg" alt=''/>
          {/* <span>{item.upvotes}</span> */}
          <span>112</span> 
        </div>
        <div className="text">
          {/* <span className='h3'>{item.title}</span> */}
          <span className='h3'>Add tags for solutions</span>
          {/* <span className='body-1'>{item.description}</span> */}
          <span className='body-1'>Easier to search for solutions based on a specific stack.</span>
          {/* <Enhancement>{item.category[0].toUpperCase() + item.category.slice(1)}</Enhancement> */}
          <Enhancement> Enhancement </Enhancement>
        </div>
      </div>
      <div className="left-components">
        <img src="./assets/shared/icon-comments.svg" alt=''/>
        <span>2</span>
        {/* <span>{item.comments ? item.comments.length : '0'}</span> */}
      </div>
    </div>
  </SuggestionContainer>
  )
}

export default Suggestions
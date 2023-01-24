import React, { useEffect, useState } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'



function Suggestions({title, category, status, upvote, description}) {
  return (
  <SuggestionContainer >
    <div className="suggestion-board">
      <div className="right-components">
        <div className="top-arrow">
          <img src="./assets/shared/icon-arrow-up.svg" alt=''/>
          <span>{upvote}</span>
        </div>
        <div className="text">
          <span className='h3'>{title}</span>
          <span className='body-1'>{description}</span>
          <Enhancement>{category[0].toUpperCase() + category.slice(1)}</Enhancement>
        </div>
      </div>
      <div className="left-components">
        <img src="./assets/shared/icon-comments.svg" alt=''/>
        <span>2</span>
        {/* <span>{comments ? comments.length : '0'}</span> */}
      </div>
    </div>
  </SuggestionContainer>
  )
}

export default Suggestions
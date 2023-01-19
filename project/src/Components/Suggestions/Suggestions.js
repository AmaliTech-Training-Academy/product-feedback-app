import React from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'

function Suggestions() {
  return (
    <SuggestionContainer>
      <div className="suggestion-board">
        <div className="right-components">
          <div className="top-arrow">
            <img src="./assets/shared/icon-arrow-up.svg"/>
            <span>112</span>
          </div>
          <div className="text">
            <span className='h3'> Add tags for solutions.</span>
            <span className='body-1'> Easier to search for solutions based on a specific stack.</span>
            <Enhancement>Enhancement</Enhancement>
          </div>
        </div>

      </div>
    </SuggestionContainer>
  )
}

export default Suggestions
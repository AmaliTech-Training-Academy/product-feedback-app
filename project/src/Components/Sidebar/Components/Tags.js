import React, { useState } from 'react'
import { Tag, All, UI, UX, Enhancement, Bug, Feature } from '../SidebarStyles'

function Tags() {
  const [isClicked, setIsClicked] = useState('All')
  return (
    <Tag>
      <div className='tag-container'>
        <div className='upper-tag'>
          <All type={isClicked} onClick={() => setIsClicked('All')}>
            All
          </All>
          <UI type={isClicked} onClick={() => setIsClicked('UI')}>
            UI
          </UI>
          <UX type={isClicked} onClick={() => setIsClicked('UX')}>
            UX
          </UX>
        </div>
        <div className='middle-tag'>
          <Enhancement type={isClicked} onClick={() => setIsClicked('Enhancement')}>
            Enhancement
          </Enhancement>
          <Bug type={isClicked} onClick={() => setIsClicked('Bug')}>
            Bug
          </Bug>
        </div>
        <Feature type={isClicked} onClick={() => setIsClicked('Feature')}>
          Feature
        </Feature>
      </div>
    </Tag>
  )
}

export default Tags
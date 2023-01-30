import axios from 'axios'
import React, { useState } from 'react'
import { Tag, All, UI, UX, Enhancement, Bug, Feature } from '../SidebarStyles'

function Tags({data, setData}) {
  const [isClicked, setIsClicked] = useState('All');

  const handleUIClick = (category) => {
    setIsClicked(category);
    setData(category);
  }
  return (
    <Tag>
      <div className='tag-container'>
        <div className='upper-tag'>
          <All type={isClicked} onClick={() => handleUIClick('All')}>
            All
          </All>
          <UI type={isClicked} onClick={() => handleUIClick('UI')}>
            UI
          </UI>
          <UX type={isClicked} onClick={() => handleUIClick('UX')}>
            UX
          </UX>
        </div>
        <div className='middle-tag'>
          <Enhancement type={isClicked} onClick={() => handleUIClick('Enhancement')}>
            Enhancement
          </Enhancement>
          <Bug type={isClicked} onClick={() => handleUIClick('Bug')}>
            Bug
          </Bug>
        </div>
        <Feature type={isClicked} onClick={() => handleUIClick('Feature')}>
          Feature
        </Feature>
      </div>
    </Tag>
  )
}

export default Tags
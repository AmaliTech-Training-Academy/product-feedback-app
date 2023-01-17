import React from 'react'
import { Tag, All, UI, UX, Enhancement, Bug, Feature } from '../SidebarStyles'

function Tags() {
  return (
    <Tag>
      <div className='tag-container'>
        <div className='upper-tag'>
          <All>
            All
          </All>
          <UI>
            UI
          </UI>
          <UX>
            UX
          </UX>
        </div>
        <div className='middle-tag'>
          <Enhancement>
            Enhancement
          </Enhancement>
          <Bug>
            Bug
          </Bug>
        </div>
        <Feature>
          Feature
        </Feature>
      </div>
    </Tag>
  )
}

export default Tags
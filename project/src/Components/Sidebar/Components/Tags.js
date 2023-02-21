import React, { useState } from 'react'
import { Tag, All, UI, UX, Enhancement, Bug, Feature } from '../SidebarStyles'
import { open, close } from '../../../features/mobileNav/mobileNavSlice'
import { sortCategory } from '../../../features/feedback/feedbackSlice'
import { useSelector, useDispatch } from 'react-redux'


function Tags({setSelectedCategory}) {
  const [isClicked, setIsClicked] = useState('All')
  const { isOpen } = useSelector(state => state.mobileNav)
  // const { feedbackItems } = useSelector(state => state.feedback)
  const dispatch = useDispatch()

  const handleClick = (value) => {
    setIsClicked(value)
    dispatch(sortCategory(value))
    // setSelectedCategory(value.toLowerCase())
    if(isOpen) {
      dispatch(close())
    }
    else {
      dispatch(open())
    }
  }
  return (
    <Tag>
      <div className='tag-container'>
        <div className='upper-tag'>
          <All type={isClicked} onClick={() => handleClick('All')}>
            All
          </All>
          <UI type={isClicked} onClick={() => handleClick('UI')}>
            UI
          </UI>
          <UX type={isClicked} onClick={() => handleClick('UX')}>
            UX
          </UX>
        </div>
        <div className='middle-tag'>
          <Enhancement type={isClicked} onClick={() => handleClick('Enhancement')}>
            Enhancement
          </Enhancement>
          <Bug type={isClicked} onClick={() => handleClick('Bug')}>
            Bug
          </Bug>
        </div>
        <Feature type={isClicked} onClick={() => handleClick('Feature')}>
          Feature
        </Feature>
      </div>
    </Tag>
  )
}

export default Tags
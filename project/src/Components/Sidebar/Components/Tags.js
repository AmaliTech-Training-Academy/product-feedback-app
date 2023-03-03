import React, { useState } from 'react'
import { Tag, All, UI, UX, Enhancement, Bug, Feature } from '../SidebarStyles'
import { open, close } from '../../../features/mobileNav/mobileNavSlice'
import { sortCategory, changeSelectedCategory } from '../../../features/feedback/feedbackSlice'
import { useSelector, useDispatch } from 'react-redux'


function Tags() {
  // const [isClicked, setIsClicked] = useState('All')
  const { categorySelected } = useSelector(state => state.feedback)
  const { isOpen } = useSelector(state => state.mobileNav)
  const dispatch = useDispatch()

  console.log(categorySelected)

  const handleClick = (value) => {
    dispatch(changeSelectedCategory(value))
    // setIsClicked(value)
    dispatch(sortCategory(value))
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
          <All type={categorySelected} onClick={() => handleClick('All')}>
            All
          </All>
          <UI type={categorySelected} onClick={() => handleClick('UI')}>
            UI
          </UI>
          <UX type={categorySelected} onClick={() => handleClick('UX')}>
            UX
          </UX>
        </div>
        <div className='middle-tag'>
          <Enhancement type={categorySelected} onClick={() => handleClick('Enhancement')}>
            Enhancement
          </Enhancement>
          <Bug type={categorySelected} onClick={() => handleClick('Bug')}>
            Bug
          </Bug>
        </div>
        <Feature type={categorySelected} onClick={() => handleClick('Feature')}>
          Feature
        </Feature>
      </div>
    </Tag>
  )
}

export default Tags
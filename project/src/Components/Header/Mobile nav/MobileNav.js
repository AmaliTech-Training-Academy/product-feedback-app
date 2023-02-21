import React, { useState } from 'react'
import Roadmap from '../../Sidebar/Components/Roadmap'
import Tags from '../../Sidebar/Components/Tags'
import { Container } from './MobileNavStyles'
import { useSelector, useDispatch } from 'react-redux'
import { open, close } from '../../../features/mobileNav/mobileNavSlice'

function MobileNav({ setSelectedCategory, filteredData }) {
  const { isOpen } = useSelector(state => state.mobileNav)
  const dispatch = useDispatch()
  // const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if(isOpen) {
      dispatch(close())
    }
    else {
      dispatch(open())
    }
  }
  return (
    <Container>
        <div className='topic'>
          <span className='title'>Frontend Mentor</span>
          <span className='subtitle'>Feedback Board</span>
        </div>
        <img src={`${isOpen ? './assets/shared/mobile/icon-close.svg' : './assets/shared/mobile/icon-hamburger.svg'}`} alt='' onClick={handleClick}/>
        {isOpen && <div className='pop-up' onClick={handleClick}>
         <div className='menu'>
            <Tags setSelectedCategory={setSelectedCategory}/>
            <Roadmap filteredData={filteredData} />
          </div>
        </div>}
    </Container>
  )
}

export default MobileNav
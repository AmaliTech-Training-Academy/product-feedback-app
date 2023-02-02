import React, { useState } from 'react'
import Roadmap from '../../Sidebar/Components/Roadmap'
import Tags from '../../Sidebar/Components/Tags'
import {
    Container
} from './MobileNavStyles'

function MobileNav({ setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
        <div className='topic'>
          <span className='title'>Frontend Mentor</span>
          <span className='subtitle'>Feedback Board</span>
        </div>
        <img src={`${isOpen ? './assets/shared/mobile/icon-close.svg' : './assets/shared/mobile/icon-hamburger.svg'}`} alt='' onClick={() => setIsOpen(!isOpen)} />
        {isOpen && <div className='pop-up'>
         <div className='menu'>
            <Tags setSelectedCategory={setSelectedCategory} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Roadmap />
          </div>
        </div>}
    </Container>
  )
}

export default MobileNav
import React from 'react'
import Roadmap from '../../Sidebar/Components/Roadmap'
import Tags from '../../Sidebar/Components/Tags'
import {
    Container
} from './MobileNavStyles'

function MobileNav() {
  return (
    <Container>
        <div className='topic'>
          <span className='title'>Frontend Mentor</span>
          <span className='subtitle'>Feedback Board</span>
        </div>
        <img src='./assets/shared/mobile/icon-hamburger.svg' alt='' />
        <div className='pop-up'>
          <div className='menu'>
            <Tags />
            <Roadmap />
          </div>
        </div>
    </Container>
  )
}

export default MobileNav
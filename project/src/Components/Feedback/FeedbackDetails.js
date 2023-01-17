import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackTitle() {
  return (
    <Container>
        <span className='h4 title'>Feedback Details</span>
        <span className='h4 description'>Include any specific comments on what should be improved, added, etc.</span>
        <div contenteditable="true" className='input details'>
            {/* <span className='body-2 placeholder'>Feature</span>
            <img className='down-arrow' src='./assets/shared/icon-arrow-down.svg' alt='' /> */}
        </div>
    </Container>
  )
}

export default FeedbackTitle
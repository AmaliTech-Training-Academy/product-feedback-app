import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackTitle() {
  return (
    <Container>
        <span className='h4 title'>Feedback Title</span>
        <span className='h4 description'>Add a short, descriptive headline</span>
        <div contenteditable="true" className='input'>
            {/* <span className='body-2 placeholder'>Feature</span>
            <img className='down-arrow' src='./assets/shared/icon-arrow-down.svg' alt='' /> */}
        </div>
    </Container>
  )
}

export default FeedbackTitle
import React from 'react'
import {
    Nav,
} from './FeedbackStyles'

function FeedbackHead() {
  return (
    <Nav>
      <img src='./assets/shared/icon-arrow-left.svg' alt='' />
      <span className='h4 back'>Go Back</span>
    </Nav>
  )
}

export default FeedbackHead
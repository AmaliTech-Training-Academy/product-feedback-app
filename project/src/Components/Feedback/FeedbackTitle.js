import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackTitle() {
  return (
    <Container>
        <span className='h4 title'>Feedback Title</span>
        <span className='h4 description'>Add a short, descriptive headline</span>
        <input className='input' type='text' />
    </Container>
  )
}

export default FeedbackTitle
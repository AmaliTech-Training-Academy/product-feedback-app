import React from 'react'
import {
    Container
} from './FeedbackStyles'

function Details() {
  return (
    <Container type='details'>
        <span className='h4 title'>Feedback Details</span>
        <span className='h4 description'>Include any specific comments on what should be improved, added, etc.</span>
        <textarea type='text' className='input details' />
    </Container>
  )
}

export default Details
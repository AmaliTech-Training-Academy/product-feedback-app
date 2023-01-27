import React from 'react'
import {
    Container
} from './FeedbackStyles'

function Details({value, error}) {
  const getDetails = (e) => {
    value(e.target.value)
  }
  return (
    <Container type='details' error={error}>
        <span className='h4 title'>Feedback Details</span>
        <span className='h4 description'>Include any specific comments on what should be improved, added, etc.</span>
        <textarea type='text' className='input details' onChange={getDetails}/>
    </Container>
  )
}

export default Details
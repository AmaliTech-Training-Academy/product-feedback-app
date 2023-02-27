import React from 'react'
import {Container} from './FeedbackStyles'

function Details({value, getDetailsValue, error}) {
  const getDetails = (e) => {
    getDetailsValue(e.target.value)
  }
  return (
    <Container type='details' error={error}>
        <span className='h4 title'>Feedback Details</span>
        <span className='h4 description'>Include any specific comments on what should be improved, added, etc.</span>
        <textarea type='text' className='input details' value={value} onChange={getDetails}/>
    </Container>
  )
}

export default Details
import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackTitle({value, error}) {
  const titleValue = (e) => {
    value(e.target.value)
  }
  return (
    <Container error={error}>
        <span className='h4 title'>Feedback Title</span>
        <span className='h4 description'>Add a short, descriptive headline</span>
        <input className='input' type='text' name='title' onChange={titleValue} onClick={() => props.setTitleError(false)}/>
    </Container>
  )
}

export default FeedbackTitle
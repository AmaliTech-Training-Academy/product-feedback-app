import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackTitle(props) {
  const titleValue = (e) => {
    props.value(e.target.value)
  }
  return (
    <Container>
        <span className='h4 title'>Feedback Title</span>
        <span className='h4 description'>Add a short, descriptive headline</span>
        <input className='input' type='text' name='title' onChange={titleValue}/>
    </Container>
  )
}

export default FeedbackTitle
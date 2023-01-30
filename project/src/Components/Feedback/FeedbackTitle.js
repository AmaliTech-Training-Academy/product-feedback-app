import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackTitle({value, getTitleValue, error}) {
  // const [inputValue, setInputValue] = useState('')
  const titleValue = (e) => {
    getTitleValue(e.target.value)
    // setInputValue(e.target.value)
  }

  // const handleClick = () => {
  //   setInputValue('')
  // }

  return (
    <Container error={error}>
        <span className='h4 title'>Feedback Title</span>
        <span className='h4 description'>Add a short, descriptive headline</span>
        <input className='input' type='text' name='title'value={value} onChange={titleValue} />
    </Container>
  )
}

export default FeedbackTitle
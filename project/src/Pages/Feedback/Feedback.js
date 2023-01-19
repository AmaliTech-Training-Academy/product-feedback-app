import React, { useState } from 'react'
import FeedbackCategory from '../../Components/Feedback/FeedbackCategory'
import FeedbackHead from '../../Components/Feedback/FeedbackHead'
import FeedbackTitle from '../../Components/Feedback/FeedbackTitle'
import UpdateStatus from '../../Components/Feedback/UpdateStatus'
import Details from '../../Components/Feedback/Details'
import axios from 'axios'
import {
    Container
} from './FeedbackStyles'

function Feedback(props) {
  const [option, setOption] = useState('Feature')
  const [detailOption, setDetailOption] = useState('Suggestion')
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const getTitleValue = (value) => {
    setTitle(value)
  }

  const getDetailsValue = (details) => {
    setDetails(details)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (props.type === 'Edit') { 
      axios.post('http://localhost:8000/feedback', {
        title: title,
        category: option,
        status: detailOption,
        detail: details
      })
      .catch((e) => {
        console.log(e)
      })
    }
    axios.get('http://localhost:8000/feedback')
      .then(response => {
        console.log(response)
      })
  }

  return (
    <Container type={props.type}>
        <FeedbackHead />
        <form className='content'>
          <img src={props.type === 'Edit' ? './assets/shared/icon-edit-feedback.svg' : './assets/shared/icon-new-feedback.svg'} alt='' className='plus' />
          <span className='h1 head'>{props.type === 'Edit' ? 'Editing ‘Add a dark theme option’' : 'Create New Feedback' }</span>
          <FeedbackTitle value= {getTitleValue}/>
          <FeedbackCategory option={option} setOption={setOption}/>
          {props.type === 'Edit' && <UpdateStatus detailOption={detailOption} setDetailOption={setDetailOption}/>}
          <Details value={getDetailsValue} />
          <div className='buttons'>
            {(props.type === 'Edit') && <button className='button-4-default delete'>Delete</button>}
            <button className='button-3-default cancel'>Cancel</button>
            <button className='button-1-default' onClick={handleClick}>{props.type === 'Edit' ? 'Save Changes' : 'Add Feedback'}</button>
          </div>
        </form>
        <span>{title}</span>
        <span>{details}</span>
    </Container>
  )
}

export default Feedback
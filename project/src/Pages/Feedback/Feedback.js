import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FeedbackCategory from '../../Components/Feedback/FeedbackCategory'
import Head from '../../Components/Feedback/Head'
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
  const [error, setError] = useState({})

  const getTitleValue = (value) => {
    setTitle(value)
  }

  const getDetailsValue = (details) => {
    setDetails(details)
  }

  const validate = (title, details) => {
    let errors = {}
    if(!title) {
      errors.title = "Can't be empty"
    }
    if(!details) {
      errors.detail = "Can't be empty"
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(title, details))
    if(title && details) {
      setTitle('')
      setDetails('')
      if (props.type === 'Edit') { 
        axios.patch('http://localhost:8000/productRequests', {
          title: title,
          category: option.toLowerCase(),
          status: detailOption,
          description: details
        })
        .catch((e) => {
          console.log(e)
        })
      }
      axios.post('http://localhost:8000/productRequests', {
        title: title,
        category: option.toLowerCase(),
        upvotes: '0',
        status: detailOption,
        description: details,
        comments: []
      })
      .catch((e) => {
        console.log(e)
      })
    } 

  }

  return (
    <Container type={props.type}>
        <Link to='/'><Head /></Link>
        <form className='content' onSubmit={handleSubmit}>
          <img src={props.type === 'Edit' ? './assets/shared/icon-edit-feedback.svg' : './assets/shared/icon-new-feedback.svg'} alt='' className='plus' />
          <span className='h1 head'>{props.type === 'Edit' ? 'Editing ‘Add a dark theme option’' : 'Create New Feedback' }</span>
          <FeedbackTitle value={title} getTitleValue={getTitleValue} error={error.title}/>
          <span className='h4 error'>{error.title}</span>
          <FeedbackCategory option={option} setOption={setOption} />
          {props.type === 'Edit' && <UpdateStatus detailOption={detailOption} setDetailOption={setDetailOption}/>}
          <Details value={details} getDetailsValue={getDetailsValue} error={error.detail} />
          <span className='h4 error'>{error.detail}</span>
          <div className='buttons'>
            {(props.type === 'Edit') && <button className='button-4-default delete'>Delete</button>}
            <button className='button-3-default cancel'>Cancel</button>
            <button className='button-1-default save' type='submit'>{props.type === 'Edit' ? 'Save Changes' : 'Add Feedback'}</button>
          </div>
        </form>
    </Container>
  )
}

export default Feedback
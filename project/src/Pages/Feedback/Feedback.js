import React, { useEffect, useState } from 'react'
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

function Feedback({ type, id }) {
  const [option, setOption] = useState('Feature')
  const [detailOption, setDetailOption] = useState('Suggestion')
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [error, setError] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/productRequests/${id}`)
      .then(res => {
        console.log(res.data)
        setTitle(type === "Edit" && res.data.title)
        setDetails(type === "Edit" && res.data.description)
        setOption(type === "Edit" && res.data.category.charAt().toUpperCase() + res.data.category.slice(1))
        setDetailOption(type === "Edit" && res.data.status.charAt().toUpperCase() + res.data.status.slice(1))
      })
  }, [])

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
      if (type === 'Edit') { 
        axios.patch(`http://localhost:8000/productRequests/${id}`, {
          title: title,
          category: option.toLowerCase(),
          status: detailOption,
          description: details
        })
        .catch((e) => {
          console.log(e)
        })
      }
      else {
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

  }

  return (
    <Container type={type}>
        <Link to={type === 'Edit' ? `/feedback-detail/${id}` : '/'}><Head /></Link>
        <form className='content' onSubmit={handleSubmit}>
          <img src={type === 'Edit' ? '/assets/shared/icon-edit-feedback.svg' : '/assets/shared/icon-new-feedback.svg'} alt='' className='plus' />
          <span className='h1 head'>{type === 'Edit' ? 'Editing ‘Add a dark theme option’' : 'Create New Feedback' }</span>
          <FeedbackTitle value={title} getTitleValue={getTitleValue} error={error.title}/>
          <span className='h4 error'>{error.title}</span>
          <FeedbackCategory option={option} setOption={setOption} />
          {type === 'Edit' && <UpdateStatus detailOption={detailOption} setDetailOption={setDetailOption}/>}
          <Details value={details} getDetailsValue={getDetailsValue} error={error.detail} />
          <span className='h4 error'>{error.detail}</span>
          <div className='buttons'>
            {(type === 'Edit') && <input type='button' className='button-4-default delete' value='Delete' />}
            <Link to={type === 'Edit' ? `/feedback-detail/${id}` : '/'}><input type='button' className='button-3-default cancel' value='Cancel' /></Link>
            <button className='button-1-default save' type='submit'>{type === 'Edit' ? 'Save Changes' : 'Add Feedback'}</button>
          </div>
        </form>
    </Container>
  )
}

export default Feedback
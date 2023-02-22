import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FeedbackCategory from '../../Components/Feedback/FeedbackCategory'
import Head from '../../Components/Feedback/Head'
import FeedbackTitle from '../../Components/Feedback/FeedbackTitle'
import UpdateStatus from '../../Components/Feedback/UpdateStatus'
import Details from '../../Components/Feedback/Details'
import axios from 'axios'
import { Container } from './FeedbackStyles'
import { useSelector } from 'react-redux'

function Feedback({ type }) {
  const [option, setOption] = useState('Feature')
  const [detailOption, setDetailOption] = useState('')
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [error, setError] = useState({})
  const {id} = useParams()
  const { feed } = useSelector(state => state.feedback)

  useEffect(() => {
    // console.log(feed)
    if(type === 'Edit' && feed) {
      setTitle(feed.title)
      setDetails(feed.description)
      setOption(feed.category.charAt().toUpperCase() + feed.category.slice(1))
      setDetailOption(feed.status.charAt().toUpperCase() + feed.status.slice(1))
    }
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

  const handleClick = () => {
    axios.delete(`http://localhost:8000/productRequests/${id}`)
    setTitle('')
    setDetails('')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(title, details))
    if(title && details) {
      if (type === 'Edit') { 
        axios.patch(`http://localhost:8000/productRequests/${id}`, {
          title: title,
          category: option.toLowerCase(),
          status: detailOption.toLowerCase(),
          description: details
        })
        .then(() => {
          setTitle('')
          setDetails('')
        })
        .catch((e) => {
          console.log(e)
        })
      }
      else {
        axios.post('http://localhost:8000/productRequests', {
          title: title,
          category: option.toLowerCase(),
          upvotes: 0,
          status: detailOption.toLowerCase(),
          description: details,
        })
        .then(() => {
          setTitle('')
          setDetails('')
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
          <span className='h1 head'>{type === 'Edit' ? `Editing ‘${feed && feed.title}’` : 'Create New Feedback' }</span>
          <FeedbackTitle value={title} getTitleValue={getTitleValue} error={error.title}/>
          <span className='h4 error'>{error.title}</span>
          <FeedbackCategory option={option} setOption={setOption} />
          {type === 'Edit' && <UpdateStatus detailOption={detailOption} setDetailOption={setDetailOption}/>}
          <Details value={details} getDetailsValue={getDetailsValue} error={error.detail} />
          <span className='h4 error'>{error.detail}</span>
          <div className='buttons'>
            {(type === 'Edit') && <Link to='/'><input type='button' className='button-4-default delete' value='Delete' onClick={handleClick}/></Link>}
            <Link to={type === 'Edit' ? `/feedback-detail/${id}` : '/'}><input type='button' className='button-3-default cancel' value='Cancel' /></Link>
            <button className='button-1-default save' type='submit'>{type === 'Edit' ? 'Save Changes' : 'Add Feedback'}</button>
          </div>
        </form>
    </Container>
  )
}

export default Feedback
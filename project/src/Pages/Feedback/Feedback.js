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
  const [error, setError] = useState({
    errorTitle: false,
    errorDetail: false
  })

  const getTitleValue = (value) => {
    setTitle(value)
  }

  const getDetailsValue = (details) => {
    setDetails(details)
  }

  const validate = () => {
    if(!title) {
      setTitleError(true)
    }
    if(!details) {
      setDetailsError(true)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(title.length === 0) {
      setError({
        errorTitle: true,
        errorDetail: false
      })
    }
      else if(details.length === 0) {
        setError({
          errorTitle: false,
          errorDetail: true
        }) 
      }
    

      
          if (props.type === 'Edit') { 
            axios.patch('http://localhost:8000/productRequests', {
              title: title,
              category: option,
              status: detailOption,
              description: details
            })
            .catch((e) => {
              console.log(e)
            })
          }
          axios.post('http://localhost:8000/productRequests', {
            title: title,
            category: option,
            upvotes: '0',
            status: detailOption,
            description: details,
            comments: []
          })
          .catch((e) => {
            console.log(e)
          })
  }

  return (
    <Container type={props.type}>
        <Link to='/'><Head /></Link>
        <form className='content' onSubmit={handleSubmit}>
          <img src={props.type === 'Edit' ? './assets/shared/icon-edit-feedback.svg' : './assets/shared/icon-new-feedback.svg'} alt='' className='plus' />
          <span className='h1 head'>{props.type === 'Edit' ? 'Editing ‘Add a dark theme option’' : 'Create New Feedback' }</span>
          <FeedbackTitle value= {getTitleValue}/>
          {error.errorTitle && <span className='h4 error'>Can't be empty</span>}
          <FeedbackCategory option={option} setOption={setOption}/>
          {props.type === 'Edit' && <UpdateStatus detailOption={detailOption} setDetailOption={setDetailOption}/>}
          <Details value={getDetailsValue} />
          {error.errorDetail && <span className='h4 error'>Can't be empty</span>}
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
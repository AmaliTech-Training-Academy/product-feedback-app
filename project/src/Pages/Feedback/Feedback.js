import React, { useState } from 'react'
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
  const [detailsError, setDetailsError] = useState(false)
  const [titleError, setTitleError] = useState(false)

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
    validate()
    if(!titleError && !detailsError) {
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
    } else console.log('fill the forms dummy!!!')
  }

  return (
    <Container type={props.type}>
        <Head />
        <form className='content'>
          <img src={props.type === 'Edit' ? './assets/shared/icon-edit-feedback.svg' : './assets/shared/icon-new-feedback.svg'} alt='' className='plus' />
          <span className='h1 head'>{props.type === 'Edit' ? 'Editing ‘Add a dark theme option’' : 'Create New Feedback' }</span>
          <FeedbackTitle value= {getTitleValue} setTitleError={setTitleError}/>
          {titleError && <span className='h4 error'>Can't be empty</span>}
          <FeedbackCategory option={option} setOption={setOption}/>
          {props.type === 'Edit' && <UpdateStatus detailOption={detailOption} setDetailOption={setDetailOption}/>}
          <Details value={getDetailsValue} setDetailsError={setDetailsError}/>
          {detailsError && <span className='h4 error'>Can't be empty</span>}
          <div className='buttons'>
            {(props.type === 'Edit') && <button className='button-4-default delete'>Delete</button>}
            <button className='button-3-default cancel'>Cancel</button>
            <button className='button-1-default save' onClick={handleClick}>{props.type === 'Edit' ? 'Save Changes' : 'Add Feedback'}</button>
          </div>
        </form>
    </Container>
  )
}

export default Feedback
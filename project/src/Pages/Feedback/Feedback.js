import React from 'react'
import FeedbackCategory from '../../Components/Feedback/FeedbackCategory'
import FeedbackHead from '../../Components/Feedback/FeedbackHead'
import FeedbackTitle from '../../Components/Feedback/FeedbackTitle'
import UpdateStatus from '../../Components/Feedback/UpdateStatus'
import Details from '../../Components/Feedback/Details'
import {
    Container
} from './FeedbackStyles'

function Feedback(props) {
  return (
    <Container type={props.type}>
        <FeedbackHead />
        <form className='content'>
          <img src={props.type === 'Edit' ? './assets/shared/icon-edit-feedback.svg' : './assets/shared/icon-new-feedback.svg'} alt='' className='plus' />
          <span className='h1 head'>{props.type === 'Edit' ? 'Editing ‘Add a dark theme option’' : 'Create New Feedback' }</span>
          <FeedbackTitle />
          <FeedbackCategory />
          {props.type === 'Edit' && <UpdateStatus />}
          <Details />
          <div className='buttons'>
            {(props.type === 'Edit') && <button className='button-4-default delete'>Delete</button>}
            <button className='button-3-default cancel'>Cancel</button>
            <button className='button-1-default'>{props.type === 'Edit' ? 'Save Changes' : 'Add Feedback'}</button>
          </div>
        </form>
    </Container>
  )
}

export default Feedback
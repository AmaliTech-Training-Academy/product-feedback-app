import React from 'react'
import FeedbackCategory from '../../Components/Feedback/FeedbackCategory'
import FeedbackHead from '../../Components/Feedback/FeedbackHead'
import FeedbackTitle from '../../Components/Feedback/FeedbackTitle'
// import UpdateStatus from '../../Components/Feedback/UpdateStatus'
import FeedbackDetails from '../../Components/Feedback/FeedbackDetails'
import {
    Container
} from './FeedbackStyles'

function Feedback() {
  return (
    <Container>
        <FeedbackHead />
        <div className='content'>
          <img src='./assets/shared/icon-new-feedback.svg' alt='' className='plus' />
          <span className='h1 head'>Create New Feedback</span>
          <FeedbackTitle />
          <FeedbackCategory />
          {/* <UpdateStatus /> */}
          <FeedbackDetails />
          <div className='buttons'>
            <button className='button-3-default cancel'>Cancel</button>
            <button className='button-1-default'>Add Feedback</button>
          </div>
        </div>
    </Container>
  )
}

export default Feedback
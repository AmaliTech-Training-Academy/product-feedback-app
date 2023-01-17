import React from 'react'
import FeedbackCategory from '../../Components/Feedback/FeedbackCategory'
import FeedbackHead from '../../Components/Feedback/FeedbackHead'
import FeedbackTitle from '../../Components/Feedback/FeedbackTitle'
import UpdateStatus from '../../Components/Feedback/UpdateStatus'
import FeedbackDetails from '../../Components/Feedback/FeedbackDetails'
import {
    Container
} from './FeedbackStyles'

// const data = [
//     {
//         title: 'Feedback Title',
//         description: 'Add a short, descriptive headline',
//     },
//     {
//         title: 'Category',
//         description: 'Choose a category for your feedback',
//     },
//     {
//         title: 'Update Status',
//         description: 'Update Status',
//     },
//     {
//         title: 'Feedback Detail',
//         description: 'Include any specific comments on what should be improved, added, etc.',
//     },
// ]

function Feedback() {
  return (
    <Container>
        <FeedbackHead />
        <FeedbackTitle />
        <FeedbackCategory />
        <UpdateStatus />
        <FeedbackDetails />
    </Container>
  )
}

export default Feedback
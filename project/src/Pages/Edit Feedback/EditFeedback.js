import React, { useEffect } from 'react'
import Feedback from '../Feedback/Feedback'
import { useDispatch } from 'react-redux'
import { findSingleFeed } from '../../features/feedback/feedbackSlice'
import { useParams } from 'react-router'

function EditFeedback() {
  // const { id } = useParams()
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(findSingleFeed(parseInt(id)))
  // }, [])
  return (
    <>
        <Feedback type= 'Edit'/>
    </>
  )
}

export default EditFeedback
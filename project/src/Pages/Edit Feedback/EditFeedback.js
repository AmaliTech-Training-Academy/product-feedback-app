// import React, {useEffect, useState} from 'react'
import Feedback from '../Feedback/Feedback'
// import axios from 'axios'

function EditFeedback({id}) {
  return (
    <>
        <Feedback type= 'Edit' id={id} />
    </>
  )
}

export default EditFeedback
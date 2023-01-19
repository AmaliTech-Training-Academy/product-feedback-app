import React, {useEffect, useState} from 'react'
import Feedback from '../Feedback/Feedback'
import axios from 'axios'

function EditFeedback() {
    const [data, setData] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/currentUser')
            .then(response => {
                setData(response.data.name)
                setImage(response.data.image)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // const getRequest = () => {

    // }
  return (
    <>
        <Feedback type= 'Edit' />
        {/* <button onClick={() => getRequest()}>Get</button> */}
        <span>{data}</span>
        <img src={image} alt='' />
    </>
  )
}

export default EditFeedback
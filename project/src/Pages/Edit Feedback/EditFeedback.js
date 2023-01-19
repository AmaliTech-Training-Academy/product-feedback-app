// import React, {useEffect, useState} from 'react'
// import React, {useEffect, useState} from 'react'
import Feedback from '../Feedback/Feedback'
// import axios from 'axios'

function EditFeedback() {
    // const [data, setData] = useState('')
    // const [image, setImage] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:8000/currentUser')
    //         .then(response => {
    //             setData(response.data.name)
    //             setImage(response.data.image)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])
    // const postRequest = () => {
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8000/currentUser',
    //         data: {
    //             name: 'Mikel',
    //             image: 'bonk'
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
  return (
    <>
        <Feedback type= 'Edit' />
    </>
  )
}

export default EditFeedback
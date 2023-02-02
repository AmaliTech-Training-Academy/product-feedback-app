import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddComment = ({ id }) => {
  const [commentInput, setCommentInput]=useState("");

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/productRequests/${id}`)
  //     .then(res => {
  //       console.log(res.data)
  //     })
  // }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, {
      comments: [
        {
          content: "content",
        }
      ]
    })
    .then(response => {
      setCommentInput(response.data.comments);
    })
    .catch(error => {
      console.log(error);
    });
  }

  
  return (
    <form className="add-comment sections" onSubmit={handleSubmit}>
            <div className="card-body">
              <label htmlFor="add-comment" className="form-label">
                <h3>Add comment</h3>
              </label>
              <textarea
                type="text"
                className="form-control body-2 "
                id="add-comment"
                placeholder="Type your comment here"
                maxLength="250"
                min="200"
                step="250"
                value={commentInput}
                onChange={(e)=>{
                  setCommentInput(e.target.value)
                }}
                // required
              />
            </div>
            <div className="share-comment  body-2">
              <p className="body-2"><span className='characterCounter' >{250-commentInput.length}</span> Characters left</p>
              <button type="submit" className=" post-comment button-text">
                Post Comment
              </button>
            </div>
          </form>
  )
}

export default AddComment
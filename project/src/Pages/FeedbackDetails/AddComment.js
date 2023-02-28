import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getFeedbacks } from '../../features/feedback/feedbackSlice'

const AddComment = ({ id }) => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const {feed} = useSelector(state => state.feedback)
  const [commentInput, setCommentInput]=useState('');
  const [error, setError]=useState('');
  const [comments, setComments]=useState([]);

  useEffect(() => {
    if(feed.comments) {
      setComments([...feed.comments])
    }
  }, [])
  
  const handleClick = (e) => {
    e.preventDefault()
    if(commentInput) {
      const details = {}
      details.id = comments ? comments.length + 1 : 1;
      details.content = commentInput
      details.user = {
        name: user.name,
        image: user.image,
        username: user.username
      }
    comments.push(details)
    console.log(comments);
    axios.patch(`http://localhost:8000/productRequests/${id}`, {
        comments: comments
      })
      .then(() => {
        dispatch(getFeedbacks())
      })
      .then(() => {
        setCommentInput('')
      })
    }
    else {
      setError('Comment is empty')
    }

  }


return (
    <form className="add-comment sections" >
            <div className="card-body">
              <label htmlFor="add-comment" className="form-label">
                <h3>Add comment</h3>
              </label>
              <textarea
                type="text"
                className={`form-control body-2 ${error ? 'empty' : undefined}`}
                id="add-comment"
                placeholder="Type your comment here"
                maxLength="250"
                min="200"
                step="250"
                value={commentInput}
                onChange={(e)=>{
                  setCommentInput(e.target.value)
                }}
              />
            </div>
            <div className='error'>{error}</div>
            <div className="share-comment  body-2">
              <p className="body-2"><span className='characterCounter' >{250-commentInput.length}</span> Characters left</p>
              <button type="submit" className=" post-comment button-text" onClick={handleClick}>
                Post Comment
              </button>
            </div>
          </form>
  )
}

export default AddComment
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddComment = ({ id, setRefetch }) => {
  const [user, setUser] = useState(null)
  const [commentInput, setCommentInput]=useState('');
  const [error, setError]=useState('');
  const [comments, setComments]=useState([]);
  const [fetch, setFetch] = useState(false)

  const commentsFetching = () => {
    axios.get(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`)
    .then(response => {
      const comment = [response.data.comments ? response.data.comments : []];
      setComments(...comment)
      setFetch(false)
      console.log(comment)
    });

    axios.get(`https://product-feedback-api-hry7.onrender.com/currentUser/`)
    .then(response => {
      setUser(response.data)
    });
  }
  
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
    setCommentInput('')
    axios.patch(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, {
        comments: comments
      })
      .then(() => {
        setRefetch(true)
      })
    console.log(comments)
    console.log(fetch)
    }
    else {
      setError('Comment is empty')
    }

  }

  useEffect(() => {
    commentsFetching()
  }, [])

  // useEffect(() => {
  //   if(fetch) {
  //     commentsFetching()
  //   }
  // }, [fetch])

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
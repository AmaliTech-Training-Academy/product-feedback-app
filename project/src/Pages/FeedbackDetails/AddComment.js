import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddComment = ({ id, setRefetch }) => {
  const [user, setUser] = useState(null)
  const [commentInput, setCommentInput]=useState('');
  const [comments, setComments]=useState([]);
  const [fetch, setFetch] = useState(false)
  
  const handleClick = (e) => {
    e.preventDefault()
    if(commentInput) {
      const details = {}
      details.id = comments.length + 1
      details.content = commentInput
      details.user = {
        name: user.name,
        image: user.image,
        username: user.username
      }
      let comment;
      if(comments) {
        comment = [...comments, details]
        // console.log(comment);
      }
      else {
        comment = [details]
      }
      console.log(comment)
      setFetch(true)
      axios.patch(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, {
        comments: comment
      })
      .then(() => {
        setCommentInput('')
        setRefetch(true)
      })
    }
    else {
      console.log('no input')
    }
  }
  const commentsFetching = () => {
    axios.get(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`)
    .then(response => {
      // console.log(response.data.comments ? response.data.comments : 'hello')
      const comment = [response.data.comments];
      setComments(...comment)
      setFetch(false)
      // console.log(...comment)
    });

    axios.get(`https://product-feedback-api-hry7.onrender.com/currentUser/`)
    .then(response => {
      setUser(response.data)
    });
  }

  useEffect(() => {
    commentsFetching()
  }, [])

  useEffect(() => {
    if(fetch) {
      commentsFetching()
    }
  }, [fetch])

return (
    <form className="add-comment sections" >
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
              />
            </div>
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
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = ({ id }) => {
  const [user, setUser] = useState(null)
  const [commentInput, setCommentInput]=useState('');
  // const [commentDeatils, setCommentDeatils]=useState({});
  const [comments, setComments]=useState(null);
  
  const handleClick = (e) => {
    // e.preventDefault()
    const details = {}
    details.content = commentInput
    details.user = {
      name: user.name,
      image: user.image,
      username: user.username
    }
    // setCommentDeatils(...details)
    const comment = [...comments, details]
    // setComments(comment)
    // console.log(details)
    axios.patch(`http://localhost:8000/productRequests/${id}`, {
      comments: comment
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/productRequests/${id}`)
    .then(response => {
      // console.log(response.data.comments ? response.data.comments : 'hello')
      const comment = [response.data.comments && response.data.comments];
      setComments(...comment)
    });

    axios.get(`http://localhost:8000/currentUser/`)
    .then(response => {
      setUser(response.data)
    });
  }, [])

  // useEffect(() => {
  //   axios.patch(`http://localhost:8000/productRequests/${id}`, {
  //     comments: comments
  //   })
  // }, [commentInput])
  
  console.log(comments)
  return (
    <form className="add-comment sections">
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

export default App
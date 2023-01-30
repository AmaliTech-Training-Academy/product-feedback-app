import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [commentInput, setCommentInput]=useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8000/productRequests', {
      content: "content",
      
    })
    .then(response => {
      console.log(response.data);
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

export default App
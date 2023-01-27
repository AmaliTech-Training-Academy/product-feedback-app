import React from 'react'

const AddComment = () => {
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
                max="250"
                min="200"
                step="250"
              />
            </div>
            <div className="share-comment  body-2">
              <p className="body-2">250 Characters left</p>
              <button type="submit" className=" post-comment button-text">
                Post Comment
              </button>
            </div>
          </form>
  )
}

export default AddComment
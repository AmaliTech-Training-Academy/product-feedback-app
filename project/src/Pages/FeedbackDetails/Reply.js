import React, {useState, useEffect} from "react";
import axios from "axios";


const Reply = ({ id, commentContent, setRefetch }) => {
  const [comment, setComment] = useState(null)
  const [reply, setReply] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [commentWanted, setCommentWanted] = useState(null)
  
  useEffect(() => {
    axios.get(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`)
      .then(res => {
        setComment(res.data.comments)
      })

    axios.get(`https://product-feedback-api-hry7.onrender.com/currentUser`)
      .then(response => {
      setUser(response.data)
    }); 
  }, [])

  const handleClick = () => {
    // console.log(comment)
    if(reply) {
      let commentObject;
      comment.map(ele => {
        if(ele.content === commentContent) {
          const replyObject = {
            content: reply,
            replyingTo: ele.user.name,
            user: {
              name: user.name,
              image: user.image,
              username: user.username
            }
          }
          const newCommentObject = {...ele}
          if(ele.replies) {
            ele.replies.push(replyObject)
          }
          else {
            newCommentObject.replies = []
            newCommentObject.replies.push(replyObject)
          }
          commentObject = newCommentObject
          ele = newCommentObject
          
        }
      })
      setReply('')
  
      for (let i = 0; i < comment.length; i++) {
        if(comment[i].content === commentObject.content) {
          comment[i] = commentObject
        };  
      }
  
      // console.log(comment)
      axios.patch(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, {
        comments: comment
      })
      .then(() => {
        setRefetch(true)
      })
    }
    else {
      setError('Reply is empty')
    }
  }

  return (
    <>
    <div className="reply-input">
      <textarea className={`reply-textarea ${error ? 'empty' : undefined}`} value={reply} onChange={(e) => setReply(e.target.value)}></textarea>
      <button className="post-comment button-text  post-reply" onClick={handleClick}>
        Post Reply
      </button>
    </div>
    <span className="error reply-error">{error}</span>
    </>
  );
};

export default Reply;

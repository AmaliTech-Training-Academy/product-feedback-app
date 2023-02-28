import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbacks } from '../../features/feedback/feedbackSlice'


const Reply = ({ id, commentContent }) => {
  const { feed } = useSelector(state => state.feedback)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [comment, setComment] = useState(null)
  const [reply, setReply] = useState('')
  const [error, setError] = useState('')
  
  useEffect(() => {
    setComment([...feed.comments])
  }, [])

  const handleClick = () => {
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

      axios.patch(`http://localhost:8000/productRequests/${id}`, {
        comments: comment
      })
      .then(() => {
        dispatch(getFeedbacks())
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

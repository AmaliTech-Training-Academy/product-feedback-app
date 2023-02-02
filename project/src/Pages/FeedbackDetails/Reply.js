import React, {useState, useEffect} from "react";
import axios from "axios";


const Reply = ({ id, commentContent, input }) => {
  const [comment, setComment] = useState(null)
  const [commentWanted, setCommentWanted] = useState(null)
  
  useEffect(() => {
    axios.get(`http://localhost:8000/productRequests/${id}`)
      .then(res => {
        setComment(res.data.comments)
      })
  }, [])

  const handleClick = () => {

  }
    
  return (
    <div className={`reply-input ${input ? '' : "showReply"}`}>
      <textarea className="reply-textarea"></textarea>
      <button className="post-comment button-text  post-reply" onClick={handleClick}>
        Post Reply
      </button>
    </div>
  );
};

export default Reply;

import React, {useState, useEffect} from "react";
import axios from "axios";

const Reply = ({ id, commentContent, input }) => {
  const [comment, setComment] = useState(null)
  const [commentWanted, setCommentWanted] = useState(null)
  
  useEffect(() => {
    axios.get(`http://localhost:8000/productRequests/${id}`)
      .then(res => {
        setComment(res.data.comments)
        console.log(res.data.comments)
      })
  }, [])
    
  return (
    <div className={`reply-input ${input ? '' : "showReply"}`}>
      <textarea className="reply-textarea"></textarea>
      <button className="post-comment button-text  post-reply" onClick={() => {
        let commentObject;
        comment.map(ele => {
          if(ele.content === commentContent) {
            commentObject = ele
          }
        })
        console.log(commentObject);
      } }>
        Post Reply
      </button>
    </div>
  );
};

export default Reply;

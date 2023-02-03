import React, {useState, useEffect} from "react";
import axios from "axios";


const Reply = ({ id, commentContent, input }) => {
  const [comment, setComment] = useState(null)
  const [reply, setReply] = useState('')
  const [user, setUser] = useState(null)
  const [commentWanted, setCommentWanted] = useState(null)
  
  useEffect(() => {
    axios.get(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`)
      .then(res => {
        setComment(res.data.comments)
        // console.log(res.data.comments)
      })

    axios.get(`https://product-feedback-api-hry7.onrender.com/currentUser/`)
      .then(response => {
      setUser(response.data)
      // console.log(response.data)
    }); 
  }, [])

  const handleClick = () => {
    let commentObject;
    comment.map(ele => {
      if(ele.content === commentContent) {
        // setCommentWanted(ele)
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
        // console.log(newCommentObject)

        ele = newCommentObject
        
      }
      // setCommentWanted(commentWanted)
      // console.log(comment.indexOf(ele))
    })
    // console.log(commentObject)
    setReply('')
    // console.log(comment.indexOf(commentWanted))

    for (let i = 0; i < comment.length; i++) {
      if(comment[i].content === commentObject.content) {
        comment[i] = commentObject
      };  
    }

    // console.log(comment)
  }

  return (
    <div className={`reply-input ${input ? '' : "showReply"}`}>
      <textarea className="reply-textarea" value={reply} onChange={(e) => setReply(e.target.value)}></textarea>
      <button className="post-comment button-text  post-reply" onClick={handleClick}>
        Post Reply
      </button>
    </div>
  );
};

export default Reply;

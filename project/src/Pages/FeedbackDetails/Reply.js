import React from "react";

const Reply = (props) => {
    
  return (
    <div className={`reply-input ${props.active === props.currentReply ? '' : "showReply"}`}>
      <textarea className="reply-textarea"></textarea>
      <button className="post-comment button-text  post-reply">
        Post Reply
      </button>
    </div>
  );
};

export default Reply;

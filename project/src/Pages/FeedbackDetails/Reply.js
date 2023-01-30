import React from "react";

const Reply = (props) => {
    console.log(props.input)
  return (
    <div className={`reply-input ${props.input ? '' : "showReply"}`}>
      <textarea className="reply-textarea"></textarea>
      <button className="post-comment button-text  post-reply">
        Post Reply
      </button>
    </div>
  );
};

export default Reply;

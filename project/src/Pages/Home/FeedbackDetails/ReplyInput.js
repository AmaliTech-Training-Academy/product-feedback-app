import React from "react";

const ReplyInput = () => {
  return (
    <div className="reply-input">
      <textarea className="reply-textarea"></textarea>
      <button className="btn post-comment button-text post-reply">
        Post Reply
      </button>
    </div>
  );
};

export default ReplyInput;

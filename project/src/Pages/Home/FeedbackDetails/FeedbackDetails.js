import React from "react";
import { useState, useEffect } from "react";
import "./FeedbackDetails.css";
import axios from "axios";
import AddComment from "./AddComment";


const FeedbackDetails = () => {
  const [feed, setFeed] = useState(null);

  const getData = async () => {
    const results = await axios.get("http://localhost:8000/productRequests");
    setFeed(results.data[1]);
    console.log(results.data[1].comments);
  };

  useEffect(() => {
    getData();
  }, []);

  const [input, setInput] = useState(false)

  const showInput = () =>{
    if(input === true){
      setInput(false)
    }
    else{
      setInput(true)
    }


  }

  return (
    <main>
      {feed ? (
        <>
          <section className="navigation">
            <div className="back">
              <img src="./assets/shared/icon-arrow-left.svg" />
              <span className="h4 back-text">Go Back</span>
            </div>
            <button className="button-text edit-button">
              Edit Feedback
            </button>
          </section>
          {/* <section className="card dark-theme ">
            <button className="increase-theme ">
              <img
                src="./assets/shared/icon-arrow-up.svg"
                className="up-arrow"
              />
              <p className="number">{feed.upvotes}</p>
            </button>
            <div className="theme-decription">
              <h3 className="card-title">{feed.title}</h3>
              <p className="body-1 card-text">{feed.description}</p>
              <button className="feature-button">{feed.category}</button>
            </div>
            <div className="comment-tag ">
              <img src="./assets/shared/icon-comments.svg" />
              <span>{feed.comments.length}</span>
            </div>
          </section> */}

          <section className="comments sections">
            <h3>{feed.comments.length} comments</h3>
            {feed.comments.map((comment) => {
              return (
                <div key={`comment ${comment.id}`}>
                  <div className="comment-section">
                    <div className="comment-profile">
                      <img
                        src={comment.user.image}
                        alt="profile image"
                        className="profile-image"
                      />
                      <div className="user-detail">
                        <h4 className="username">{comment.user.name}</h4>
                        <h4 className="user-account">
                          @{comment.user.username}
                        </h4>
                      </div>

                      <div className="reply body-3" onClick={showInput}>Reply</div>
                    </div>

                    <div className="body-2 users-comment">
                      {comment.content}
                    </div>

                    {
                      input &&
                      (<div className="reply-input">
                      <textarea className="reply-textarea"></textarea>
                      <button className="post-comment button-text  post-reply">
                        Post Reply
                      </button>
                    </div>)
                    }
                  </div>
                </div>
              );
            })}
          </section>
          <AddComment/>
        </>
      ) : (
        <p>no feed yet</p>
      )}
    </main>
  );
};

export default FeedbackDetails;

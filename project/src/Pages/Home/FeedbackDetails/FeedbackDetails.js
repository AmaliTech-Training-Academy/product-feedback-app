import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./FeedbackDetails.css";
import axios from "axios";

const FeedbackDetails = () => {
  const [feed, setFeed] = useState(null);

  const getData = async () => {
    const results = await axios.get("http://localhost:8000/productRequests");
    setFeed(results.data[1]);
    console.log(results.data);
  };

  useEffect(() => {
    getData();
    
  }, []);

  return (
    <main>
      {feed ? (
        <>
          <section className="navigation">
            <div className="back">
              <img src="./assets/shared/icon-arrow-left.svg" />
              <span className="h4">Go Back</span>
            </div>
            <button className="btn btn-primary button-text edit-button">
              Edit Feedback
            </button>
          </section>
          <section className="card dark-theme ">
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
          </section>
        
          <section className="comment card">
            <h3 className="card-body">{feed.comments.length} comments</h3>
            {feed.comments.map((comment) => {
            return (
              <div key={`comment ${comment.id}`}>
                <div className="card-body ">
                  <div className="comment-profile">
                    <img
                      src={comment.user.image}
                      alt="progile image"
                      className="profile-image"
                    />
                    <div className="user-detail">
                      <h4>{comment.user.name}</h4>
                      <h4 className="user-account">@{comment.user.username}</h4>
                    </div>
                    <div className="reply body-3">Reply</div>
                  </div>

                  <div className="body-2 users-comment">{comment.content}
                  </div>
                </div>

                <hr />
              </div>
            );
          })}
          </section>
          <form className="card add-comment">
            <div className="card-body">
              <label htmlFor="add-comment" className="form-label">
                <h3>Add comment</h3>
              </label>
              <textarea
                type="text"
                className="form-control body-2"
                id="add-comment"
                placeholder="Type your comment here"
                max="250"
                min="200"
                step="250"
              />
            </div>
            <div className="share-comment card-body body-2">
              <p className="body-2">250 Characters left</p>
              <button type="submit" className="btn post-comment button-text">
                Post Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>no feed yet</p>
      )}
    </main>
  );
};

export default FeedbackDetails;

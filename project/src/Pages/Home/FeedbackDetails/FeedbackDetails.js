import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./FeedbackDetails.css";
import axios from "axios";
import AddComment from "./AddComment";
import Suggestions from "../../../Components/Suggestions/Suggestions";
import Head from "../../../Components/Feedback/Head";

const FeedbackDetails = ({item}) => {
  const [feed, setFeed] = useState(null);

  const getData = async () => {
    const results = await axios.get("http://localhost:8000/productRequests");
    setFeed(results.data[1]);
    console.log(results.data[1].comments);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      {feed ? (
        <>
          <section className="navigation">
            <Head />
            {/* <div className="back">
              <img src="./assets/shared/icon-arrow-left.svg" />
              <span className="h4">Go Back</span>
            </div> */}
            <button className="btn btn-primary button-text edit-button">
              Edit Feedback
            </button>
          </section>
          <Suggestions title={item.title} category={item.category} status={item.status} upvote={item.upvotes} description={item.description}/>
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

          <section className="comment card">
            <h3 className="card-body">{feed.comments.length} comments</h3>
            {feed.comments.map((comment) => {
              return (
                <div key={`comment ${comment.id}`}>
                  <div className="card-body  comment-section">
                    <div className="comment-profile">
                      <img
                        src={comment.user.image}
                        alt="profile image"
                        className="profile-image"
                      />
                      <div className="user-detail">
                        <h4>{comment.user.name}</h4>
                        <h4 className="user-account">
                          @{comment.user.username}
                        </h4>
                      </div>
                      <div className="reply body-3">
                        Reply
                        {onclick}
                      </div>
                    </div>

                    <div className="body-2 users-comment">
                      {comment.content}
                    </div>
                  </div>

                  {/* <div className="user-reply card-body">
                    <div className="comment-profile">
                      <img
                        src="./assets/user-images/image-anne.jpg"
                        className="profile-image"
                      />
                      <div className="user-detail">
                        <h4>{comment.user.name} </h4>
                        <h4 className="user-account"> @annev1990</h4>
                      </div>
                      <div className="body-3 reply">Reply</div>
                    </div>
                    <div>
                      @hummingbird1 While waiting for dark mode, there are
                      browser extensions that will also do the job. Search for
                      "dark theme” followed by your browser. There might be a
                      need to turn off the extension for sites with naturally
                      black backgrounds though.
                    </div>
                  </div> */}
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

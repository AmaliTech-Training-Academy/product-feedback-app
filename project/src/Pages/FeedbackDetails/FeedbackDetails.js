import React from "react";
import { useState, useEffect } from "react";
import "./FeedbackDetails.css";
import axios from "axios";
import AddComment from "./AddComment";
import Suggestions from "../../Components/Suggestions/Suggestions";
import Head from "../../Components/Feedback/Head";
import { Link, useParams } from "react-router-dom";
import Reply from "./Reply";
import EmptyComment from "../../Components/EmptyComment/EmptyComment";


const FeedbackDetails = ({ setId }) => {
  const [feed, setFeed] = useState(null);
  const [input, setInput] = useState(false);
  const {id} = useParams()

  // const getData = async () => {
  //   const results = await axios.get(`http://localhost:8000/productRequests/${id}`);
  //   setFeed(results);
  //   console.log(results);
  // };

  useEffect(() => {
    axios.get(`http://localhost:8000/productRequests/${id}`)
      .then(response => {
        setFeed(response.data);
      });
  }, []);

  const showInput = () => {
    if (input === true) {
      setInput(false);
    } else {
      setInput(true);
    }
  };

  const setid = () => {
    setId(id)
    // console.log(id)
  }
  // console.log(feed.comments && feed.comments)
  return (
    <main>
      {feed ? (
        <>
          <section className="navigation">
            <Link to="/">
              <Head />
            </Link>
            <Link to="/edit-feedback">
              <button className="btn btn-primary button-text edit-button" onClick={setid}>
                Edit Feedback
              </button>
            </Link>
          </section>
          <Suggestions
            title={feed.title}
            category={feed.category}
            status={feed.status}
            upvote={feed.upvotes}
            description={feed.description}
            comments={feed.comments ? feed.comments : undefined}
          />

          {feed.comments ? (
            <section className="comment sections">
              <h3>{feed.comments.length} comments</h3>
              {feed.comments.map((comment) => {
                return (
                  <div key={`comment ${comment.id}`}>
                    <div className={feed.comments.length === comment.id ? "last" : "comment-section"}>
                      <div className="comment-profile">
                        <img
                          src={comment.user.image}
                          alt="profile_image"
                          className="profile-image"
                        />
                        <div className="user-detail">
                          <h4 className="username">{comment.user.name}</h4>
                          <h4 className="user-account">
                            @{comment.user.username}
                          </h4>
                        </div>

                        <div className="reply body-3" onClick={showInput}>
                          Reply
                        </div>
                      </div>

                      <div className="body-2 users-comment">
                        {comment.content}
                      </div>
                      <Reply id={id} commentContent={comment.content} input={input} />

                      {comment.replies && comment.replies.map(reply => {
                              return (
                                <>
                                  <div className="replies">
                                    <div className="comment-profile">
                                      <img
                                      src={reply.user.image}
                                      alt="user-image"
                                      className="profile-image"
                                      />
                                      <div className="user-detail">
                                        <h4 className="username">{reply.user.name}</h4>
                                        <h4 className="user-account">
                                          @{reply.user.username}
                                        </h4>
                                      </div>
            
                                      <div className="reply body-3">Reply</div>
                                    </div>
                                    <div className="body-2 users-comment">
                                      {reply.content}
                                    </div>
                                  </div>
                                </>
                              )
                            })
                      }
                    </div>
                  </div>
                );
              })}
            </section>
          ) : <EmptyComment />}

          <AddComment id={id} comments={feed.comments ? feed.comments : undefined}/>
        </>
      ) : (
        <p>no feed yet</p>
      )}
    </main>
  );
};

export default FeedbackDetails;

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
import NoFeed from "./NoFeed";



const FeedbackDetails = ({ setId }) => {
  const [feed, setFeed] = useState(null);
  // const [input, setInput] = useState(false);
  const {id} = useParams()
  // const [isClicked, setIsClicked] = useState(false)
  const [commentClicked, setCommentClicked] = useState({})
 
  useEffect(() => {
    axios.get(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`)
      .then(response => {
        setFeed(response.data);
        // console.log(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(commentClicked);
  }, [commentClicked])

  const handleClick = (id) => {
    // console.log(id)
    // console.log(Object.keys(commentClicked).includes(`comment${id}`));
    setCommentClicked({
      ...commentClicked, 
      [`comment${id}`]: Object.keys(commentClicked).includes(`comment${id}`) ? !commentClicked[`comment${id}`] : true
    })
  }

  // const showInput = () => {
  //   if (input === true) {
  //     setInput(false);
  //   } else {
  //     setInput(true);
  //   }
  // };

  const setid = () => {
    setId(id)
  }

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
          className="suggestion"/>
           
          {feed.comments ? (
            <section className="comment sections">
              <h3>{`${feed.comments.replies ? feed.comments.replies.length + feed.comments.length : feed.comments.length}
              comment${feed.comments.length>1 ? "s" : ""}`}</h3>
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

                        <div className="reply body-3" onClick={() => handleClick(comment.id)}>
                          Reply
                        </div>
                      </div>

                      <div className="body-2 users-comment">
                        {comment.content}
                      </div>
                      {commentClicked[`comment${comment.id}`] && <Reply id={id} commentContent={comment.content} />}

                      {comment.replies && comment.replies.map(reply => {
                              return (
                                <>              
                                   <div className="replies" >
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
                  
                  
                    {comment.id  !== (feed.comments).length - 1 || <hr />}
                  </div>
                );
              })}
           
            </section>
          ) : <EmptyComment />}
          <AddComment id={id} comments={feed.comments ? feed.comments : undefined}/>
        </>
      ) : (
        <NoFeed/>
      )}
    </main>
  );
};

export default FeedbackDetails;

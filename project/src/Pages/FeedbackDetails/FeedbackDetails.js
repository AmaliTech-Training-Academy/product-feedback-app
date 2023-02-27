import React from "react";
import { useState, useEffect } from "react";
import "./FeedbackDetails.css";
// import axios from "axios";
import AddComment from "./AddComment";
import Suggestions from "../../Components/Suggestions/Suggestions";
import Head from "../../Components/Feedback/Head";
import { Link, useParams } from "react-router-dom";
import Reply from "./Reply";
import EmptyComment from "../../Components/EmptyComment/EmptyComment";
import NoFeed from "./NoFeed";
import { useSelector, useDispatch } from 'react-redux'
// import { findSingleFeed } from '../../features/feedback/feedbackSlice'



const FeedbackDetails = () => {
  // const [feed, setFeed] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const {id} = useParams()
  const [commentClicked, setCommentClicked] = useState({})
  const dispatch = useDispatch()
 

  const { feedbackItems, upvoted, feed } = useSelector(state => state.feedback)
  // const fetching = () => {
  //   axios.get(`http://localhost:8000/productRequests/${id}`)
  //   .then(response => {
  //     setFeed(response.data);
  //     setRefetch(false)
  //   });
  // }

  useEffect(() => {
    // dispatch(findSingleFeed(parseInt(id)))
    console.log(feed)
  }, [])

  // useEffect(() => {
    // console.log(feedbackItems.find(ele => ele.id === parseInt(id)))
  //   setFeed(feedbackItems.find(ele => ele.id === parseInt(id)))
  // }, [upvoted])


  const handleClick = (id) => {
    setCommentClicked({
      // ...commentClicked, 
      [`comment${id}`]: Object.keys(commentClicked).includes(`comment${id}`) ? !commentClicked[`comment${id}`] : true
    })
  }

  // useEffect(() => {
  //   fetching()
  // }, []);

  // useEffect(() => {
  //   if(refetch) {
  //     fetching()
  //   }  
  // }, [refetch])

  // const setfeed = () => {
  //   dispatch(findSingleFeed(parseInt(id)))
  // }
  return (
    <main>
      {feed ? (
        <>
          <section className="navigation">
            <Link to="/">
              <Head />
            </Link>
            <Link to={`/edit-feedback/${id}`}>
              <button className="btn btn-primary button-text edit-button">
                Edit Feedback
              </button>
            </Link>
          </section>
          <Suggestions
            item={feed}
            // title={feed.title}
            // category={feed.category}
            // status={feed.status}
            // upvote={feed.upvotes}
            // description={feed.description}
            // comments={feed.comments ? feed.comments : undefined}
            // className="suggestion"
            // id={id}
          />
           
          {feed.comments ? (
            <section className="comment sections">
              <h3>{`${feed.comments.replies ? feed.comments.replies.length + feed.comments.length : feed.comments.length}
              comment${feed.comments.length>1 ? "s" : ""}`}</h3>
              {feed.comments.map((comment) => {
                return (
                  <div key={`comment ${comment.id}`} className={`comment ${feed.comments.length - 1 === feed.comments.indexOf(comment) ? 'last' : undefined}`}>
                    <div className="comment-section">
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
                      {commentClicked[`comment${comment.id}`] && <Reply id={id} commentContent={comment.content} setRefetch={setRefetch} />}

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
                                  {commentClicked[`comment${comment.id}`] && <Reply id={id} commentContent={comment.content} setRefetch={setRefetch} />}
                                </>
                              )
                            })
                      }
                    </div>
                  
                  
                    {/* {comment.id  !== (feed.comments).length - 1 || <hr />} */}
                  </div>
                );
              })}
           
            </section>
          ) : <EmptyComment />}
          <AddComment id={id} setRefetch={setRefetch}/>
        </>
      ) : <NoFeed/>}
    </main>
  );
};

export default FeedbackDetails;

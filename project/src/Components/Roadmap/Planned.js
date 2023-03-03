import React, { useState, useEffect } from 'react'
import '../../Pages/roadmap/roadmap.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import { arrowUp } from '../svgs'
import axios from 'axios'
import { upvote, devote, saveFeedback } from '../../features/feedback/feedbackSlice'
import { useDispatch, useSelector } from 'react-redux'

const ComponentBox = ({id, subtitle, border, round, title, text, tag, upVotes, comments})=> {
  const dispatch = useDispatch()
  const { feedbackItems, upvoted } = useSelector(state => state.feedback)
  const [isUpvoted, setIsUpvoted] = useState(false)
  let data = JSON.parse(JSON.stringify(feedbackItems))

  // useEffect(() => {
  //   if(localStorage.getItem(`${id} upvoted`)) {
  //     localStorage.setItem(`${id} upvoted`, localStorage.getItem(`${props.id} upvoted`))
  //   }
  //   else {
  //     localStorage.setItem(`${props.id} upvoted`, JSON.stringify(false))
  //   }
  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem(props.id, localStorage.getItem(props.id))
  // }, [isUpvoted])

  const handleClick = () => {
    console.log(data)
    data.map(ele => {
      if(ele.id === id) {
        Object.keys(ele).map(key => {
          if(key === 'upvotes') {
            if(upvoted[id] === false) {
              ele[key] = upVotes + 1
              dispatch(upvote(id))
              axios.patch(`http://localhost:8000/productRequests/${id}`, {
                      upvotes: upVotes + 1
                    })
            } else {
              ele[key] = upVotes - 1
              dispatch(devote(id))
              axios.patch(`http://localhost:8000/productRequests/${id}`, {
                      upvotes: upVotes - 1
                    })
            }
          }
        })
      }
      return ele
    })
    dispatch(saveFeedback(data))

    // if(upvoted[id] === false) {
    //   axios.patch(`http://localhost:8000/productRequests/${id}`, {
    //       upvotes: upVotes + 1
    //     })
    //     .then(() => {
    //       dispatch(upvote(id))
    //     })
    // }
    // else {
    //   axios.patch(`http://localhost:8000/productRequests/${id}`, {
    //     upvotes: upVotes - 1
    //   })
    //   .then(() => {
    //     dispatch(devote(id))
    //   })
    // }
  }

    return(
        <> 
        <div className=''>
          <div className='plan-box' id={border}>
              <div className='plan-inner'>
              <div className='sub-faded'>
                  <p className='round-plan' id={round}></p>
                  <p className='plan-title-1 body-1'>{subtitle}</p>
              </div>
              <Link to={`/feedback-detail/${id}`}>
              <h3 className='plan-text-bold'  >{title}</h3></Link>
              <p className='plan-text-normal '>{text}</p>

                <div className='bottom-1'>
              <p className="tag body-3">{tag}</p>
            <div className="last-line">
                <div className={`up ${upvoted[id] && 'upvoted'}`} onClick={handleClick}>
                  <div className="inner-box-up">
                    {arrowUp}
                  <p className=" up-votes body-3">{upVotes}</p>
                </div>
              </div>
              <div className="other-line">
              <img className="comments-svg" src="../../assets/shared/icon-comments.svg"/>
              <p className="comments">{comments}</p>
              </div>
              </div>
            </div>
              </div>
          </div>
        </div>
        </>

    );
   

}


export default ComponentBox



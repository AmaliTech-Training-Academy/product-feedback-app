import React, { useState, useEffect } from 'react'
import '../../Pages/roadmap/roadmap.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { upvote, devote } from '../../features/feedback/feedbackSlice'
import { useDispatch, useSelector } from 'react-redux'

const ComponentBox = ({id, subtitle, border, round, title, text, tag, upvotes, comments})=> {
  const dispatch = useDispatch()
  const { upvoted } = useSelector(state => state.feedback)
  const [isUpvoted, setIsUpvoted] = useState(false)

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
    if(upvoted[id] === false) {
      axios.patch(`http://localhost:8000/productRequests/${id}`, {
          upvotes: upvotes + 1
        })
        .then(() => {
          dispatch(upvote(id))
        })
    }
    else {
      axios.patch(`http://localhost:8000/productRequests/${id}`, {
        upvotes: upvotes - 1
      })
      .then(() => {
        dispatch(devote(id))
      })
    }
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
                <div className={`up ${localStorage.getItem(`${id} upvoted`) === 'true' ? 'upvoted' : ''}`} onClick={handleClick}>
                  <div className="inner-box-up">
                  <svg  className="arrow-up"width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                  <p className=" up-votes body-3">{upvotes}</p>
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



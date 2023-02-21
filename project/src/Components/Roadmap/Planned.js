import React, { useState, useEffect } from 'react'
import '../../Pages/roadmap/roadmap.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ComponentBox = (props)=> {
  const [isUpvoted, setIsUpvoted] = useState(false)

  useEffect(() => {
    if(localStorage.getItem(`${props.id} upvoted`)) {
      localStorage.setItem(`${props.id} upvoted`, localStorage.getItem(`${props.id} upvoted`))
    }
    else {
      localStorage.setItem(`${props.id} upvoted`, JSON.stringify(false))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(props.id, localStorage.getItem(props.id))
  }, [isUpvoted])

  const handleClick = () => {
    if(localStorage.getItem(`${props.id} upvoted`) === 'false') {
      axios.patch(`http://localhost:8000/productRequests/${props.id}`, {
        upvotes: props.up + 1
      })
      .then(() => {
        props.setFetch(true)
      })
      localStorage.setItem(`${props.id} upvoted`, JSON.stringify(true))
      setIsUpvoted(true)
    }
    else {
      axios.patch(`http://localhost:8000/productRequests/${props.id}`, {
        upvotes: props.up - 1
      })
      .then(() => {
          props.setFetch(true)

      })
      localStorage.setItem(`${props.id} upvoted`, JSON.stringify(false))
      setIsUpvoted(false)
    }
  }

    return(
        <> 
        <div className=''>
          <div className='plan-box' id={props.border}>
              <div className='plan-inner'>
              <div className='sub-faded'>
                  <p className='round-plan' id={props.round}></p>
                  <p className='plan-title-1 body-1'>{props.subtitle}</p>
              </div>
              <Link to={`/feedback-detail/${props.id}`}>
              <h3 className='plan-text-bold'  >{props.title}</h3></Link>
              <p className='plan-text-normal '>{props.text}</p>

                <div className='bottom-1'>
              <p className="tag body-3">{props.tag}</p>
            <div className="last-line">
                <div className={`up ${localStorage.getItem(`${props.id} upvoted`) === 'true' ? 'upvoted' : ''}`} onClick={handleClick}>
                  <div className="inner-box-up">
                  <svg  className="arrow-up"width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                  <p className=" up-votes body-3">{props.up}</p>
                </div>
              </div>
              <div className="other-line">
              <img className="comments-svg" src="../../assets/shared/icon-comments.svg"/>
              <p className="comments">{props.comments}</p>
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



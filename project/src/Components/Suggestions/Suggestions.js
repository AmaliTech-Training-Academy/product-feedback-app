import React, { useState, useEffect } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { arrowUp } from '../svgs'


function Suggestions({id, title, category, status, upvote, description, comments, setFetch}) {
  // const [stateUpvote, setStateUpvote] = useState(upvote)
  const [isUpVoted, setIsUpVoted] = useState(false)
  // const [clicked, setClicked] = useState('')
  // useEffect(() => {
  //   window.localStorage.setItem(`${id} upvoted`, JSON.stringify(false))
  // }, [clicked])
  // useEffect(() => {
  //   window.localStorage.setItem(`${id} upvoted`, JSON.stringify(false))
  // }, [isUpVoted])

  const updateUpVote = (prev) => {
    // window.localStorage.setItem(`${id} upvoted`, JSON.stringify(false))
    // const nextUpvote = prev += 1
    // setStateUpvote(upvote)
    // console.log(upvote)
    if(localStorage.getItem(`${id} upvoted`) === 'false') {
      axios.patch(`http://localhost:8000/productRequests/${id}`, 
      {
        upvotes: prev += 1
      })
      .then(() => {
        setFetch(true)
        setIsUpVoted(true)
        // window.localStorage.setItem(`${id} upvoted`, JSON.stringify(true))
      })
      .then(() => {
        window.localStorage.setItem(`${id} upvoted`, JSON.stringify(true))
      })
      .catch((e) => {
        console.log(e)
      })
    }
    else {
      axios.patch(`http://localhost:8000/productRequests/${id}`, 
      {
        upvotes: prev -1
      })
      .then(() => {
        setFetch(true)
        setIsUpVoted(false)
      })
      .then(() => {
        window.localStorage.setItem(`${id} upvoted`, JSON.stringify(false))
      })
    }
  }

  return (
  <SuggestionContainer >
    <div className="suggestion-board ">
      <div className="right-components">
        <div className={`top-arrow ${localStorage.getItem(`${id} upvoted`) === 'true' ? 'clicked' : ''}`} onClick={() => updateUpVote(upvote)} isUpVoted={isUpVoted}>
          {arrowUp}
          <span>{upvote}</span>
        </div>
        <Link to={`/feedback-detail/${id}`} className="text">
          <span className='h3'>{title}</span>
          <span className='body-1'>{description}</span>
          <Enhancement>{category[0].toUpperCase() + category.slice(1)}</Enhancement>
        </Link>
      </div>
      <div className="left-components">
        <img src="/assets/shared/icon-comments.svg" alt=''/>
        <span>{comments ? comments.length : '0'}</span>
      </div>
    </div>
  </SuggestionContainer>
  )
}

export default Suggestions
import React, { useState } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Suggestions({id, title, category, status, upvote, description, comments, setFetch}) {
  const [stateUpvote, setStateUpvote] = useState(upvote)
  const updateUpVote = (prev) => {
    const nextUpvote = prev += 1
    // setStateUpvote(upvote)
    console.log(upvote)
    axios.patch(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, 
    {
      upvotes: nextUpvote
    })
    .then(() => {
      setFetch(true)
    })
    .catch((e) => {
      console.log(e)
    })
  }
  return (
  <SuggestionContainer >
    <div className="suggestion-board ">
      <div className="right-components">
        <div className="top-arrow" onClick={() => updateUpVote(stateUpvote)}>
          <img src="/assets/shared/icon-arrow-up.svg" alt=''/>
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
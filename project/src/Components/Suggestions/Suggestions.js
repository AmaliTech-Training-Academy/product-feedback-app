import React from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'



function Suggestions({id, title, category, status, upvote, description, comments}) {
  
  const updateUpVote = (id, upvote) => {
    axios.patch(`http://localhost:8000/productRequests/${id}`, 
    {
      upvotes: upvote += 1
    })
    .catch((e) => {
      console.log(e)
    })
    console.log(upvote)
  }
  return (
  <SuggestionContainer >
    <div className="suggestion-board">
      <div className="right-components">
        <div className="top-arrow">
          <img src="/assets/shared/icon-arrow-up.svg" alt=''/>
          <span onClick={() => updateUpVote(id, upvote)}>{upvote}</span>
        </div>
        <Link to={`/feedback-detail/${id}`} className="text">
          <span className='h3'>{title}</span>
          <span className='body-1'>{description}</span>

          <Enhancement>{category[0].toUpperCase() + category.slice(1)}</Enhancement>
        </Link>

      </div>
      <div className="left-components">
        <img src="/assets/shared/icon-comments.svg" alt=''/>
        {/* <span>2</span> */}
        <span>{comments ? comments.length : '0'}</span>
      </div>
    </div>
  </SuggestionContainer>
  )
}

export default Suggestions
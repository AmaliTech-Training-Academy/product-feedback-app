import React, { useState, useEffect } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { arrowUp } from '../svgs'


function Suggestions({id, title, category, status, upvote, description, comments, setFetch, selectedSortMethod, selectedCategory}) {
  const [isUpvoted, setIsUpvoted] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(id, JSON.stringify(upvote))
    // setStateUpvote(upvote)
    if(localStorage.getItem(`${id} upvoted`)) {
      localStorage.setItem(`${id} upvoted`, localStorage.getItem(`${id} upvoted`))
    }
    else {
      localStorage.setItem(`${id} upvoted`, JSON.stringify(false))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(id, localStorage.getItem(id))
  }, [isUpvoted])

  const updateUpVote = () => {
    if(localStorage.getItem(`${id} upvoted`) === 'false') {
      axios.patch(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, {
        upvotes: upvote + 1
      })
      .then(() => {
        if(selectedSortMethod === 'Select sort method' || !selectedCategory) {
          setFetch(true)
        }
      })
      // localStorage.setItem(id, JSON.stringify(JSON.parse(localStorage.getItem(id)) + 1))
      localStorage.setItem(`${id} upvoted`, JSON.stringify(true))
      setIsUpvoted(true)
    }
    else {
      axios.patch(`https://product-feedback-api-hry7.onrender.com/productRequests/${id}`, {
        upvotes: upvote - 1
      })
      .then(() => {
        if(selectedSortMethod === 'Select sort method' || !selectedCategory) {
          setFetch(true)
        }
      })
      // localStorage.setItem(id, JSON.stringify(JSON.parse(localStorage.getItem(id)) - 1))
      localStorage.setItem(`${id} upvoted`, JSON.stringify(false))
      setIsUpvoted(false)
    }
  }

  return (
  <SuggestionContainer >
    <div className="suggestion-board ">
      <div className="right-components">
        <div className={`top-arrow ${localStorage.getItem(`${id} upvoted`) === 'true' ? 'clicked' : ''}`} onClick={() => updateUpVote(upvote)}>
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
import React, { useState, useEffect } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { arrowUp } from '../svgs'


function Suggestions({item}) {
  // const [isUpvoted, setIsUpvoted] = useState(false)

  // useEffect(() => {
  //   if(localStorage.getItem(`${item.id} upvoted`)) {
  //     localStorage.setItem(`${item.id} upvoted`, localStorage.getItem(`${item.id} upvoted`))
  //   }
  //   else {
  //     localStorage.setItem(`${item.id} upvoted`, JSON.stringify(false))
  //   }
  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem(item.id, localStorage.getItem(item.id))
  // }, [isUpvoted])

  // const updateUpVote = () => {
  //   if(localStorage.getItem(`${item.id} upvoted`) === 'false') {
  //     axios.patch(`http://localhost:8000/productRequests/${item.id}`, {
  //       upvotes: upvote + 1
  //     })
  //     .then(() => {
  //       if(selectedSortMethod === 'Select sort method' || !selectedCategory) {
  //         setFetch(true)
  //       }
  //     })
  //     localStorage.setItem(`${item.id} upvoted`, JSON.stringify(true))
  //     setIsUpvoted(true)
  //   }
  //   else {
  //     axios.patch(`http://localhost:8000/productRequests/${item.id}`, {
  //       upvotes: upvote - 1
  //     })
  //     .then(() => {
  //       if(selectedSortMethod === 'Select sort method' || !selectedCategory) {
  //         setFetch(true)
  //       }
  //     })
  //     localStorage.setItem(`${item.id} upvoted`, JSON.stringify(false))
  //     setIsUpvoted(false)
  //   }
  // }

  return (
  <SuggestionContainer >
    <div className="suggestion-board ">
      <div className="right-components">
        <div className={`top-arrow ${localStorage.getItem(`${item.id} upvoted`) === 'true' ? 'clicked' : ''}`} >
          {arrowUp}
          <span>{item.upvotes}</span>
        </div>
        <Link to={`/feedback-detail/${item.id}`} className="text">
          <span className='h3'>{item.title}</span>
          <span className='body-1'>{item.description}</span>
          <Enhancement>{item.category[0].toUpperCase() + item.category.slice(1)}</Enhancement>
        </Link>
      </div>
      <div className="left-components">
        <img src="/assets/shared/icon-comments.svg" alt=''/>
        <span>{item.comments ? item.comments.length : '0'}</span>
      </div>
    </div>
  </SuggestionContainer>
  )
}

export default Suggestions
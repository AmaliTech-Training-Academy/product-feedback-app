import React, { useState, useEffect } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { upvote, devote } from '../../features/feedback/feedbackSlice'
import axios from 'axios'
import { arrowUp } from '../svgs'
import { findSingleFeed } from '../../features/feedback/feedbackSlice'


function Suggestions({item}) {
  const [vote, setVote] = useState(item.upvote)
  const dispatch = useDispatch()
  const { upvoted } = useSelector(state => state.feedback)
  const singleId = item.id

  const handleClick = () => {
    if(upvoted[item.id] === false) {
      axios.patch(`http://localhost:8000/productRequests/${item.id}`, {
          upvotes: item.upvotes + 1
        })
        .then(() => {
          dispatch(upvote(item.id))
        })
    }
    else {
      axios.patch(`http://localhost:8000/productRequests/${item.id}`, {
        upvotes: item.upvotes - 1
      })
      .then(() => {
        dispatch(devote(item.id))
      })
    }
  }


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
        <div className={`top-arrow ${upvoted[item.id] && 'clicked'}`} onClick={handleClick}>
          {arrowUp}
          <span>{item.upvotes}</span>
        </div>
        <Link to={`/feedback-detail/${item.id}`} className="text" onClick={() => dispatch(findSingleFeed(item.id))}>
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
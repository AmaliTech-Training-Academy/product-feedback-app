import React from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { upvote, devote } from '../../features/feedback/feedbackSlice'
import axios from 'axios'
import { arrowUp } from '../svgs'
import { findSingleFeed } from '../../features/feedback/feedbackSlice'


function Suggestions({item}) {
  const dispatch = useDispatch()
  const { upvoted } = useSelector(state => state.feedback)

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
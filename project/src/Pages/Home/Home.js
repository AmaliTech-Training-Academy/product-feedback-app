import React, { useState, useEffect } from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import MobileNav from '../../Components/Header/Mobile nav/MobileNav'
import {useSelector, useDispatch } from 'react-redux'
import { getFeedbacks, filterFeedbacks } from '../../features/feedback/feedbackSlice'
import { closeHeader } from '../../features/dropdown/dropdownSlice'
import { getCurrentUser } from '../../features/user/currentUserSlice'
import BeatLoader from 'react-spinners/BeatLoader'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function Home() {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState("#ffffff");
  const { isLoading, feedbackItems, upvoted } = useSelector(state => state.feedback)
  const { headerDropdown } = useSelector(state => state.dropdown)
  const dispatch = useDispatch()

  useEffect(() => {
    if(isLoading) {
      dispatch(getCurrentUser())
      dispatch(getFeedbacks())
    }
    // console.log(feedbackItems)
  }, [isLoading])

  useEffect(() => {
    dispatch(filterFeedbacks())
  }, [feedbackItems])

  const handleClick = () => {
    if(headerDropdown) {
      dispatch(closeHeader())
    }
  }
  return (
    <>
      <MobileNav />
      <div className='main-page' onClick={handleClick}>
        <Sidebar /> 
        <div className='body'>
          <Header type='home'/>
          {!isLoading ? 
          <>
            {feedbackItems.length > 0 ? feedbackItems.map((item) => {
              return (
                <div >
                  <Suggestions item={item}/>
                </div>
              )
            }): <EmptyComponent/>}
          </>
          : <BeatLoader className='loader' color="#373F68" size={25} />}
        </div>
      </div>
    </>
  )
}

export default Home
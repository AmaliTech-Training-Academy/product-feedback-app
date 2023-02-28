import React, {useEffect} from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import MobileNav from '../../Components/Header/Mobile nav/MobileNav'
import {useSelector, useDispatch } from 'react-redux'
import { getFeedbacks } from '../../features/feedback/feedbackSlice'
import { closeHeader } from '../../features/dropdown/dropdownSlice'
import { getCurrentUser } from '../../features/user/currentUserSlice'


function Home() {

  const { feedbackItems, upvoted } = useSelector(state => state.feedback)
  const { headerDropdown } = useSelector(state => state.dropdown)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  useEffect(() => {
    dispatch(getFeedbacks())
  }, [upvoted])

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
        <div>
          <Header type='home'/>
          {feedbackItems.length > 0 ? feedbackItems.map((item) => {
            return (
              <div >
                <Suggestions item={item}/>
              </div>
            )
          }): <EmptyComponent/>}
        </div>
      </div>
    </>
  )
}

export default Home
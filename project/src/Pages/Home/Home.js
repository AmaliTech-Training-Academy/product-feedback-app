import React, {useEffect, useState} from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import MobileNav from '../../Components/Header/Mobile nav/MobileNav'
import axios from 'axios'
import {useSelector, useDispatch } from 'react-redux'
import { getFeedbacks } from '../../features/feedback/feedbackSlice'
import { closeHeader, openHeader } from '../../features/dropdown/dropdownSlice'
import { getCurrentUser } from '../../features/user/currentUserSlice'


function Home() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectedSortMethod, setSelectedSortMethod] = useState('')
  const [fetch, setFetch] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const { isLoading, feedbackItems, upvoted } = useSelector(state => state.feedback)
  const { headerDropdown } = useSelector(state => state.dropdown)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  useEffect(() => {
    dispatch(getFeedbacks())
    // console.log(upvoted)
  }, [upvoted])

  const handleClick = () => {
    if(headerDropdown) {
      dispatch(closeHeader())
    }
  }

  // useEffect(() => {
  //   if(selectedCategory === 'all') {
  //     setFilteredData(data)
  //   } else {
  //     setFilteredData(data.filter(item => item.category === selectedCategory))
  //   }
  // }, [selectedCategory])

  // useEffect(() => {

  //   if(selectedSortMethod === 'Most Upvotes') {
  //     const sortedData = [...filteredData];
  //     sortedData.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1)
  //     setFilteredData(sortedData)
  //     // console.log(filteredData)
  //   }
  //   else if(selectedSortMethod === 'Least Upvotes') {
  //     const sortedData = [...filteredData]
  //     sortedData.sort((a, b) => a.upvotes > b.upvotes ? 1 : -1)
  //     setFilteredData(sortedData)
  //   }
  //   else if(selectedSortMethod === 'Most Comments') {
  //     const dataWithComments = filteredData.filter(item => item.comments)
  //     const dataWithoutComments = filteredData.filter(item => !item.comments)
  //     dataWithComments.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1)
  //     const sortedData = [...dataWithComments, ...dataWithoutComments]
  //     setFilteredData(sortedData)
  //   }
  //   else if(selectedSortMethod === 'Least Comments') {
  //     const dataWithComments = filteredData.filter(item => item.comments)
  //     const dataWithoutComments = filteredData.filter(item => !item.comments)
  //     dataWithComments.sort((a, b) => a.comments.length > b.comments.length ? 1 : -1)
  //     const sortedData = [...dataWithoutComments, ...dataWithComments]
  //     setFilteredData(sortedData)
  //   }
  // }, [selectedSortMethod])
  
//   const fetchingData = () => {
//     axios.get('http://localhost:8000/productRequests')
//     .then(res => {
//       setData(res.data)
//       setFilteredData(res.data)
//       setFetch(false)
//     })
// }

  // useEffect(() => {
  //   fetchingData()
  // }, [])

  // useEffect(() => {
  //   if(fetch) {
  //     fetchingData()
  //   }
  // }, [fetch])
  return (
    <>
      <MobileNav setSelectedCategory={setSelectedCategory} filteredData={filteredData}/>
      <div className='main-page' onClick={handleClick}>
        <Sidebar /> 
        <div>
          <Header type='home' data={feedbackItems} setSelectedSortMethod={setSelectedSortMethod}/>
          {feedbackItems.length > 0 ? feedbackItems.map((item) => {
            return (
              <div >
                <Suggestions 
                  item={item} 
                  // id={item.id} 
                  // title={item.title} 
                  // category={item.category} 
                  // status={item.status} 
                  // upvote={item.upvotes} 
                  // description={item.description} 
                  // comments={item.comments} 
                  // setFetch={setFetch}
                  // selectedSortMethod={selectedSortMethod}
                  // selectedCategory={selectedCategory}
                />
              </div>
            )
          }): <EmptyComponent/>}
        </div>
      </div>
    </>
  )
}

export default Home
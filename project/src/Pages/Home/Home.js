import React, {useEffect, useState} from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import axios from 'axios'


function Home({ selectedCategory, setSelectedCategory }) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectedSortMethod, setSelectedSortMethod] = useState('')
  const [fetch, setFetch] = useState(false)

  useEffect(() => {
    if(selectedCategory === 'all') {
      setFilteredData(data)
    } else {
      setFilteredData(data.filter(item => item.category === selectedCategory))
    }
  }, [selectedCategory])

  useEffect(() => {

    if(selectedSortMethod === 'Most Upvotes') {
      const sortedData = [...filteredData];
      sortedData.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1)
      setFilteredData(sortedData)
      // console.log(filteredData)
    }
    else if(selectedSortMethod === 'Least Upvotes') {
      const sortedData = [...filteredData]
      sortedData.sort((a, b) => a.upvotes > b.upvotes ? 1 : -1)
      setFilteredData(sortedData)
    }
    else if(selectedSortMethod === 'Most Comments') {
      const dataWithComments = filteredData.filter(item => item.comments)
      const dataWithoutComments = filteredData.filter(item => !item.comments)
      dataWithComments.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1)
      const sortedData = [...dataWithComments, ...dataWithoutComments]
      setFilteredData(sortedData)
    }
    else if(selectedSortMethod === 'Least Comments') {
      const dataWithComments = filteredData.filter(item => item.comments)
      const dataWithoutComments = filteredData.filter(item => !item.comments)
      dataWithComments.sort((a, b) => a.comments.length > b.comments.length ? 1 : -1)
      const sortedData = [...dataWithoutComments, ...dataWithComments]
      setFilteredData(sortedData)
    }
  }, [selectedSortMethod])
  
  const fetchingData = () => {
    axios.get('https://product-feedback-api-hry7.onrender.com/productRequests')
    .then(res => {
      setData(res.data)
      setFilteredData(res.data)
      setFetch(false)
    })
}

  useEffect(() => {
    fetchingData()
  }, [])

  useEffect(() => {
    if(fetch) {
      fetchingData()
    }
  }, [fetch])
  return (
    <>
      {/* <MobileNav setSelectedCategory={setSelectedCategory}/> */}
      <div className='main-page'>
        <Sidebar filteredData={filteredData} data={data} setSelectedCategory={setSelectedCategory}/> 
        <div>
          <Header type='home' data={filteredData} setSelectedSortMethod={setSelectedSortMethod}/>
          {filteredData.length > 0 ? filteredData.map((item) => {
            return (
              <div >
                <Suggestions 
                  item={item} 
                  id={item.id} 
                  title={item.title} 
                  category={item.category} 
                  status={item.status} 
                  upvote={item.upvotes} 
                  description={item.description} 
                  comments={item.comments} 
                  setFetch={setFetch}
                  selectedSortMethod={selectedSortMethod}
                  selectedCategory={selectedCategory}
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
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import axios from 'axios'


function Home({setItem}) {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (selectedCategory === 'All') setFilteredData(data);
    else setFilteredData(data.filter((item) => item.category === selectedCategory.toLowerCase()));
  }, [selectedCategory])

  useEffect(() => {
    axios.get('http://localhost:8000/productRequests')
    .then(res => {
      setData(res.data);
      setFilteredData(res.data);
      console.log(res.data)
    })

  }, []);

  return (
    <>
      <div className='main-page'>
        <Sidebar data={data} setData={setSelectedCategory}/> 
        <div>
          <Header />
          {filteredData.length > 0 ? filteredData.map((item) => {
            return (
              <>
                <Link to='/feedback-detail' onClick={() => setItem(item)}>
                  <Suggestions title={item.title} category={item.category} status={item.status} upvote={item.upvotes} description={item.description} comments={item.comments}/>
                </Link>
              </>
            )
          }): <EmptyComponent/>}
        </div>
      </div>
    </>
  )
}

export default Home
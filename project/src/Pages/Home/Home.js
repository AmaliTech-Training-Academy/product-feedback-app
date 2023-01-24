import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import axios from 'axios'


function Home({setItem}) {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/productRequests')
    .then(res => {
      setData(res.data )
      console.log(res.data)
    })

  }, [])
  return (
    <>
      <div className='main-page'>
        <Sidebar /> 
        <div>
          <Header />
          {data ? data.map((item) => {
            return (
              <>
                <Link to='/feedback-details' onClick={() => setItem(item)}>
                  <Suggestions title={item.title} category={item.category} status={item.status} upvote={item.upvotes} description={item.description} />
                </Link>
              </>
            )
          }) : <EmptyComponent />}
        </div>
      </div>
    </>
  )
}

export default Home
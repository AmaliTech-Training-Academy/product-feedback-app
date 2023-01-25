import React, {useEffect, useState} from 'react'
import './HomeStyles.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import EmptyComponent from '../../Components/EmptyComponent/EmptyComponent'
import Suggestions from '../../Components/Suggestions/Suggestions'
import axios from 'axios'


function Home() {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/productRequests')
    .then(res => {
      setData(res.data )
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
              <Suggestions />
            )
          }) : <EmptyComponent />}
        </div>
      </div>
    </>
  )
}

export default Home
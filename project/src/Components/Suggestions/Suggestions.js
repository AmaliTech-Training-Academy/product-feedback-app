import React, {useState, useEffect} from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import axios from 'axios'
import EmptyComponent from '../EmptyComponent/EmptyComponent'

function Suggestions() {

  const [data, setData] = useState(null)

  useEffect(()=> {
    axios.get('http://localhost:8000/productRequests')
    .then(response => {
      console.log(response)
      setData(response.data)
    })
  }, [])
  return (
    <>
    {data ? data.map((item) => {
      return (
        <SuggestionContainer>
        <div className="suggestion-board">
          <div className="right-components">
            <div className="top-arrow">
              <img src="./assets/shared/icon-arrow-up.svg"/>
              <span>{item.upvotes}</span>
            </div>
            <div className="text">
              <span className='h3'>{item.title}</span>
              <span className='body-1'>{item.description}</span>
              <Enhancement>{item.category[0].toUpperCase() + item.category.slice(1)}</Enhancement>       
            </div>
          </div>
          <div className="left-components">
            <img src="./assets/shared/icon-comments.svg"/>
            <span>{item.comments ? item.comments.length : '0'}</span>
          </div>
        </div>
      </SuggestionContainer>
      )
    }) 
    : <EmptyComponent /> 
  }
    </>
  )
}

export default Suggestions
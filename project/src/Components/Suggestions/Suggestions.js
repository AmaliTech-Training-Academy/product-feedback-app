import React, { useEffect, useState } from 'react'
import { SuggestionContainer } from './SuggestionStyles'
import { Enhancement } from '../Sidebar/SidebarStyles'
import axios from 'axios'

function Suggestions() {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/productRequests')
    .then(res => {
      setData(res.data )
    })

  }, [])
  return (
    <>
      {data && data.map((item) => {
        return (
        <SuggestionContainer>
          <div className="suggestion-board">
            <div className="right-components">
              <div className="top-arrow">
                <img src="./assets/shared/icon-arrow-up.svg" alt=''/>
                <span>{item.upvotes}</span>
              </div>
              <div className="text">
                <span className='h3'>{item.title}</span>
                <span className='body-1'>{item.description}</span>
                <Enhancement>{item.category}</Enhancement>
              </div>
            </div>
            <div className="left-components">
              <img src="./assets/shared/icon-comments.svg" alt=''/>
              <span>2</span>
            </div>
          </div>
       </SuggestionContainer>
        )
        })
      }
    </>
  )
}

export default Suggestions
import React, { useEffect, useState } from 'react'
import { RoadMap } from '../SidebarStyles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';


function Roadmap() {
  // const [data, setData] = useState([]);
  // const [planned, setPlanned] = useState([]);
  // const [inProgress, setInProgress] = useState([]);
  // const [live, setLive] = useState([]);
  const { feedbackItems, planned, inProgress, live } = useSelector(state => state.feedback)

  // useEffect(() => {
  //   axios.get('http://localhost:8000/productRequests')
  //   .then(res => {
  //   setData(res.data)
  //   setPlanned(res.data.filter(element => element.status.toLowerCase() === 'planned'))
  //   setInProgress(res.data.filter(element => element.status.toLowerCase() ==='in-progress'))
  //   setLive(res.data.filter(element => element.status.toLowerCase() === 'live'))
  // })
  // }, []);

  return (
    <RoadMap>
      <div className='roadmap-container'>
        <div className='roadmap-view'>
          <span className='h3'>Roadmap</span>
          <Link to={`${feedbackItems.length > 0 ? '/roadmap' : '/'}`}>
            <span className={`${feedbackItems < 1 ? 'in_active' : 'body-3'}`}>View</span>
          </Link>
        </div>
        <div className='roadmap-planned'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> Planned</span>
          </div>
          <span className={`${feedbackItems < 1 ? 'inactive' : 'num'}`}>{feedbackItems < 1 ? '0' : planned.length}</span>
        </div>
        <div className='roadmap-progress'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> In-progress</span>
          </div>
          <span className={`${feedbackItems < 1 ? 'inactive' : 'num'}`}>{feedbackItems < 1 ? '0' : inProgress.length}</span>
        </div>
        <div className='roadmap-live'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> Live</span>
          </div>
          <span className={`${feedbackItems < 1 ? 'inactive' : 'num'}`}>{feedbackItems < 1 ? '0' : live.length}</span>
        </div>
      </div>
    </RoadMap>
  )
}

export default Roadmap
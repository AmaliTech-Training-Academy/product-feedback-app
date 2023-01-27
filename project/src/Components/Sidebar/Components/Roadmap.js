import React, { useEffect, useState } from 'react'
import { RoadMap } from '../SidebarStyles'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Roadmap() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/productRequests')
    .then(res => {
      const dataWanted = res.data.slice(6);
      const dataWantedCounts = {};
      dataWanted.forEach((elt) => {
        if (elt.status.toLowerCase() !== 'suggestion') {
          console.log(Object.keys(dataWantedCounts))
          if (Object.keys(dataWantedCounts).includes(elt.status)) {
            dataWantedCounts[elt.status] += 1
          } else {
            dataWantedCounts[elt.status] = 1;
          }
        }
      });
      console.log(dataWantedCounts)
      setData(dataWantedCounts);
    })
  }, []);

  return (
    <RoadMap>
      <div className='roadmap-container'>
        <div className='roadmap-view'>
          <span className='h3'>Roadmap</span>
          <Link to='/roadmap'>
            <span className='body-3'>View</span>
          </Link>
        </div>
        <div className='roadmap-planned'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> Planned</span>
          </div>
          <span className='num'>{data?.planned || 0}</span>
        </div>
        <div className='roadmap-progress'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> In-progress</span>
          </div>
          <span className='num'>{data['in-progress'] || 0}</span>
        </div>
        <div className='roadmap-live'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> Live</span>
          </div>
          <span className='num'>{data?.live || 0}</span>
        </div>
      </div>
    </RoadMap>
  )
}

export default Roadmap
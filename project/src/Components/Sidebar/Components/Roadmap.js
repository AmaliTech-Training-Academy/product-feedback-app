import React from 'react'
import { RoadMap } from '../SidebarStyles'
import { Link } from 'react-router-dom'


function Roadmap() {
  return (
    <RoadMap>
      <div className='roadmap-container'>
        <div className='roadmap-view'>
          <span className='h3'>Roadmap</span>
          <Link to='/roadmap' span className='body-3'>View</Link>
        </div>
        <div className='roadmap-planned'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> Planned</span>
          </div>
          <span className='num'>2</span>
        </div>
        <div className='roadmap-progress'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> In-progress</span>
          </div>
          <span className='num'>3</span>
        </div>
        <div className='roadmap-live'>
          <div>
            <span className='dot'></span>
            <span className='body-1'> Live</span>
          </div>
          <span className='num'>1</span>
        </div>
      </div>
    </RoadMap>
  )
}

export default Roadmap
import React from 'react'
import { RoadMap } from '../SidebarStyles'


function Roadmap() {
  return (
    <RoadMap>
      <div className='roadmap-container'>
        <div className='roadmap-view'>
          <span className='h3'>Roadmap</span>
          <span className='body-3'>View</span>
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
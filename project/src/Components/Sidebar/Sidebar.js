import React from 'react'
import FrontendMentor from './Components/FrontendMentor'
import Tags from './Components/Tags'
import RoadMap from './Components/Roadmap'
import { Container } from './SidebarStyles'

function Sidebar({data, setData}) {
  return (
    <Container>
      <FrontendMentor />
      <Tags data={data} setData={setData}/>
      <RoadMap />
    </Container>
  )
}

export default Sidebar
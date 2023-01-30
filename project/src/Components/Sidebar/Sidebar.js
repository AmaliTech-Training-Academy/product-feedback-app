import React from 'react'
import FrontendMentor from './Components/FrontendMentor'
import Tags from './Components/Tags'
import RoadMap from './Components/Roadmap'
import { Container } from './SidebarStyles'

function Sidebar({data, setSelectedCategory}) {
  return (
    <Container>
      <FrontendMentor />
      <Tags data={data} setSelectedCategory={setSelectedCategory}/>
      <RoadMap />
    </Container>
  )
}

export default Sidebar
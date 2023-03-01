import React from 'react'
import FrontendMentor from './Components/FrontendMentor'
import Tags from './Components/Tags'
import RoadMap from './Components/Roadmap'
import { Container } from './SidebarStyles'

function Sidebar() {
  return (
    <Container>
      <FrontendMentor />
      <Tags/>
      <RoadMap/>
    </Container>
  )
}

export default Sidebar
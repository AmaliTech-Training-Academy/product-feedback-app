import React, { useState } from 'react'
import {
  Nav
} from './HeaderStyles'
import {arrowLeft} from '../svgs'

import {
    arrowDown, arrowUp,
    // arrowUp
} from '../../Components/svgs'
import { Link } from 'react-router-dom';

function Header({type, data, setSelectedSortMethod}) {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState('Most Upvotes')

  const handleOption = (name) => {
    setOption(name)
    setSelectedSortMethod(name)
    setIsOpen(!isOpen)
    setSelectedSortMethod(name)
  }
  return (
    <Nav type={type}>
        {type == 'home' ?
        <>
        <img src='./assets/suggestions/icon-suggestions.svg' alt='' className='suggestion-image' />
        <span className='h3 suggestions'>{data.length} Suggestions</span>
        <span className='h4 sort' onClick={() => setIsOpen(!isOpen)}>
            Sort by : <b>{option}</b>
            {isOpen ? arrowUp : arrowDown}
        </span>
        {isOpen && <div className='select'>
          <div className='options' onClick={() => handleOption('Most Upvotes')}>
            <span className='body-1 option'>Most Upvotes</span>
            {(option === 'Most Upvotes') && <img src='./assets/shared/icon-check.svg' alt=' 'className='check'/>}
          </div>
          <div className='options' onClick={() => handleOption('Least Upvotes')}>
            <span className='body-1 option'>Least Upvotes</span>
            {(option === 'Least Upvotes') && <img src='./assets/shared/icon-check.svg' alt=' 'className='check'/>}
          </div>
          <div className='options' onClick={() => handleOption('Most Comments')}>
            <span className='body-1 option'>Most Comments</span>
            {(option === 'Most Comments') && <img src='./assets/shared/icon-check.svg' alt=' 'className='check'/>}
          </div>
          <div className='options' onClick={() => handleOption('Least Comments')}>
            <span className='body-1 option'>Least Comments</span>
            {(option === 'Least Comments') && <img src='./assets/shared/icon-check.svg' alt=' 'className='check'/>}
          </div>
          </div>}
        </> 
        : 
        <div className='roadmap-link'>
          <Link className='roadmap-goback'>
            {arrowLeft}
            <span className='h4'>Go back</span>
          </Link>
          <span className='h1'>Roadmap</span>
        </div>
        }
        <Link to='/new-feedback'><button className='button-1-default add-feedback'>+ Add Feedback</button></Link>
    </Nav>
  )
}

export default Header
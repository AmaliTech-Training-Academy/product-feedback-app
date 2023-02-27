import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortFeedback } from '../../features/feedback/feedbackSlice'
import { Nav } from './HeaderStyles'
import {arrowLeft} from '../svgs'
import { openHeader, closeHeader } from '../../features/dropdown/dropdownSlice'
import { arrowDown, arrowUp } from '../../Components/svgs'
import { Link } from 'react-router-dom';

function Header({type, data, setSelectedSortMethod}) {
  const { headerDropdown } = useSelector(state => state.dropdown)
  // const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState('Select sort method')

  const dispatch = useDispatch()

  const handleOption = (name) => {
    dispatch(sortFeedback(name))
    setOption(name)
    if(headerDropdown) {
      dispatch(closeHeader())
    } else dispatch(openHeader())
    // setSelectedSortMethod(name)
    // setIsOpen(!isOpen)
    // setSelectedSortMethod(name)
  }

  const handleClick = () => {
    if(data.length > 0) {
      // setIsOpen(!isOpen)
      if(headerDropdown) {
        dispatch(closeHeader())
      } else dispatch(openHeader())
    }
  }
  return (
    <Nav type={type}>
        {type == 'home' ?
        <>
        <img src='./assets/suggestions/icon-suggestions.svg' alt='' className='suggestion-image' />
        <span className='h3 suggestions'>{data.length} Suggestions</span>
        <span className={`h4 ${data < 1 ? 'inactive' : 'sort'}`} onClick={handleClick}>
            Sort by : <b>{option}</b>
            {headerDropdown ? arrowUp : arrowDown}
        </span>
        {headerDropdown && <div className='select'>
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
          <Link to='/' className='roadmap-goback'>
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
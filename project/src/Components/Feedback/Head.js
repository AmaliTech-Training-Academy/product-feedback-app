import React from 'react'
import {
    Nav,
} from './FeedbackStyles'
import { useNavigate } from 'react-router';

function Head() {
  const navigate = useNavigate();
  return (
      <Nav>
        <img src='/assets/shared/icon-arrow-left.svg' alt='' />
        <span onClick={() => navigate(-1)} className='h4 back'>Go Back</span>
      </Nav>
  )
}

export default Head
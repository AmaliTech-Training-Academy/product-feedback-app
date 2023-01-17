import React from 'react'
import {
    Container
} from './FeedbackStyles'

function FeedbackCategory() {
  return (
    <Container>
        <span className='h4 title'>Category</span>
        <span className='h4 description'>Choose a category for your feedback</span>
        <div className='input'>
            <span className='body-2 placeholder'>Feature</span>
            <img className='down-arrow' src='./assets/shared/icon-arrow-down.svg' alt='' />
            <div className='select'>
                <div className='options'>
                    <span className='body-1 option'>Feature</span>
                </div>
                <div className='options'>
                    <span className='body-1 option'>UI</span>
                </div>
                <div className='options'>
                    <span className='body-1 option'>UX</span>
                </div>
                <div className='options'>
                    <span className='body-1 option'>Enhancement</span>
                </div>
                <div className='Bug'>bug</div>
            </div>
        </div>
    </Container>
  )
}

export default FeedbackCategory
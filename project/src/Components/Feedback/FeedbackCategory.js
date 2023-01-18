import React, { useState } from 'react'
import {
    Container
} from './FeedbackStyles'



function FeedbackCategory() {
    
    const [isClicked, setIsClicked] = useState(false)

    const [option, setOption] = useState('Feature')

    const handleOption = (name) => {
        setOption(name)
        setIsClicked(!isClicked)
    }
  return (
    <Container>
        <span className='h4 title'>Category</span>
        <span className='h4 description'>Choose a category for your feedback</span>
        <div className='input' onClick={() => setIsClicked(!isClicked)}>
            <span className='body-2 placeholder'>{option}</span>
            <img className='down-arrow' src={isClicked ? "./assets/shared/icon-arrow-up.svg" : "./assets/shared/icon-arrow-down.svg"} alt='' />
        </div>
        {isClicked && <div className='select'>
            <div className='options' onClick={() => handleOption('Feature')}>
                <span className='body-1 option'>Feature</span>
                {(option === 'Feature') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('UI')}>
                <span className='body-1 option'>UI</span>
                {(option === 'UI') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('UX')}>
                <span className='body-1 option'>UX</span>
                {(option === 'UX') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('Enhancement')}>
                <span className='body-1 option'>Enhancement</span>
                {(option === 'Enhancement') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options last' onClick={() => handleOption('Bug')}>
                <span className='body-1 option'>Bug</span>
                {(option === 'Bug') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
        </div>}
    </Container>
  )
}

export default FeedbackCategory
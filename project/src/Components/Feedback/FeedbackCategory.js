import React, { useState } from 'react'
import {Container} from './FeedbackStyles'
import { useSelector, useDispatch } from 'react-redux'
import { openCategory, closeCategory } from '../../features/dropdown/dropdownSlice' 



function FeedbackCategory(props) {
    const { categoryDropdown } = useSelector(state => state.dropdown)
    const dispatch = useDispatch()
    // const [isClicked, setIsClicked] = useState(false)

    // const [option, setOption] = useState('Feature')
    const handleClick = () => {
        if(categoryDropdown) {
            dispatch(closeCategory())
        } else dispatch(openCategory())
    }
    const handleOption = (name) => {
        props.setOption(name)
        if(categoryDropdown) {
            dispatch(closeCategory())
        } else dispatch(openCategory())
    }
  return (
    <Container>
        <span className='h4 title'>Category</span>
        <span className='h4 description'>Choose a category for your feedback</span>
        <div className='input' onClick={handleClick}>
            <span className='body-2 placeholder'>{props.option}</span>
            <img className='down-arrow' src={categoryDropdown ? "/assets/shared/icon-arrow-up.svg" : "/assets/shared/icon-arrow-down.svg"} alt='' />
        </div>
        {categoryDropdown && <div className='select'>
            <div className='options' onClick={() => handleOption('Feature')}>
                <span className='body-1 option'>Feature</span>
                {(props.option === 'Feature') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('UI')}>
                <span className='body-1 option'>UI</span>
                {(props.option === 'UI') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('UX')}>
                <span className='body-1 option'>UX</span>
                {(props.option === 'UX') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('Enhancement')}>
                <span className='body-1 option'>Enhancement</span>
                {(props.option === 'Enhancement') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options last' onClick={() => handleOption('Bug')}>
                <span className='body-1 option'>Bug</span>
                {(props.option === 'Bug') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
        </div>}
    </Container>
  )
}

export default FeedbackCategory
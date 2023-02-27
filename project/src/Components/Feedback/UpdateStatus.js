import React, { useState } from 'react'
import {Container} from './FeedbackStyles'
import { useSelector, useDispatch } from 'react-redux'
import { openOptions, closeOptions } from '../../features/dropdown/dropdownSlice'



function UpdateStatus(props) {
    const { optionsDropdown } = useSelector(state => state.dropdown)
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        if(optionsDropdown) {
            dispatch(closeOptions())
        }else dispatch(openOptions())
    }

    const handleOption = (name) => {
        props.setDetailOption(name)
        if(optionsDropdown) {
            dispatch(closeOptions())
        }else dispatch(openOptions())
    }
  return (
    <Container>
        <span className='h4 title'>Update Status</span>
        <span className='h4 description'>Change feature state</span>
        <div className='input' onClick={handleClick}>
            <span className='body-2 placeholder'>{props.detailOption}</span>
            <img className='down-arrow' src={optionsDropdown ? "/assets/shared/icon-arrow-up.svg" : "/assets/shared/icon-arrow-down.svg"} alt='' />
        </div>
        {optionsDropdown && <div className='select'>
            <div className='options' onClick={() => handleOption('Suggestion')}>
                <span className='body-1 option'>Suggestion</span>
                {(props.detailOption === 'Suggestion') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('Planned')}>
                <span className='body-1 option'>Planned</span>
                {(props.detailOption === 'Planned') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('In-Progress')}>
                <span className='body-1 option'>In-Progress</span>
                {(props.detailOption === 'In-Progress') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options last' onClick={() => handleOption('Live')}>
                <span className='body-1 option'>Live</span>
                {(props.detailOption === 'Live') && <img src='/assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
        </div>}
    </Container>
  )
}

export default UpdateStatus
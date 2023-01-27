import React, { useState } from 'react'
import {
    Container
} from './FeedbackStyles'



function UpdateStatus(props) {
    
    const [isClicked, setIsClicked] = useState(false)

    const handleOption = (name) => {
        props.setDetailOption(name)
        setIsClicked(!isClicked)
    }
  return (
    <Container>
        <span className='h4 title'>Update Status</span>
        <span className='h4 description'>Change feature state</span>
        <div className='input' onClick={() => setIsClicked(!isClicked)}>
            <span className='body-2 placeholder'>{props.detailOption}</span>
            <img className='down-arrow' src={isClicked ? "./assets/shared/icon-arrow-up.svg" : "./assets/shared/icon-arrow-down.svg"} alt='' />
        </div>
        {isClicked && <div className='select'>
            <div className='options' onClick={() => handleOption('Suggestion')}>
                <span className='body-1 option'>Suggestion</span>
                {(props.detailOption === 'Suggestion') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('Planned')}>
                <span className='body-1 option'>Planned</span>
                {(props.detailOption === 'Planned') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options' onClick={() => handleOption('In-Progress')}>
                <span className='body-1 option'>In-Progress</span>
                {(props.detailOption === 'In-Progress') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
            <div className='options last' onClick={() => handleOption('Live')}>
                <span className='body-1 option'>Live</span>
                {(props.detailOption === 'Live') && <img src='./assets/shared/icon-check.svg' alt='' className='check' />
                }
            </div>
        </div>}
    </Container>
  )
}

export default UpdateStatus
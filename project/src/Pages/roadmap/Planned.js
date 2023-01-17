import React from 'react'
import './roadmap.css'
import Bottom from './bottom';

const Planned = (props)=> {
    return(
        <>
        <div>
        <span>Planned{props.number}</span>
        <p>Ideas prioritized for research</p>
        </div>
        <div className='plan-box'>
            <div className='plan-inner'>
            <div className='sub-faded'>
                <p className='round-plan'></p>
                 <p className='plan-title-1'>Planned</p>
            </div>
            <p className='plan-text-bold'>{props.title}</p>
            <p className='plan-text-normal'>{props.text}</p>

            <Bottom
            tag="Feature"
            up="123"
            comments="2"
            />
            </div>
        </div>


        
        </>

    );
   

}


export default Planned



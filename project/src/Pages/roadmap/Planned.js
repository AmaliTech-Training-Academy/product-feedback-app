import React from 'react'
import './roadmap.css'
import Bottom from './bottom';
import '../../index.css'

const Planned = (props)=> {
    return(
        <>
        <div className=''>
       
        <div className='plan-box'>
            <div className='plan-inner'>
            <div className='sub-faded'>
                <p className='round-plan'></p>
                 <p className='plan-title-1 body-1'>Planned</p>
            </div>
            <h3 className='plan-text-bold'>{props.title}</h3>
            <p className='plan-text-normal'>{props.text}</p>

            <Bottom
            tag="Feature"
            up="123"
            comments="2"
            />
            </div>
        </div>


        </div>
        </>

    );
   

}


export default Planned



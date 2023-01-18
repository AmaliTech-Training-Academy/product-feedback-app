import React from 'react'
import './roadmap.css'
import Bottom from './bottom';
import '../../index.css'

const ComponentBox = (props)=> {
    return(
        <>
        <div className=''>
       
        <div className='plan-box' id={props.border}>
            <div className='plan-inner'>
            <div className='sub-faded'>
                <p className='round-plan' id={props.round}></p>
                 <p className='plan-title-1 body-1'>{props.subtitle}</p>
            </div>
            <h3 className='plan-text-bold'>{props.title}</h3>
            <p className='plan-text-normal body-1'>{props.text}</p>

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


export default ComponentBox



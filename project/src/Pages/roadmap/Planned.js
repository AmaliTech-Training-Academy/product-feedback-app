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

              <div>
            <p className="tag body-3">{props.tag}</p>
           <div className="last-line">
              <div className="up">
                <div className="inner-box-up">
                {/* <img className="arrow-up" src="../../assets/shared/icon-arrow-up.svg"/> */}
                <svg  className="arrow-up"width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <p className=" up-votes body-3">{props.up}</p>
              </div>
            </div>
            <div className="other-line">
            <img className="comments-svg" src="../../assets/shared/icon-comments.svg"/>
            <p className="comments">{props.comments}</p>
            </div>
            </div>
        </div>
            </div>
        </div>


        </div>
        </>

    );
   

}


export default ComponentBox



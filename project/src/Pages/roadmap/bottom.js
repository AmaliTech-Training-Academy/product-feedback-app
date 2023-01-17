import React from "react";
import './roadmap.css'
import {arrowUp} from '../../public/assets/shared/icon-arrow-up.svg'

const Bottom = (props) => {
    return(
        <>
        <div>
            <p className="tag">{props.tag}</p>
           <p>{arrowUp}</p>
            <span className="up">{props.up}</span>
            <span className="comments">{props.comments}</span>
        </div>
        </>
    )
}

export default Bottom
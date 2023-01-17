import React from "react";
import './roadmap.css'


const Bottom = (props) => {
    return(
        <>
        <div>
            <p className="tag body-3">{props.tag}</p>
           <div className="last-line">
            <div className="up">
            <p className=" body-3"id="inner-up"><img src="../../assets/shared/icon-arrow-up.svg"/>{props.up}</p>
            </div>
            <p className="comments">{props.comments}</p>
            </div>
        </div>
        </>
    )
}

export default Bottom
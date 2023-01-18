import React from "react";
import './roadmap.css'


const Bottom = (props) => {
    return(
        <>
        <div>
            <p className="tag body-3">{props.tag}</p>
           <div className="last-line">
              <div className="up">
                <div className="inner-box-up">
                <img className="arrow-up" src="../../assets/shared/icon-arrow-up.svg"/>
                <p className=" up-votes body-3">{props.up}</p>
              </div>
            </div>
            <div className="other-line">
            <img className="comments-svg" src="../../assets/shared/icon-comments.svg"/>
            <p className="comments">{props.comments}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Bottom
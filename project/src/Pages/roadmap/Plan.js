import React from "react";
import Planned from "./Planned";
import './roadmap.css'


function Plan(){
    return(
        <>
        <div className="roadmap-main">
        
       
      <div className="plan-st">
      <div>
        <h3>Planned(2)</h3>
        <p>Ideas prioritized for research</p>
        </div>
             <Planned
            number="3"
            title="More Comprehensive reports"
            text="It would be great to see a more detailed breakdown of solutions."
            />
            

      </div>
</div>
        </>
    );
}

export default Plan
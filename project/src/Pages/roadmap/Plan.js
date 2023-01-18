import React from "react";
import ComponentBox from "./Planned";
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
             <ComponentBox
             subtitle="Planned"
             border="plan"
             round="plan-round"
            number="3"
            title="More Comprehensive reports"
            text="It would be great to see a more detailed breakdown of solutions."
            />
      </div>
      <div className="plan-st">
      <div>
        <h3>In-Progress(3)</h3>
        <p>Currently being developed</p>
        </div>
             <ComponentBox
             subtitle="In Progress"
             border="progress"
             round="progress-round"
            number="3"
            title="More Comprehensive reports"
            text="It would be great to see a more detailed breakdown of solutions."
            />
      </div>
      <div className="plan-st">
      <div>
        <h3>Live(1)</h3>
        <p>Released features</p>
        </div>
             <ComponentBox
             subtitle="Live"
             border="live"
             round="live-round"
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
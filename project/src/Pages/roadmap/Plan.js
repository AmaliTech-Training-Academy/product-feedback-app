import React from "react";
import ComponentBox from "./Planned";
import './roadmap.css'
import productdata from '../../data/data.json'
import { useState,useEffect } from "react";
import ProductRequest from "../../Components/Header/ProductRequest";

function Plan(){
    const [PlannedRequestProducts, setPlannedRequestProduct] = useState([]);
    const [ProgressRequestProducts, setProgressRequestProduct] = useState([]);
    const [LiveRequestProducts, setLiveRequestProduct] = useState([]);
    // const [toggle1, setToggle1] = useState(true);
    // const [toggle2, setToggle2] = useState(true);
    // const [toggle3, setToggle4] = useState(true);




    const groupData=()=>{
        let planned=[]
        let progress =[]
        let live =[]
        

        productdata.productRequests.map((productRequest)=>{
            if(productRequest.status==='planned'){
                planned.push(productRequest);

            }
            if(productRequest.status==='in-progress'){
                progress.push(productRequest);
                
            }
            if(productRequest.status==='live'){
                live.push(productRequest);
                
            }
        })

       setPlannedRequestProduct(planned);
       setProgressRequestProduct(progress);
       setLiveRequestProduct(live);

    }
    useEffect(()=>{
        groupData()

    },[])

    // const handleClick = () => {
    //     setToggle1(!toggle1);
    //   };
      

    
    return(
        <>
        <nav>
          <ul>
            <li >Planned</li>
            <li>In-Progress</li>
            <li>Live</li>
          </ul>
        </nav>
    
        <div className="roadmap-main">
      <ProductRequest 
      title="Planned"
      subtitle="Ideas prioritized for research"
      productRequests={PlannedRequestProducts}
      border1="plan"
      round1="plan-round"
      />

      <ProductRequest
      title="In-Progress"
      subtitle="Currently being developed"
      productRequests={ProgressRequestProducts}
      border1="progress"
      round1="progress-round"
      />

       <ProductRequest
      title="Live"
      subtitle="Released features"
      productRequests={LiveRequestProducts}
      border1="live"
      round1="live-round"/>

      
     
</div>
        </>
    );
}

export default Plan
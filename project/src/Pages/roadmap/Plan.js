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
    
    return(
        <>
        <div className="roadmap-main">
      <ProductRequest
      title="Planned"
      subtitle="Ideas prioritized for research"
      productRequests={PlannedRequestProducts}
      />

      <ProductRequest
      title="In-Progress"
      subtitle="Currently being developed"
      productRequests={ProgressRequestProducts}/>

       <ProductRequest
      title="Live"
      subtitle="Released features"
      productRequests={LiveRequestProducts}/>

      
     
</div>
        </>
    );
}

export default Plan
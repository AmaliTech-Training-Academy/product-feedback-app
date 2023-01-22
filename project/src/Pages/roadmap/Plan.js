import React from "react";
import ComponentBox from "./Planned";
import './roadmap.css'
import productdata from '../../data/data.json'
import { useState,useEffect } from "react";
import ProductRequest from "../../Components/Roadmap/ProductRequest";
import TabNavItem from "../../Components/Tab";
import TabContent from "../../Components/TabContent";


function Plan(){
    const [PlannedRequestProducts, setPlannedRequestProduct] = useState([]);
    const [ProgressRequestProducts, setProgressRequestProduct] = useState([]);
    const [LiveRequestProducts, setLiveRequestProduct] = useState([]);
    const [activeTab, setActiveTab] = useState("tab1");




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
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
      

    
    return(
        <>
        <nav>
          <ul>
            {/* <li className={activeTab === "tab1" ? "active" : ""} >Planned</li>
            <li className={activeTab === "tab2" ? "active" : ""} >In-Progress</li>
            <li className={activeTab === "tab3" ? "active" : ""} >Live</li> */}
            <TabNavItem title="Planned" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="In-Progress" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Live" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
          </ul>
        </nav>
    
        <div className="roadmap-main">
        {/* {activeTab === "tab1" ? <PlannedRequestProducts/> : <ProgressRequestProducts/>} */}
        <TabContent id="tab1" activeTab={activeTab}>
      <ProductRequest
      title="Planned"
      subtitle="Ideas prioritized for research"
      productRequests={PlannedRequestProducts}
      border1="plan"
      round1="plan-round"
      /></TabContent>

     <TabContent id="tab2" activeTab={activeTab}>
      <ProductRequest
      id="tab2" 
      activeTab={activeTab}
      title="In-Progress"
      subtitle="Currently being developed"
      productRequests={ProgressRequestProducts}
      border1="progress"
      round1="progress-round"
      /></TabContent>

        <TabContent id="tab3" activeTab={activeTab}>
       <ProductRequest
       id="tab3" 
       activeTab={activeTab}
      title="Live"
      subtitle="Released features"
      productRequests={LiveRequestProducts}
      border1="live"
      round1="live-round"/>
      </TabContent>

      
     
</div>
        </>
    );
}

export default Plan
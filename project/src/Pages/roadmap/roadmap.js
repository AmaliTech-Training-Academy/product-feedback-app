import React from "react";
import './roadmap.css'
import {useState,useEffect} from "react";
import ProductRequest from "../../Components/Roadmap/ProductRequest";
import TabNavItem from "../../Components/Roadmap/Tab";
import TabContent from "../../Components/Roadmap/TabContent";
import axios from 'axios'


function Plan(){
    const [PlannedRequestProducts, setPlannedRequestProduct] = useState([]);
    const [ProgressRequestProducts, setProgressRequestProduct] = useState([]);
    const [LiveRequestProducts, setLiveRequestProduct] = useState([]);
    const [activeTab, setActiveTab] = useState("tab2");
    const [productdata, setProductData] = useState([])
   

    const groupData=()=>{
        let planned=[]
        let progress =[]
        let live =[]
       
        

        axios.get('http://localhost:8000/productRequests')
        .then((res)=>{
          let productdata = res.data;
          setProductData({productdata })

          productdata.map((productRequest)=>{
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
          
        })
        
          

       

      

    }
    useEffect(()=>{
        groupData()

    },[])
 
    return(

        <>
        <nav>
          <ul className="list1">
            <TabNavItem theStyle="plan-tag" title="Planned (2)" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem theStyle="progress-tag"title="In-Progress (3)" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem theStyle="live-tag" title="Live (1)" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
          </ul>
        </nav>
    <div className="small-screen">
        <div className="roadmap-main ">
     <TabContent id="tab1" activeTab={activeTab}>
      <ProductRequest
        title="Planned"
        subtitle="Ideas prioritized for research"
        productRequests={PlannedRequestProducts}
        border1="plan"
        round1="plan-round"
      />
    </TabContent>

     <TabContent id="tab2" activeTab={activeTab}>
      <ProductRequest
        id="tab2" 
        activeTab={activeTab}
        title="In-Progress"
        subtitle="Currently being developed"
        productRequests={ProgressRequestProducts}
        border1="progress"
        round1="progress-round"
      />
      </TabContent>

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
    </div>


        <div className="big-screen"> 
      <div className="roadmap-main">
     <ProductRequest
     title="Planned"
     subtitle="Ideas prioritized for research"
     productRequests={PlannedRequestProducts}
     border1="plan"
     round1="plan-round"
     />
     <ProductRequest
     id="tab2" 
     activeTab={activeTab}
     title="In-Progress"
     subtitle="Currently being developed"
     productRequests={ProgressRequestProducts}
     border1="progress"
     round1="progress-round"
     />
     <ProductRequest
      id="tab3" 
      activeTab={activeTab}
     title="Live"
     subtitle="Released features"
     productRequests={LiveRequestProducts}
     border1="live"
     round1="live-round"/>      
         </div>
      </div>

        </>
    );
    
}

export default Plan
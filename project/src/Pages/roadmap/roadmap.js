import React from "react";
import './roadmap.css'
import {useState,useEffect} from "react";
import ProductRequest from "../../Components/Roadmap/ProductRequest";
import TabNavItem from "../../Components/Roadmap/Tab";
import TabContent from "../../Components/Roadmap/TabContent";
import Header from "../../Components/Header/Header"
import axios from 'axios'


const Plan = (setRoad) => {
    const [PlannedRequestProducts, setPlannedRequestProduct] = useState([]);
    const [ProgressRequestProducts, setProgressRequestProduct] = useState([]);
    const [LiveRequestProducts, setLiveRequestProduct] = useState([]);
    const [activeTab, setActiveTab] = useState("tab2");
    const [fetch, setFetch] = useState(false)
   

    const groupData=()=>{
        axios.get('http://localhost:8000/productRequests')
        .then((res)=>{
          let productdata = res.data;
          setPlannedRequestProduct(productdata.filter((ele) => ele.status === 'planned' || ele.status === 'Planned'));
          setProgressRequestProduct(productdata.filter((ele) => ele.status === 'in-progress' || ele.status === 'In-Progress'));
          setLiveRequestProduct(productdata.filter((ele) => ele.status === 'live' || ele.status === 'Live')); 
        })
        .then(() => {
          setFetch(false)
        })
    }

    useEffect(() => {
      groupData()
  },[])

    useEffect(() => {
      if(fetch) {
        groupData()
      }
  },[fetch])
   
 
    return(
      <>
        <Header />
        <nav>
          <ul className="list1">
            <TabNavItem theStyle="plan-tag" title={`Planned (${PlannedRequestProducts.length})`} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem theStyle="progress-tag"title={`In-Progress  (${ProgressRequestProducts.length})`} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem theStyle="live-tag" title={`Live  (${LiveRequestProducts.length})`} id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
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
                setFetch={setFetch}
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
                setFetch={setFetch}
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
                round1="live-round"
                setFetch={setFetch}
                />
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
                setFetch={setFetch}
              />
              <ProductRequest
                id="tab2" 
                activeTab={activeTab}
                title="In-Progress"
                subtitle="Currently being developed"
                productRequests={ProgressRequestProducts}
                border1="progress"
                round1="progress-round"
                setFetch={setFetch}
              />
              <ProductRequest
                id="tab3" 
                activeTab={activeTab}
                title="Live"
                subtitle="Released features"
                productRequests={LiveRequestProducts}
                border1="live"
                round1="live-round"
                setFetch={setFetch}
              />      
            </div>
        </div>

      </>
    );
}

export default Plan
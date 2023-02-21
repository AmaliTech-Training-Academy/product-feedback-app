import React from "react";
import './roadmap.css'
import {useState,useEffect} from "react";
import ProductRequest from "../../Components/Roadmap/ProductRequest";
import TabNavItem from "../../Components/Roadmap/Tab";
import TabContent from "../../Components/Roadmap/TabContent";
import Header from "../../Components/Header/Header"
import axios from 'axios'
import { useSelector } from 'react-redux'


const Plan = (setRoad) => {
    // const [PlannedRequestProducts, setPlannedRequestProduct] = useState([]);
    // const [inProgress, setProgressRequestProduct] = useState([]);
    // const [LiveRequestProducts, setLiveRequestProduct] = useState([]);
    const [activeTab, setActiveTab] = useState("tab2");
    // const [fetch, setFetch] = useState(false)
    const { planned, inProgress, live } = useSelector(state => state.feedback)
   

  //   const groupData=()=>{
  //       axios.get('http://localhost:8000/productRequests')
  //       .then((res)=>{
  //         let productdata = res.data;
  //         setPlannedRequestProduct(productdata.filter((ele) => ele.status === 'planned' || ele.status === 'Planned'));
  //         setProgressRequestProduct(productdata.filter((ele) => ele.status === 'in-progress' || ele.status === 'In-Progress'));
  //         setLiveRequestProduct(productdata.filter((ele) => ele.status === 'live' || ele.status === 'Live')); 
  //       })
  //       .then(() => {
  //         setFetch(false)
  //       })
  //   }

  //   useEffect(() => {
  //     groupData()
  // },[])

  //   useEffect(() => {
  //     if(fetch) {
  //       groupData()
  //     }
  // },[fetch])
   
 
    return(
      <>
        <Header />
        <nav>
          <ul className="list1">
            <TabNavItem theStyle="plan-tag" title={`Planned (${planned.length})`} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem theStyle="progress-tag"title={`In-Progress  (${inProgress.length})`} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem theStyle="live-tag" title={`Live  (${live.length})`} id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
          </ul>
        </nav>
        <div className="small-screen">
          <div className="roadmap-main ">
            <TabContent id="tab1" activeTab={activeTab}>
              <ProductRequest
                title="Planned"
                subtitle="Ideas prioritized for research"
                productRequests={planned}
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
                productRequests={inProgress}
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
                productRequests={live}
                border1="live"
                round1="live-round"
                />
            </TabContent>      
          </div>
        </div>


        <div className="big-screen"> 
            <div className="roadmap-main">
              <ProductRequest
                title="Planned"
                subtitle="Ideas prioritized for research"
                productRequests={planned}
                border1="plan"
                round1="plan-round"
              />
              <ProductRequest
                id="tab2" 
                activeTab={activeTab}
                title="In-Progress"
                subtitle="Currently being developed"
                productRequests={inProgress}
                border1="progress"
                round1="progress-round"
              />
              <ProductRequest
                id="tab3" 
                activeTab={activeTab}
                title="Live"
                subtitle="Released features"
                productRequests={live}
                border1="live"
                round1="live-round"
              />      
            </div>
        </div>

      </>
    );
}

export default Plan
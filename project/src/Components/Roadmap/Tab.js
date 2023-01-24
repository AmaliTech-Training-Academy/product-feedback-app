import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab,theStyle}) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
  
 
   <li onClick={handleClick} className= {activeTab === id ? `${theStyle}` : "disabled" } >
     { title }
   </li>
 );
};
export default TabNavItem;
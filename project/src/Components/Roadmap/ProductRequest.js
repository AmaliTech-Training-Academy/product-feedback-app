import React, { useEffect, useState } from "react";
import ComponentBox from "./Planned";
import axios from 'axios'



const ProductRequest = ({title, productRequests, subtitle,border1,round1})=>{
   
    return(
        <>
         <div className="plan-st">
        <div className="top-part"> 
           
            <h3>{`${title} (${productRequests.length})`}</h3>
            <p>{subtitle}</p>
        </div>
            {productRequests.map((data, key) => {
               
                    return(
                        <ComponentBox key={key}
                        subtitle={data.status}
                        border={border1}
                        round={round1}
                        title={data.title}
                        text={data.description}
                        tag={data.category}
                        up={data.upvotes}
                        comments={data.comments?.length}
                    />
                    )

            })
        }
      </div>
        </>
    );
}


export default ProductRequest
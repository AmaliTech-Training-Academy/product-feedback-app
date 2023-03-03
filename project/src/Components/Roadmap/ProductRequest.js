import React from "react";
import ComponentBox from "./Planned";




const ProductRequest = ({title, productRequests, subtitle,border1,round1, setFetch})=>{
   
    return(
        <>
        <div className="plan-st">
        <div className="top-part"> 
           
            <h3>{`${title} (${productRequests.length})`}</h3>
            <p>{subtitle}</p>
        </div>
            {productRequests.length !== 0 ? productRequests.map((data, key) => {
               
                    return(
                        <ComponentBox key={key}
                        id={data.id}
                        subtitle={data.status}
                        border={border1}
                        round={round1}
                        title={data.title}
                        text={data.description}
                        tag={data.category}
                        upVotes={data.upvotes}
                        comments={data.comments?data.comments.length : '0'}
                    />
                    )

            })
         : <h1>no feed</h1>}
        </div>
        </>
    );
}


export default ProductRequest
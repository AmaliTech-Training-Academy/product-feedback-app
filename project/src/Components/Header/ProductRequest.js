import React from "react";
import ComponentBox from "../../Pages/roadmap/Planned";


const ProductRequest = ({title, productRequests, subtitle})=>{
    return(
        <>
         <div className="plan-st">
        <div>          
            <h3>{`${title}(${productRequests.length})`}</h3>
            <p>{subtitle}</p>
        </div>
            {productRequests.map((data, key) => {
                    return(
                        <ComponentBox key={key}
                        subtitle={data.status}
                        border="plan"
                        round="plan-round"
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
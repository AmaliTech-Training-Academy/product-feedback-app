import React, { useEffect, useState } from "react";
import ComponentBox from "../../Pages/roadmap/Planned";



const ProductRequest = ({title, productRequests, subtitle,border1,round1,id,activeTab})=>{
    const [myProduct, fetchMyProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/productRequests')
        .then((res) => res.json())
        .then((res) => {
            fetchMyProduct(res)
            // console.log(res);
        })
    }, []);
    // console.log(myProduct);   
    return(
        <>
         <div className="plan-st">
        <div className="top-part">       
            <h3>{`${title} (${productRequests.length})`}</h3>
            <p>{subtitle}</p>
        </div>
            {productRequests.map((data, key) => {
                // console.log(myProduct)
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
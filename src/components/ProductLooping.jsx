import { useFilterContext } from "../context/filter_context";
import ShowProducts from "./ShowProducts"

function ProductLooping() {
    const {filter_products}=useFilterContext();
    // console.log("productLooping.jsx",filter_products);
    
    return (
        <>
            <div>
            {filter_products.map((alldata)=>{
               return <ShowProducts key={alldata._id} {...alldata} {...filter_products}/>
            })}
            </div>

        </>
    )
}

export default ProductLooping
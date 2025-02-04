// import { useState } from "react"
import { useProductContext } from "../context/productContext"
import Products from "./Products";



function FeaturesProduct() {
  const { isLoading, featuersProducts } = useProductContext()
  if (isLoading) {
    return <div>..........is Loading</div>
  }
  // console.log("hello my data ",featuersProducts);

  return (
    <>
      <div>
        <div className="px-[120px] py-[10px] mt-20 mb-5">
          <div className="text-[10px] italic text-blue-700">CHECK NOW!</div>
          <div className="text-3xl italic">Our Feature Services</div>
        </div>
        <div className="flex px-[50px] justify-around items-center ">
          {featuersProducts.map((curElem) => {
            return <Products key={curElem._id} {...curElem} />
          })}
        </div>
      </div>

    </>

  )
}

export default FeaturesProduct
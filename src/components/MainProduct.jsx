import { useState } from "react"
import ProductLooping from "./ProductLooping"
import Search from "./Search"
// import ShowProducts from "./ShowProducts"


function MainProduct() {
  const [filter_products, setFilter_products] = useState([])
  return (
    <>
      <Search setFilter_products={setFilter_products} />  
      <ProductLooping filter_products={filter_products} />
    </>
  )
}

export default MainProduct
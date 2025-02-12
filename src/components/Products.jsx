import { NavLink } from "react-router-dom";
import FormetPrice from "../helpers/FormetPrice";


function Products(curElem) {

   const { _id, modelName, images, price, category,offers } = curElem;

   return (
      <>
         <NavLink to={`/SingleProduct/${_id}`}>
            <div className=" bg-white rounded-lg w-48 mb-11 ">
               <div className=" relative hover:scale-[110%]">

                  <span className="absolute right-0 top-0 m-3 bg-red-100 z-98 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{category}</span>

               
                  <img className=" rounded-t-lg p-5 overflow-hidden w-48 h-48 object-contain" src={images[Object.keys(images)[0]]} alt={modelName} />

               </div>

               <div className=" flex justify-between items-center text-[14px]">
                  <p className="mb-3 p-0 font-normal text-gray-700 dark:text-gray-400">{modelName}</p>

                  <p className="mb-3 font-normal text-blue-700 dark:text-blue-900">{<FormetPrice price={price}/>}</p>
               </div>
            </div>

         </NavLink>



      </>
   )
}

export default Products
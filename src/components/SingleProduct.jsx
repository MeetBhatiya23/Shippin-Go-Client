import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
// import { DiScriptcs } from "react-icons/di";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import FormetPrice from "../helpers/FormetPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsBox2HeartFill } from "react-icons/bs";
import { TbReplaceFilled } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import ReatingProducts from "./ReatingProducts";
import { useCartContext } from "../context/addcartContext";
import ProductZoom from "./ProductZoom";
import SuggetionProduct from "./SuggetionProduct";
import { useFilterContext } from "../context/filter_context";

const API = "http://localhost:3000/api/products";
function SingleProduct() {
  const { AddToCart } = useCartContext()
  const { _id } = useParams();
  const { getSingleProduct, isSingleLoding, singleProducts } = useProductContext();
  // console.log("67312856389756138925691238659138658913567",singleProducts);
  const {
    title,
    modelName,
    company,
    price,
    description,
    category,
    stars,
    stock,
    review,
    images,
    colours,
    offers,
    productType,
    dis_images,
    size
  } = singleProducts;

  const [selectedSize, setselectedSize] = useState('')

  // if (isSingleLoding) {
  //   return <div>....................is Loading</div>;
  // }
  const { filter_products } = useFilterContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toggle, setToggle] = useState(false);
  const [selectedColorq, setSelectedColorq] = useState([]);
  const [selectedhoverImg, setSelectedHoverImg] = useState([])
  const [togglehoverImg, setTogglehoverImg] = useState([])
  const [colourCollection, setcolourCollection] = useState(colours ? colours[0] : null)

  useEffect(() => {
    // When toggle is true, disable scroll by setting overflow to hidden
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);


  useEffect(() => {
    if (images) {
      setSelectedColorq(Object.entries(images)[0][1]);
      setSelectedHoverImg(Object.entries(images)[0][1])
    }
  }, [images]);
  useEffect(() => {
    setSelectedHoverImg(selectedColorq[0])
  }, [selectedColorq])

  useEffect(() => {
    console.log("singleProductId", singleProducts);
    console.log("_id", _id);

    if (!Object.keys(singleProducts)?.length) {
      getSingleProduct(`${API}/${_id}`);
    } else if (Object.keys(singleProducts)?.length && singleProducts?._id != _id) {
      getSingleProduct(`${API}/${_id}`);
    }
  }, [_id]);

  return (
    <>
      <div className="text-black pt-14 ">
        <div className="flex grow-4 gap-[20px] justify-evenly px-28 py-10">
          <div className="flex gap-[20px] justify-center ">
            <div className="w-20 h-20 object-cover">
              {selectedColorq?.length ? (
                <>
                  {selectedColorq.slice(0, 6).map((imgSrc, index) => {
                    return (
                      <>
                        <div key={index}>
                          <button className=" border border-[#0f0f0f] rounded-[10px]" onClick={() => setSelectedHoverImg(imgSrc)}>
                            <img src={imgSrc} className="p-1 rounded-[10px]" alt="image" />
                          </button>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <>No data found</>
              )}
            </div>
            <div className="flex justify-center items-center w-[400px] h-[400px]">
              {selectedhoverImg?.length ? (
                <>
                  <button className="cursor-all-scroll" onClick={() => setToggle(true)}>
                    <ProductZoom imageUrl={selectedhoverImg} />
                  </button>
                </>
              ) : (
                <div>not found</div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-7 ">
            <div className="flex flex-col gap-2">
              <div className="text-3xl">{title}</div>
              <div className="flex items-center gap-1">
                <ReatingProducts stars={stars} />
              </div>
            </div><hr />
            <div className="flex flex-col gap-2">
              <div>
                {offers > 0 &&
                  <div className="text-gray-700 ">
                    MRP :
                    <del className="text-red-600">
                      {/* <FormetPrice price={price} /> */}
                      <FormetPrice price={price} />
                    </del>
                  </div>
                }
              </div>
              <div className="flex justify-start items-end gap-2">
                <div className="text-lg text-gray-700 ">Deal of the Day :</div> <div className="text-4xl "><FormetPrice price={price * (100 - offers) / 100} /></div>
                {offers > 0 &&
                  <div className="text-red-700">( -{offers}% Offers )</div>
                }
              </div>
            </div>
            <div>
              <ul>
                {description?.map((data) => <li className="list-disc">{data}</li>)}
              </ul>
            </div>
            <hr />
            <div className="text-[14px] flex gap-3 items-center justify-around text-gray-700">
              <div className="flex justify-center items-center flex-col">
                <TbReplaceFilled className="text-[50px]  " />
                <p >7 Day Replace</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <TbTruckDelivery className="text-[50px]" />
                <p>Fast Delivered</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <RiSecurePaymentFill className="text-[50px] " />
                <p>Secured Payment</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <BsBox2HeartFill className="text-[50px] " />
                <p>Best Packing</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <MdSecurity className="text-[50px] " />
                <p>1 Years Warranty</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <IoMdTrophy className="text-[50px] " />
                <p>Top Brand</p>
              </div>
            </div><hr />
            <div>
              <div className="flex gap-2">
                Colours:
                <div className="text-gray-700">{/* {colours[0]} */}</div>
              </div>
              {colours?.length > 1 &&
                <div className="grid grid-cols-3">
                  {colours?.length ? (
                    <>
                      {Object.keys(images).map((Pcol, index) => {
                        console.log(Pcol, "--------------------------------------");
                        return (
                          <>
                            <button key={index}
                              onClick={() => { setSelectedColorq(images[Pcol]); setcolourCollection(Pcol) }}
                              className="border-[2px] border-[#0f0f0f] flex m-1 gap-1 justify-center items-center"
                            >
                              <div className="W-1">
                                <img
                                  className="w-[70px]"
                                  src={images[Pcol][0]}
                                  alt={modelName}
                                />
                              </div>
                              <div className="flex flex-col ">
                                <div >{Pcol}</div>
                                <div>{<FormetPrice price={price * (100 - offers) / 100} />}</div>
                              </div>
                            </button>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    <div>No Colour Found</div>
                  )}
                </div>}
            </div>
            <div>
              <div>Size : </div>
              <div className="flex gap-4">
                {size?.map((data) => {
                  return <div class="flex items-center mb-4 border border-collapse py-2 px-3 rounded-xl ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value={data}
                      onChange={(e) => setselectedSize(e.target.value)}
                      name="size"
                      className="w-4 h-4"
                      checked
                    />
                    <label
                      for="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {data}
                    </label>

                  </div>
                })}
              </div>
            </div>
            <div>
              <NavLink
                to="/addcart"
                onClick={() => AddToCart(modelName, images, colours, price, selectedSize, singleProducts, selectedColorq, colourCollection)}
              >
                <button className="flex justify-center gap-2 items-center bg-yellow-300 rounded-full border-gray-800 p-3 px-8">
                  <FaCartArrowDown />
                  Add To Cart
                </button>
              </NavLink>
            </div>
            <div>
              <div>Brand : {company}</div>
              <div>Model : {modelName}</div>
            </div>

          </div>
        </div>
      </div>
      <div>
        {/* {filter_products.map((alldata)=>{
               return <SuggetionProduct key={alldata._id} {...alldata} {...filter_products}/>
        })} */}
        <SuggetionProduct />
      </div>

      <div>
        {dis_images?.map((img) => {
          return <>
            <div>
              <img src={img} className="w-full" alt="" />
            </div>
          </>
        })}

      </div>




      {/* POP UP - Product All Images Show In Box -------------------------------------------------------------------  */}

      {toggle &&
        < div id="static-modal" data-modal-backdrop="static" tabIndex="-1" className="px-40 bg-[#acabab50]  h-screen w-screen fixed top-0 right-0 left-0 justify-center items-center md:inset-0 z-[1000]">
          <div className="relative p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {modelName}
                </h3>
                <button type="button" onClick={() => setToggle(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                  <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6">
                    </path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className=" space-y-4 bg-white flex items-center justify-end gap-[300px] w-full ">
                <div className="relative left-12">
                  {
                    selectedhoverImg?.length ? (
                      <>
                        <img className="w-[500px] h-[500px] object-scale-down relative left-[125px]" src={selectedhoverImg} alt={modelName} />
                      </>
                    ) : (
                      <div>No Data Found</div>
                    )
                  }
                </div>
                <div className="flex justify-end">
                  <div className="grid grid-cols-4 overflow-auto pr-28 ">
                    {selectedColorq.map((toggleImg, index) => {
                      return <>
                        <button key={index} onClick={() => setSelectedHoverImg(toggleImg)} className="border border-[2px] m-1 rounded-[5px] border-[#0f0f0f]">
                          <img className="w-36" src={toggleImg} alt="" />
                        </button>
                      </>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SingleProduct;

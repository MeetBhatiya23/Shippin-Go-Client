import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import FormetPrice from "../helpers/FormetPrice";
import { useState } from "react";
import { toast } from "sonner";
import { useCartContext } from "../context/addcartContext.jsx";
function ShowCartData(selectedData, { setAlretToggle }) {
  const { modelName, images, prices, offers, colours, max, id, amount, size } =
    selectedData;
  const { removeItem, Plus, Minus } = useCartContext();
  // console.log(amount);
  let Filterprice = (prices * (100 - offers)) / 100;
  let subtotal = amount * Filterprice;
  // console.log(subtotal, "ihqauasdhfgouisdhgoisdfhgboh");

  return (
    <>
      <div className="grid grid-cols-7 mt-5 pb-5 border-b border-gray-300">
        {images && images[0] ? (
          <>
            <img className="col-span-1" src={images[0]} alt="" />
          </>
        ) : (
          <></>
        )}

        <div className="col-span-2 flex flex-col gap-2">
          <div className="text-xl">
            {modelName} -{colours}
          </div>
          <div className="text-green-600 text-sm">In stock</div>
          <div className="text-sm">Eligible for Free Shipping</div>
          <div className="text-sm">
            <b>Colour</b> : {colours}
          </div>
          <div className="text-sm">
            <b>Size</b> : {size}
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div>{<FormetPrice price={Filterprice} />}</div>
        </div>
        <div className="flex justify-around items-center">
          <button onClick={() => Plus(id)}>
            <FaPlus />
          </button>
          <div className="text-3xl">{amount}</div>
          <button onClick={() => Minus(id)}>
            <FaMinus />
          </button>
        </div>
        <div className="flex justify-around items-center">
          <div>{<FormetPrice price={subtotal} />}</div>
        </div>
        <div className="flex justify-around cursor-pointer items-center">
          <button onClick={() => setAlretToggle(true)}>
            <RiDeleteBin6Fill
              onClick={() => {
                removeItem(id);
              }}
              className="text-red-600 text-xl"
            />
          </button>
        </div>
      </div>
      <hr />
      {/* -------------------Modal for delete product------------------- */}
    </>
  );
}

export default ShowCartData;

import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/addcartContext";
import ShowCartData from "./ShowCartData";
import TotalPrice from "../helpers/TotalPrice";

function AddCart() {
    const { cart, total_price, total_item } = useCartContext();
    console.log("Cart data:", cart);


    return (
        <div className="p-20">
            <div className="text-4xl border-b pb-7 border-gray-300">Shopping Cart</div>
            {cart?.length !== 0 ? (
                <>
                    <div className="grid grid-cols-7 justify-around text-xl text-gray-500 mt-12 mb-10 ">
                        <div></div>
                        <div>Product Details</div>
                        <div></div>
                        <div className="flex justify-around items-center">Shipping Price</div>
                        <div className="flex justify-around items-center">Qty</div>
                        <div className="flex justify-around items-center">Subtotal Price</div>
                        <div className="flex justify-around items-center">Delete</div>
                    </div>
                    {cart?.map((selectedData) => (
                        <ShowCartData key={selectedData._id} {...selectedData} />
                    ))}
                    <div className="grid grid-cols-6 mt-8 mb-8">
                        <div className="text-3xl col-span-4">Final Total</div>
                        {/* <div className="col-start-5 grid justify-end gap-4">
                            <div>All Total :</div>
                            <div>Total Item : </div>
                            <hr />
                            <div className="mt-5">Your Payment : </div>
                        </div> */}

                        <div className="col-span-2">
                            <TotalPrice prices={total_price} items={total_item} />
                        </div>

                    </div>
                    <div className="grid mt-10 grid-cols-6">
                        <div className="col-start-1 flex justify-center">
                            <NavLink to="/allproducts">
                                <button className="text-white bg-green-600 p-3 hover:bg-green-900">More Shopping</button>
                            </NavLink>
                        </div>
                        <div className="col-start-6 flex justify-center">
                            <button className="flex justify-center items-center bg-yellow-500 p-3 hover:bg-yellow-700">Proceed to Pay</button>
                        </div>
                    </div>
                </>
            ) : (
                <div>Not Add Any Product Of Your Cart</div>
            )}
        </div>
    );
}

export default AddCart;

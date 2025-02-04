import React from "react";
import FormetPrice from "./FormetPrice";

function TotalPrice(props) {
    const { prices, items } = props;
    console.log(prices);

    return (
        <div>
            <div className="grid grid-cols-2 ">
                {/* <div className="col-span-1  justify-end gap-4">
                    <div className='flex justify-end'>All Total :</div>
                    <div className='flex justify-end'>Total Item : </div>
                    <hr />
                    <div className="mt-3">Your Payment : </div>
                </div>
                <div className="col-span-1 grid justify-around gap-4">
                    <div className='text-gray-600'>{<FormetPrice price={prices} />}</div>
                    <div className='text-gray-600'>awrfawr</div>
                    <hr />
                    <div className=" text-gray-600">{<FormetPrice price={prices} />}</div>
                </div> */}

                <div className="col-span-1">
                    <div className="flex flex-col items-end gap-3">
                        <div className="flex justify-between">
                            <div>All Total:</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Total Item: </div>
                        </div>
                        <div className="flex justify-between">
                            <div>Your Payment:</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col items-end gap-3">
                        <div className="flex justify-between">
                            <div>{<FormetPrice price={prices} />}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>{items} </div>
                        </div>
                        <div className="flex justify-between">
                            <div>{<FormetPrice price={prices} />}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalPrice;

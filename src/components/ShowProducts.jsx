// import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import FormetPrice from "../helpers/FormetPrice";
import { NavLink } from "react-router-dom";
import ReatingProducts from "./ReatingProducts";
import { useCartContext } from "../context/addcartContext";
import { useProductContext } from "../context/productContext";
// import { useFilterContext } from "../context/filter_context";
function ShowProducts(alldata) {
    // const API = "http://localhost:3000/api/products";
    // console.log("alldata:", alldata);
    const { getSingleProduct, isSingleLoding, singleProducts } = useProductContext();
    const { AddToCart } = useCartContext()

    const {
        _id,
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
        offers
    } = alldata

    // const {
    //     title,
    //     modelName,
    //     company,
    //     price,
    //     description,
    //     category,
    //     stars,
    //     stock,
    //     review,
    //     images,
    //     colours,
    //     offers,
    //     productType,
    //     dis_images
    //   } = singleProducts;

    // console.log(images);

    //  images : {
    //[ black: [],
    // red: [],
    // white:"",
    // green: []]
    // }

    let imagesArr = images[Object.keys(images)[0]][0]

    return (
        <>
            <div className="p-10 flex">
                <NavLink to={`/SingleProduct/${_id}`}>
                    <div>
                        <img className="min-w-72 max-w-72 h-[280px] object-contain  object-bottom cursor-pointer hover:scale-110 transition ease-in-out duration-500" src={imagesArr} alt="" />
                    </div></NavLink>
                <div className="pl-5 flex flex-col gap-3">
                    <NavLink to={`/SingleProduct/${_id}`}>
                        <div className="text-xl hover:text-[#3f5cff] cursor-pointer" >{title}</div>
                        <div>
                            <div className="flex items-center gap-1">

                                <ReatingProducts stars={stars} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-3xl cursor-pointer"><FormetPrice price={price * (100 - offers) / 100} /></div>
                            {offers > 0 &&
                                <div className="flex items-end pl-2 text-md">M.R.P : <del className="text-sm pl-1 text-gray-600"><FormetPrice price={price} /></del></div>
                            }
                        </div>
                    </NavLink>
                    {offers > 0 &&
                        <div className="text-[15px]">({offers}% Off)</div>
                    }
                    <div className="text-[12px]">Save extra with No Cost EMISave extra with No Cost EMI</div>
                    <div className="text-sm">
                        <div>FREE delivery Wed, 2 Oct </div>
                        <div>Or fastest delivery Mon, 30 Sept</div>
                    </div>
                    <div>
                        {/* <NavLink
                            to="/addcart"
                            onClick={() => AddToCart(modelName, images, colours, price, singleProducts, selectedColorq, colourCollection)}
                        >
                            <button className="flex justify-center gap-2 items-center bg-yellow-300 rounded-full border-gray-800 p-3 px-8">
                                <FaCartArrowDown />
                                Add To Cart
                            </button>
                        </NavLink> */}
                        <button className="flex text-sm justify-center gap-2 items-center bg-yellow-300 rounded-full border-gray-800 p-1 px-4 py-2">
                            <FaCartArrowDown />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowProducts
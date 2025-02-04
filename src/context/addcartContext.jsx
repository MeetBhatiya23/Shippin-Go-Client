import { json } from "react-router-dom";
import reducer from "../reducer/addcartReducer"
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext()

const getCartData = () => {
    const getLocalStorageData = localStorage.getItem("CartData")
    if (!getLocalStorageData) {
        return []
    }
    else {
        return JSON.parse(getLocalStorageData)
    }
}
const initialState = {
    // cart: [],
    cart: getCartData(),
    total_item: "",
    total_price: "",
    // same_product:""


}


const CardProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const AddToCart = (modelName, images, colours, price,selectedSize, singleProducts, selectedColorq, colourCollection) => {
        // console.log(price);

        dispatch({ type: "ADD_TO_CART", payload: { modelName, images, colours, price,selectedSize, singleProducts, selectedColorq, colourCollection } })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVR_ITEM", payload: id })
    }
    const Plus = (id) => {
        dispatch({ type: "SET_PLUSAMOUNT", payload: id })
    }
    const Minus = (id) => {
        dispatch({ type: "SET_MINUSAMOUNT", payload: id })
    }
    useEffect(() => {
        dispatch({type:"TOTAL_ITEM"})
        dispatch({type:"TOTAL_PRICE"})
        localStorage.setItem("CartData", JSON.stringify(state.cart))

    }, [state.cart])




    return <CartContext.Provider value={{ ...state, AddToCart, removeItem, Plus, Minus }}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext)
}
export default CardProvider
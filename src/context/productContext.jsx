import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"
// Adjust the path as necessary


const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featuersProducts: [],
    isSingleLoding: false,
    singleProducts: {}

}

const appContext = createContext()
const API = 'https://shopping-go-backend-peach.vercel.app/api/products'
// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate)
    useEffect(() => {
        getProducts(API)
    }, [])

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const res = await axios.get(url)
            const products = await res.data
            dispatch({ type: "SET_API_DATA", payload: products })

            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    //---------------------------------- SinglePage Product Show in reducers -------------------------------------
    // const SAPI=`http://localhost:3000/api/products/${_id}`
    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProducts = await res.data
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProducts })
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            dispatch({ type: 'SET_SINGLE_ERROE' })
        }
    }



    return (
        <appContext.Provider value={{ ...state, getSingleProduct }} >
            {children}
        </appContext.Provider>
    )
}


export const useProductContext = () => {
    return useContext(appContext)
}

export default AppProvider
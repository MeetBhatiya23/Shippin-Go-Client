// import Products from "../components/Products";


const productReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADER":
            return {
                ...state,
                isLoading: true
            };
        case "SET_API_DATA":
            {
                const featuersData = action.payload.filter((curElem) => {
                    return curElem.feature === true;
                });
                // console.log(featuersData);

                return {
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    featuersProducts: featuersData
                }
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_LOADING":
            return {
                ...state,
                isSingleLoding: true
            }
        case "SET_SINGLE_PRODUCT":

            return {
                ...state,
                isSingleLoding: false,
                singleProducts: action.payload
            }
        case "SET_SINGLE_ERROE":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default productReducer
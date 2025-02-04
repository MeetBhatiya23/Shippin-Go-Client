import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";


const FilterContext = createContext();

const initialstate = {
    filter_products: [],
    all_products: [],
    filter: {
        text: "",
        company:"",
        productType:""
    }
};




// eslint-disable-next-line react/prop-types
const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialstate);

    console.log("initialstate.filter.company",initialstate.filter.productType);
    
    // Update the Filter Value
    const updateFilter = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log("value only",value);
        dispatch({ type: "UPDATE_FILTER_DATA", payload: { name, value } });
    };

    // Load products and apply the filter when products or filter text changes
    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
        dispatch({ type: 'FILTER_PRODUCT' }); // Apply the filter after loading products
    }, [products, state.filter]);

    return (
        <FilterContext.Provider value={{ ...state, updateFilter,initialstate }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};

export default FilterContextProvider;

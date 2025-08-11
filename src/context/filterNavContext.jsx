import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const filterNavContext = createContext()

const FilterNavProvider = ({ children }) => {
    const [seletedCompany, setSeletedCompany] = useState([])
    const [alldata, setAlldata] = useState([])
    const API = "https://shopping-go-backend-peach.vercel.app/api/products";


    useEffect(() => {

        const getData = async () => {
            const res = await axios.get(API)
            setAlldata(res.data)
        }
        getData()
    }, [])

    const filterProductType = alldata.filter((data) => data.productType.toLowerCase() === "mobile")
    const uniqueCompanies = Array.from(
        new Set(filterProductType.map(data => data.company.trim()))
    );
    // let selectedData = uniqueCompanies.filter((data) => data == seletedCompany?.filter((select) => data == select))
    // console.log(selectedData);

    const isSelect = (isChecked, companyName) => {
        console.log("isChecked", !isChecked);

        if (isChecked) {
            setSeletedCompany((prevCompany) => ([
                ...prevCompany, companyName
            ]))
            return;
        }
        else if (!isChecked) {
            setSeletedCompany(() => seletedCompany.filter((company) => company !== companyName))
            return;
        }
    }
    console.log("isSelect", seletedCompany);


    const allContextData = {
        seletedCompany,
        setSeletedCompany,
        alldata,
        setAlldata,
        // selectedData,
        isSelect,
        uniqueCompanies
    }

    return <filterNavContext.Provider value={allContextData}>{children} </filterNavContext.Provider>
}

export const useNavFilterContext = () => {
    return useContext(filterNavContext)
}

export default FilterNavProvider
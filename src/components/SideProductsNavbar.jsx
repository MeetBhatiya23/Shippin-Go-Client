import { useState } from "react";
import categories from "../constant/category.json"; // Adjust the import path as necessary
import Fashion from "./Fashion";
import { useFilterContext } from "../context/filter_context";
import { useEffect } from "react";

function SideProductsNavbar() {
  // const { seletedCompany, setSeletedCompany, alldata, setAlldata, isSelect, uniqueCompanies } = useNavFilterContext()
  const { all_products, updateFilter, initialstate } = useFilterContext();
  const [targetVlaue, setTargetVlaue] = useState("");
  // const clickPRoductType =
  // console.log("state.filter.productType",updateFilter(value));
  console.log("targetValue", targetVlaue);
  

  const getTypeUnicsData = (data, type) => {
    let newCaregories = data?.map((cureElem) =>
      cureElem[type].trim().toLowerCase()
    );
    return (newCaregories = ["All", ...new Set(newCaregories)]);
  };
  let productTypeOnlyData = getTypeUnicsData(all_products, "productType");
//   console.log("productTypeOnlyData", productTypeOnlyData);
//   useEffect(() => {
//     if (targetVlaue === "All") {
//       productTypeOnlyData += all_products;
//     }
//   }, [targetVlaue]);
  const getunicsData = (data, type) => {
    let newPtype = data?.filter(
      (producttype) => producttype.productType.toLowerCase() == targetVlaue
    );
    let newVal = newPtype?.map((curElem) => curElem[type].trim());
    console.log(newPtype);
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const companyOnlyData = getunicsData(all_products, "company");
  console.log(companyOnlyData);

  const { electronics, "home & kitchen": homeKitchen } = categories;
  const maincategory = [
    { title: "Electronics", items: electronics },
    { title: "Home & kitchen", items: homeKitchen },
  ];

  const [toggle, setToggle] = useState({});
  const [subToggle, setSubToggle] = useState({});
  const [rangSelecter, setRangSelecter] = useState("");

  // const FiletrRangePrice =
  const toggleCategory = (title) => {
    setToggle((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const SubHandleToggle = (mainTitle, subCategory) => {
    const key = `${mainTitle}_${subCategory}`;
    setSubToggle((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <div className="px-3 py-5 category-font">
        <h1 className="text-2xl">Categories</h1>
        {maincategory.map(({ title, items }) => (
          <div key={title} className="pl-2">
            <h3 className="text-lg" onClick={() => toggleCategory(title)}>
              {title}
            </h3>
            {toggle[title] && items ? (
              <div>
                {items ? (
                  Object.entries(items).map(([subCategory, subItems]) => (
                    <div key={subCategory} className="pl-2">
                      <h5
                        className="text-[16px] cursor-pointer hover:text-[#3d6aff]"
                        onClick={() => SubHandleToggle(title, subCategory)}
                      >
                        {subCategory.charAt(0).toUpperCase() +
                          subCategory.slice(1).toLowerCase()}
                      </h5>
                      {subToggle[`${title}_${subCategory}`] && subItems ? (
                        <ul className="pl-2">
                          {Array.isArray(subItems) && subItems.length > 0 ? (
                            subItems.map((item, index) => (
                              <li key={index} className="text-[12px]">
                                {" "}
                                {item}{" "}
                              </li>
                            ))
                          ) : (
                            <li>No data Found</li>
                          )}
                        </ul>
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ))
                ) : (
                  <p>data not found for categories</p>
                )}
              </div>
            ) : (
              <p></p>
            )}
          </div>
        ))}
        <Fashion />

        <div className="pt-5">
          <div className="text-2xl pb-2 ">Rang For Price</div>
          <input
            type="range"
            min={248}
            max={1000000}
            value={rangSelecter}
            onChange={(e) => setRangSelecter(e.target.value)}
          />
        </div>

        <div className="py-5">
          <div className="text-2xl pb-2">Product Type</div>
          <div className="py-3">
            <select
              id="countries"
              onClick={updateFilter}
              onChange={(e) => setTargetVlaue(e.target.value)}
              name="productType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {productTypeOnlyData.map((UnicsCategories) => {
                return (
                  <option value={UnicsCategories}>{UnicsCategories}</option>
                );
              })}
            </select>
          </div>
        </div>

        <div>
          {/* {targetVlaue !== "All" && ( */}
          <>
            <div className="text-2xl pb-2">Company</div>
            {companyOnlyData.map((company, i) => (
              <div key={i} className="flex gap-3 items-center pl-2">
                <input
                  onClick={updateFilter}
                  type="radio"
                  value={company}
                  name="company"
                  className="focus:ring-2 ring-slate-600 rounded-full focus:ring-offset-2"
                />
                <div>{company}</div>
              </div>
            ))}
          </>
          {/* )} */}
        </div>
      </div>
    </>
  );
}

export default SideProductsNavbar;

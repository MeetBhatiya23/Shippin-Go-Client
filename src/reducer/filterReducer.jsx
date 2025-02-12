function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload], // Load products into state
        all_products: [...action.payload], // Keep a copy of all products
      };

    case "UPDATE_FILTER_DATA":
      const { name, value } = action.payload;
      console.log("Update the filter state (e.g., text input)", {
        [name]: value,
      });

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value, // Update the filter state (e.g., text input)
        },
      };

    case "FILTER_PRODUCT":
      const { all_products } = state;
      let tempFilterProduct = [...all_products]; // Use all products for filtering
      const { text, company, productType } = state.filter;
      console.log("productType-------------", productType);
      console.log("company-------------", company);

      // Check if text is not empty
      if (text && text.trim() !== "") {
        // Perform a case-insensitive search using includes
        tempFilterProduct = tempFilterProduct.filter(
          (product) =>
            product.title &&
            product.title.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (productType) {
        if (productType === "All") {
          tempFilterProduct = [...all_products];
        } else {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return (
              curElem.productType.trim().toLowerCase() ===
              productType?.trim().toLowerCase()
            );
          });
        }
      }

      console.log("all company send me ", productType);
      if (company) {
        if (company === "All") {
          if (productType !== "All") {
            tempFilterProduct = tempFilterProduct.filter((data) => {
              return (
                data.productType.trim().toLowerCase() ===
                productType?.trim().toLowerCase()
              );
            });
          } else {
            tempFilterProduct = [...all_products];
          }
        } else {
          console.log("tempFilterProduct", company);
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return (
              curElem.company.trim().toLowerCase() ===
              company?.trim().toLowerCase()
            );
          });
        }
      }
      return {
        ...state,
        filter_products: tempFilterProduct, // Update the filtered product list
      };

    default:
      return state;
  }
}

export default filterReducer;

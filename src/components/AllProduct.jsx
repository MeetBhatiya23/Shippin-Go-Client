import { useEffect } from "react";
import MainProduct from "./MainProduct";
import SideProductsNavbar from "./SideProductsNavbar";

function AllProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative top-[51px] sidebar">
      <div className="border-r border-r-gray-400 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.3)]">
        <SideProductsNavbar />
      </div>

      {/* All Products Show  */}

      <div>
        <MainProduct />
      </div>
    </div>
  );
}

export default AllProduct;

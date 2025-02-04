import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Error from "./components/Error";
import SingleProduct from "./components/SingleProduct";

import Contact from "./components/Contact";
import CreateUser from "./components/CreateUser";
import AllProduct from "./components/AllProduct";
import Admin from "./components/Admin";
import Addproducts from "./components/AddProducts/Addproducts";
import AddCart from "./components/AddCart";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import ProductLayOut from "./components/sharedLayout/ProductLayOut";
import VerifyPhone from "./components/login/VerifyPhone";
import ExLogin from "./components/login/ExLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowProduct from "./components/Admin/ShowProduct";
import FristPage from "./components/FristPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductLayOut />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About path="SG Store" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/allproducts" element={<AllProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/SingleProduct/:_id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addproducts" element={<Addproducts />} />
            <Route path="/addcart" element={<AddCart />} />
            <Route path="/showProduct" element={<ShowProduct />} />
            
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<ExLogin />} />
          <Route path="/verifyphone" element={<VerifyPhone />} />
          <Route path="/fristpage" element={<FristPage />} />
        </Routes>
      </BrowserRouter>
      <div>

        <ToastContainer />

      </div>
    </>
  )
}

export default App

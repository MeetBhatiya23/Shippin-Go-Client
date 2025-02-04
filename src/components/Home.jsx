import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaNapster, FaStudiovinari, FaInstagramSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { SiIheartradio } from "react-icons/si";
// import { useProductContext } from "../context/productContext";
import FeaturesProduct from "./FeaturesProduct";


// eslint-disable-next-line react/prop-types
function Home({ path }) {
//  const  = useProductContext()
//  console.log(hello)
  return (
    <>
      <div className="home-section flex justify-around ">
        <div className="inline w-[450px]">
          <p className="home-title text-[50px] text-[#3d73e7]">
            {path} Section
          </p>

          <div className=" p-[20px]">
            <p className="inline text-[#646262] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptates quibusdam nam modi. Velit autem nobis quas minus nam
              fugiat voluptates ipsa totam non, excepturi harum vel illo ex
              sequi.
            </p>
          </div>
        </div>
        <div className="flex" data-aos="fade-down">
          <img
            className="box-control w-80 object-cover z-2"
            src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>

{/* ---------------------------------------Featurse Peoducts--------------------------------------- - */}

<FeaturesProduct/>

{/* ----------------------------------------Facility Products---------------------------------------- */}
      <div className="main-item mt-10">
        <div className="flex flex-col items-center">
          <TbTruckDelivery className="delivery text-5xl cursor-pointer ml-4 text-[#3671f1]" />
          <div className="mt-3 text-[#4f5051]">Superfast Delivery</div>
        </div>

        <div className="flex flex-col items-center">
          <IoIosContacts className="contact  text-5xl cursor-pointer text-[#3671f1]" />
          <div className="mt-3 text-[#4f5051]" >Non contact delivery</div>
        </div>

        <div className="flex flex-col items-center">
          <RiSecurePaymentFill className="payment text-5xl font-normal cursor-pointer text-[#3671f1]" />
          <div className="mt-3 text-[#4f5051]">Secure Transaction</div>
        </div>
      </div>
      <div className="flex justify-evenly  items-center ">
        <div className="flex flex-col mr-[120px] items-center"><TbReplace className="payment text-5xl font-normal cursor-pointer text-[#3671f1]" />
          <div className="mt-3 text-[#4f5051]">7 days Replace</div></div>
        <div className="flex flex-col items-center"><GiDiamondTrophy className="payment text-5xl font-normal cursor-pointer text-[#3671f1]" />
          <div className="mt-3 text-[#4f5051]">Top Quality</div></div>
      </div>
      {/* <hr className="mt-6" /> */}
      <div >
        <div className="bg-[#bfd3f570] pt-[4px] mt-9 rounded-[20px] mx-[60px]">
          <div className="flex justify-center items-center mt-6 ">
            Trusted by 1000+ Companies
          </div>
          <div className="flex justify-center mt-6 pb-7">
            <div className="flex ">
              <FaNapster className="items-center text-2xl text-[#3671f1]" />
              <div className="ml-5 items-center mr-4 text-[#504f4f]"> Digitly</div>
            </div>
            <div className="flex">
              <FaStudiovinari className="items-center text-2xl text-[#3671f1]" />
              <div className="ml-5 items-center mr-4 text-[#504f4f]">Overce</div>
            </div>
            <div className="flex">
              <FaSnapchat className="items-center text-2xl text-[#3671f1]" />
              <div className="ml-5 items-center mr-4 text-[#504f4f]">Snap</div>
            </div>
            <div className="flex">
              <FaInstagramSquare className="items-center text-2xl text-[#3671f1]" />
              <div className="ml-5 items-center mr-4 text-[#504f4f]">Instagram</div>
            </div>
            <div className="flex">
              <SiIheartradio className="items-center text-2xl text-[#3671f1]" />
              <div className="ml-5 items-center mr-4 text-[#504f4f]">Health Care</div>
            </div>
          </div>
        </div>

        {/* Form section */}

        <div className="text-[30px] flex justify-center mt-4">Send Message in Email</div>
        <form className="max-w-sm mx-auto mb-16">
          <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MRB@email.com" />
          </div>
          <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" />

          </div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          <div className="flex pr-4 mt-4 py-2 ">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Send
            </button>
          </div>
        </form>

      </div>
    </>
  );
}

export default Home;

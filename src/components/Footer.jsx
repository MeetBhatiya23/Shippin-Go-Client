import { data } from "autoprefixer";
import {
  FaDiscord,
  FaInstagramSquare,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const footerHeadData = [
    {
      title: "Get to Know Us ",
      data: [
        "Home",
        "About Us",
        "Contact Us",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    { title: "Connect with Us", data: ["Facebook", "Twitter", "Instagram"] },
    {
      title: "Make Money with Us",
      data: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Supply to Amazon",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants",
      ],
    },
    {
      title: "Let Us Help You",
      data: [
        "Your Account",
        "Returns Centre",
        "Recalls and Product Safety Alerts",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help",
      ],
    },
  ];
  return (
    <>
      {/* <div className="mt-6 pt-10 ">
                <div className="bg-[#0b192f] ">
                    <div className="px-10 relative flex justify-center" >
                        <div className=" responsive bg-white p-3 rounded pt-0 flex justify-between absolute w-3/4 -bottom-7"  >
                            <div className="pl-4 text-[10px]">
                                <div>Ready to get start? </div>
                                <div>Talk to us Today</div>
                            </div>
                            <div className="flex pr-4">
                                <button type="button" className="text-white bg-[#319df6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-[10px] px-[30px] me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

                                    Start
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-white flex justify-between pt-[60px] px-20">
                        <div className="text-[10px]">
                            <div>Shoppin Go :</div>
                            <div>This is My Company and start in years 2024</div>
                        </div>
                        <div className="text-[10px]">
                            <div>Subscribe to get importent updates</div>
                            <div className="relative z-0 mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 text-[10px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-[14px] text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <button type="button" className="text-white bg-[#319df6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-[10px] px-[30px] py-[4px] me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

                                Start
                            </button>
                        </div>
                        <div className="text-[20px] pt-0">
                            <div className="text-[10px] px-4 pb-2">
                                <div>Follow Us</div>
                            </div>
                            <div className="flex justify-around ">

                                <a href=""><FaDiscord /></a>
                                <a href="https://www.instagram.com/llmeetbhatiya_23ll/"><FaInstagramSquare /></a>
                                <a href="https://www.youtube.com/@MRBhatiya23"><FaYoutube /></a>
                            </div>
                        </div>
                        <div className="text-[10px]">
                            <div>
                                Call us :
                            </div>
                            <div>+91 92650 40449</div>
                        </div>
                    </div>\
                    <hr />
                    <div className="flex text-[10px] text-white justify-around py-3 px-10 ">
                        <div>Privacy Policy</div>
                        <div>Terms & Condition</div>
                        <div className="flex items-center">Made with <FaHeart className="text-[20px] text-[#f2ff03] py-1  "/> by MRB</div>
                    </div>
                </div>
            </div> */}
      <div className="mt-[50px] ">
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="text-white cursor-pointer flex justify-center items-center w-full transition duration-500 ease-in-out bg-[#37475a] hover:bg-[#485769] py-3 px-20"
        >
          Back To Top
        </div>
        <div className="bg-[#232F3E]">
          <div className=" w-full container flex justify-between gap-28 items-start py-7 text-white ">
            {footerHeadData?.map((curElem) => (
              <div className="">
                <div className="text-[16px] py-3 font-bold ">
                  {curElem.title}
                </div>
                {curElem.data?.map((data) => (
                  <div className="text-sm py-1 hover:underline hover:text-blue-400 cursor-pointer text-[#DDD] font-medium">
                    {data}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="border-b-2 border-gray-600"></div>
          <div className="flex gap-20 items-center w-full py-3 justify-center">
            <img
              src="/src/assets/footer-logo.png"
              className="w-28 cursor-pointer"
              alt="logo images"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />

            <button className="text-sm rounded-md bg-[#232F3E] border  py-1.5 flex items-center gap-3 pl-2 pr-8 font-medium text-[#ddd] border-[#ddd]">
              <img
                src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ee-1f1f3.svg"
                className="w-5"
                alt="logo images"
              />
              India
            </button>
          </div>
        </div>
        <div className="bg-[#131A22] py-4 text-xs gap-1 text-[#DDD] flex flex-col items-center justify-center font-medium">
          <div className=" gap-5  w-full flex justify-center items-center">
            <div>Conditions of Use & Sale</div>
            <div>Privacy Notice</div>
            <div>Interest-Based Ads</div>
          </div>
          <div>© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </>
  );
}

export default Footer;

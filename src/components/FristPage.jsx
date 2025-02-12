import React, { useState } from "react";
import Nav from "./Nav";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import usePagination from "../helpers/usePagination";
import VideoPlayer from "./VideoPlay/VideoPlayer";

const mobileCompany = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71DoeQ838GL._AC_SY200_.jpg",
    company: "sumsang",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61PBLEFPoKL._AC_SY200_.jpg",
    company: "apple",
  },
  {
    id: 3,
    img: "https://www.reliancedigital.in/medias/GoogleGoogle-Pixel-9ProXL-494422676-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NTUxODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDJhL2hiMy8xMDIxMjIyMDYzMzExOC5qcGd8Y2NkODc0YWQzZjAyMmZhMTM3NDg3ODVkZjdkODk3YmZlNjFhYzIxMTk3MzAwZjhiOTk5MzFkMDgyZTNlNjA1OQ",
    company: "google",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51KJE22BKrL._AC_SY200_.jpg",
    company: "one plus",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/61S5FwZY1nL._AC_SY200_.jpg",
    company: "sumsang fold",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71LeI+8TBBL._SL1500_.jpg",
    company: "vivo",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61TsYMoy2RL._AC_SY200_.jpg",
    company: "iQoo",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/71NnrsYP63L._AC_SY200_.jpg",
    company: "redmi",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/71Qwha+BcbL._AC_SY200_.jpg",
    company: "realme",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/61PdYWrnvIL._AC_SY200_.jpg",
    company: "tecno",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/81CFCXH1tVL._SL1500_.jpg",
    company: "oppo",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/61G7flmHtRL._SL1200_.jpg",
    company: "lava",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/711SMo2bL4L._SL1500_.jpg",
    company: "xiaomi",
  },
  {
    id: 14,
    img: "https://dlcdnwebimgs.asus.com/gain/7B490446-2CEC-401F-A038-6CA777041E88/w1000/h732",
    company: "asus",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/71bUoXqQnML._SL1500_.jpg",
    company: "motorola",
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/81ahhuN4zdL._SL1500_.jpg",
    company: "Infinix",
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/71oWzHvuT-L._SL1500_.jpg",
    company: "Honor",
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/81bQGJVVwiL._SL1500_.jpg",
    company: "nothing",
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/31SPNGm46lL.jpg",
    company: "jio",
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/71oIjjNm+nL._SL1500_.jpg",
    company: "nokia",
  },
];

const Fasion = [
  { id: 1, img: "https://m.media-amazon.com/images/I/7114CT04M1L._SY741_.jpg" },
  { id: 2, img: "https://m.media-amazon.com/images/I/61syNVEqFPL._SY741_.jpg" },
  { id: 3, img: "https://m.media-amazon.com/images/I/61WYQoAqIWL._SY741_.jpg" },
  { id: 4, img: "https://m.media-amazon.com/images/I/619RjGbod9L._SY741_.jpg" },
  { id: 5, img: "https://m.media-amazon.com/images/I/6165Jd7dGML._SY741_.jpg" },
  { id: 6, img: "https://m.media-amazon.com/images/I/61pynXBR9sL._SX569_.jpg" },
  { id: 7, img: "https://m.media-amazon.com/images/I/71hxnEYmPmL._SX679_.jpg" },
  { id: 8, img: "https://m.media-amazon.com/images/I/613KABeTdwL._SY741_.jpg" },
  { id: 9, img: "https://m.media-amazon.com/images/I/71OF0sUauUL._SY741_.jpg" },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/61VogqW7l1L._SY741_.jpg",
  },
];
const companyFasion = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/1982/7331/files/offer_banner_mobile_2_943da723-b0e9-49a6-ba2d-92437d6e2868.jpg?v=1722402657",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ba6cea0c-2cef-4bbf-95c7-2002e6d82077._CR0,0,400,400_AC_SX96_SY48_QL70_.jpg",
    footer: "Elevate Your Style with Veirdo Tshirts",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c6fdecbf-38c5-4c4c-863b-b986c689f298._CR0,0,1200,628_SX460_QL70_.png",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c778b074-661d-4237-b8ce-ce265f06a573._CR0,0,1800,698_AC_SX96_SY48_QL70_.jpg",
    footer: "Stylish Tshirts For Men By Vimal Jonney",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7162b632-2b57-41c4-9b75-170e76c7a24e._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/38c2152b-d433-4420-ade3-a52f791c8d88._CR0,0,1000,1000_AC_SX96_SY48_QL70_.jpg",
    footer: "Cloudsoft innerwear for all day comfort",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6ab2d38f-08af-4d86-a617-c6d04fdd3eaa._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab5a4d38-2bda-4a2e-bb82-011e5db77fa5._CR0,0,1080,1080_AC_SX96_SY48_QL70_.jpg",
    footer: "Stylish & Comfortable T-shirts for Men",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d7b6b693-1fa6-433d-9afd-3e6d75d657b7._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2c15c6d5-dbab-4f6e-91f8-e534a28aac7d._CR0,0,1079,483_AC_SX96_SY48_QL70_.jpeg",
    footer: "Stylish T-Shirts for Men",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ed8159a5-277e-4afb-a4d5-b8c2b9ca0e1c._CR0,0,1280,670_SX460_QL70_.jpeg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a13acc76-764c-4070-bd9d-6cefd86383f7._CR0,0,800,800_AC_SX96_SY48_QL70_.jpg",
    footer: "Premium Quality T-shirts",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0b0e40dd-8372-4e82-9194-43c972c3f2b8._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5ae63214-44a4-4d68-bee7-dfe04d7b7873._CR0,0,1080,1080_AC_SX96_SY48_QL70_.jpg",
    footer: "Elevate Your Style with Juneberry Tshirts",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a4bac256-2758-4c07-bd93-fdf0fd527824._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3fedb873-74d7-41b1-b4b5-3ff61f6daa9b._CR0,0,4168,2084_AC_SX96_SY48_QL70_.png",
    footer: "Explore Bewakoofs Range Of Mens Tees",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4e81dcc9-83e1-4b55-b4a8-b649e2d7f3b5._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/47253627-bf90-4c16-a6f4-eecc98d005ef._CR0,0,2000,2000_AC_SX96_SY48_QL70_.png",
    footer: "World`s Best Oversized T-shirt",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b686b116-c8ca-4984-a147-99936835117d._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/21397d91-1143-4e0c-89f2-e3b901801222._CR0,0,1000,1000_AC_SX96_SY48_QL70_.png",
    footer: "Anime Oversized T Shirts - CrazyMonk",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9481a92a-75f6-4735-9ddf-931989d4549a._CR0,0,1200,628_SX460_QL70_.jpg",
    logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1c816972-63cd-4392-b079-f51f6890572a._CR0,0,3032,482_AC_SX96_SY48_QL70_.png",
    footer: "Women Printed Gym Tshirt",
  },
];

const FristPage = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const itemsPerPageFasionCompany = 3;

  const {
    paginatedData: mobilePaginatedData,
    handleNext: handleMobileNext,
    handlePrevious: handleMobilePrevious,
    currentPage: mobileCurrentPage,
    startIndex: mobileStartIndex,
  } = usePagination(mobileCompany, itemsPerPage);
  const {
    paginatedData: fashionPaginatedData,
    handleNext: handleFashionNext,
    handlePrevious: handleFashionPrevious,
    currentPage: fashionCurrentPage,
    startIndex: fasionstartIndex,
  } = usePagination(Fasion, itemsPerPage);
  const {
    paginatedData: fashionCompanyPaginatedData,
    handleNext: handleFashionCompanyNext,
    handlePrevious: handleFashionCompanyPrevious,
    currentPage: fashionCompanyCurrentPage,
    startIndex: fasionCompanystartIndex,
  } = usePagination(companyFasion, itemsPerPageFasionCompany);

  const buttonClass = "border border-gray-400 text-lg p-2 rounded";
  const disabledClass = "text-gray-400 bg-gray-100 cursor-not-allowed";
  const enabledClass = "text-gray-700 hover:bg-gray-200";

  return (
    <>
      <Nav />
      <div className="bg-[#cfe1df]">
        <div>
          <img
            src="src\assets\back-ground.jpg"
            className="relative w-full pt-12"
            alt=""
          />
          <div></div>
          <div className="grid  gap-5 px-10 absolute top-80">
            <div className="grid grid-cols-4 gap-5">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
              <div className="">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <a
                  href="#"
                  className="block mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div className="w-full block p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h1 className="font-semibold text-3xl">
                  More items to consider
                </h1>
              </div>
              <div className="flex w-full">
                <div className="flex items-center">
                  <button
                    className={`${buttonClass} ${
                      mobileCurrentPage === 0 ? disabledClass : enabledClass
                    }`}
                    onClick={handleMobilePrevious}
                    disabled={mobileCurrentPage === 0}
                  >
                    <LuArrowLeft />
                  </button>
                </div>
                <div className="grid grid-cols-5  gap-2 w-full justify-center mt-5">
                  {mobilePaginatedData?.map((datas) => {
                    return (
                      <div className="flex  justify-center">
                        <div className="flex flex-col gap-4">
                          <img
                            className="h-[200px] object-cover"
                            src={datas.img}
                            alt=""
                          />
                          <div className="flex justify-center text-sm font-semibold text-gray-600 ">
                            {datas.company.toLocaleUpperCase()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center">
                  <button
                    className={`${buttonClass} ${
                      mobileStartIndex + itemsPerPage >= mobileCompany.length
                        ? disabledClass
                        : enabledClass
                    }`}
                    onClick={handleMobileNext}
                    disabled={
                      (mobileCurrentPage + 1) * itemsPerPage >=
                      mobileCompany.length
                    }
                  >
                    <LuArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full block px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h1 className="font-semibold text-3xl">
                  Related to items you've viewed
                </h1>
              </div>
              <div className="flex w-full">
                <div className="flex items-center">
                  <button
                    className={`${buttonClass} ${
                      fashionCurrentPage === 0 ? disabledClass : enabledClass
                    }`}
                    onClick={handleFashionPrevious}
                    disabled={fashionCurrentPage === 0}
                  >
                    <LuArrowLeft />
                  </button>
                </div>
                <div className="grid grid-cols-5  gap-2 w-full justify-center mt-5">
                  {fashionPaginatedData?.map((data) => {
                    return (
                      <div className="flex h-60 justify-center">
                        <img
                          className=" object-contain h-[200px]"
                          src={data.img}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center">
                  <button
                    className={`${buttonClass} ${
                      fasionstartIndex + itemsPerPage >= Fasion?.length
                        ? disabledClass
                        : enabledClass
                    }`}
                    onClick={handleFashionNext}
                    disabled={
                      (fashionCurrentPage + 1) * itemsPerPage >= Fasion.length
                    }
                  >
                    <LuArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full block p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h1 className="font-semibold text-3xl">
                  Brands in this category on ShoppinGo
                </h1>
              </div>
              <div className="flex w-full">
                <div className="flex items-center">
                  <button
                    className={`${buttonClass} ${
                      fashionCompanyCurrentPage === 0
                        ? disabledClass
                        : enabledClass
                    }`}
                    onClick={handleFashionCompanyPrevious}
                    disabled={fashionCompanyCurrentPage === 0}
                  >
                    <LuArrowLeft />
                  </button>
                </div>
                <div className=" ml-5 mr-5 grid grid-cols-3  gap-2 w-full justify-center mt-5">
                  {fashionCompanyPaginatedData?.map((data) => {
                    return (
                      <div className="flex  justify-center ">
                        <div class=" bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-y-hidden relative group pb-16">
                          <a href="#">
                            <img
                              class="rounded-t-lg h-56 object-cover max-w-full"
                              src={data.img}
                              alt=""
                            />
                          </a>
                          <div class="p-3 w-full flex justify-center flex-col items-center bg-white absolute group-hover:-translate-y-8 transition duration-300 ease-linear">
                            <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <img
                                  className="w-24 h-10 object-contain"
                                  src={data.logo}
                                  alt=""
                                />
                              </h5>
                            </a>
                            <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                              {data.footer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center">
                  <button
                    className={`${buttonClass} ${
                      fasionCompanystartIndex + itemsPerPageFasionCompany >=
                      companyFasion?.length
                        ? disabledClass
                        : enabledClass
                    }`}
                    onClick={handleFashionCompanyNext}
                    disabled={
                      (fashionCompanyCurrentPage + 1) *
                        itemsPerPageFasionCompany >=
                      Fasion.length
                    }
                  >
                    <LuArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FristPage;
